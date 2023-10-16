import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { BASE_PATH_URL } from 'src/app/shared/tokens/environment.tokens';
import { AuthData } from '../store/admin-auth.reducer';
import { getAdminAuthData } from '../store/admin-auth.selectors';

@Injectable({
    providedIn: 'root',
})
export class AdminAuthService {
    constructor(
        private http: HttpClient,
        private jwtHelperService: JwtHelperService,
        private store$: Store,
        @Inject(BASE_PATH_URL) private basePath: string
    ) {}

    public isAuth$: Observable<boolean> = this.store$.pipe(
        select(getAdminAuthData),
        map(authData => !!authData)
    );

    public isGuest$: Observable<boolean> = this.isAuth$.pipe(
        map(isAuth => !isAuth)
    );

    public login(body: { login: string, password: string }): Observable<AuthData> {
        return this.http.post<{ accessToken: string }>(
            `${this.basePath}/auth/login`,
            body
        ).pipe(
            map(res => {
                const { exp, iat, id } = this.jwtHelperService.decodeToken(res.accessToken);
                return {
                    ...res, exp, iat, id
                }
            })
        );
    }

    public refresh(): Observable<AuthData> {
        return this.http.put<{ accessToken: string }>(
            `${this.basePath}/auth/refresh`, {}
        ).pipe(
            map(res => {
                const { exp, iat, id } = this.jwtHelperService.decodeToken(res.accessToken);
                return {
                    ...res, exp, iat, id
                }
            })
        );
    }
}
