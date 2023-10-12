import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BASE_PATH_URL } from 'src/app/shared/tokens/environment.tokens';
import { changeForm, login } from 'src/app/store/admin-auth-store/store/admin-auth.actions';
import * as adminAuth from 'src/app/store/admin-auth-store/store/admin-auth.selectors';

@Component({
    selector: 'app-admin-login-widget',
    templateUrl: './admin-login-widget.component.html',
    styleUrls: ['./admin-login-widget.component.scss'],
})
export class AdminLoginWidgetComponent implements OnInit {
    public loading$: Observable<boolean> = this.store$.pipe(select(adminAuth.getAdminAuthLoading));
    public loaded$: Observable<boolean> = this.store$.pipe(select(adminAuth.getAdminAuthLoaded));
    public serverError$: Observable<string> = 
        this.store$.pipe(select(adminAuth.getAdminAuthServerError));

    constructor(
        private store$: Store,
        private http: HttpClient,
        @Inject(BASE_PATH_URL) private basePathUrl: string
    ) {}

    public ngOnInit(): void {}

    public onSubmitForm(loginPayload: { login: string, password: string }): void {
        this.store$.dispatch(login(loginPayload));
    }

    public onChangeForm(): void {
        this.store$.dispatch(changeForm());
    }

    public testProfile(): void {
        this.http.get(`${this.basePathUrl}/auth/profile`).subscribe(res => console.log(res));
    }
}
