import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { BASE_PATH_URL } from 'src/shared/tokens/environment.tokens';
import { AuthData } from '../store/admin-auth.reducer';

@Injectable({
    providedIn: 'root',
})
export class AdminAuthService {
    constructor(
        private http: HttpClient,
        private jwtHelperService: JwtHelperService,
        @Inject(BASE_PATH_URL) private basePath: string
    ) {}

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
}
