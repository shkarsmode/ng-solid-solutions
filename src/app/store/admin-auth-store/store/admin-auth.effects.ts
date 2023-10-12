import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { catchError, filter, first, fromEvent, map, of, switchMap, tap, timer } from 'rxjs';
import { AdminAuthService } from '../services/admin-auth.service';
import { extractLoginData, initAdminAuth, login, loginFailed, loginSuccess, logoutSuccess } from './admin-auth.actions';
import { AuthData } from './admin-auth.reducer';
import { isAuth } from './admin-auth.selectors';

@Injectable()
export class AdminAuthEffects {
	public login$ = createEffect(() => this.actions$.pipe(
		ofType(login),
		switchMap(({ login, password }) => this.adminAuthService.login({ login, password })
			.pipe(
				map(authData => loginSuccess({ authData })),
				catchError(error => of(loginFailed({ serverError: error.error.message}))),
			)
		)
	));

	public refresh$ = createEffect(() => this.actions$.pipe(
		ofType(loginSuccess),
		switchMap(({ authData }) => timer(authData.exp * 1000 - 60 * 1000 - Date.now())),
		switchMap(() => this.store$.pipe(
			select(isAuth),
			first(),
			filter(isAdminAuth => isAdminAuth)
		)),
		switchMap(() => this.adminAuthService.refresh()),
		map(authData => loginSuccess({ authData }))
	));

	public saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
		ofType(loginSuccess),
		tap(loginSuccessData => {
			const { authData } = loginSuccessData;
			localStorage.setItem('authData', JSON.stringify(authData));
		})
	), { dispatch: false });

	public extractLoginData$ = createEffect(() => this.actions$.pipe(
		ofType(initAdminAuth, extractLoginData),
		map(() => {
			const authDataString = localStorage.getItem('authData');
			if (!authDataString) {
				return logoutSuccess();
			}

			const authData: AuthData = JSON.parse(authDataString);
			if ((authData.exp * 1000 - 10 * 1000 - Date.now()) < 0) {
				return logoutSuccess();
			}
			
			return loginSuccess({ authData });
		})
	));

	public listenStorageEffect$ = createEffect(() => this.actions$.pipe(
		ofType(initAdminAuth),
		switchMap(() => fromEvent(window, 'storage')),
		map(() => extractLoginData())
	));


    constructor(
		private actions$: Actions,
		private adminAuthService: AdminAuthService,
		private store$: Store
	) {}
}
