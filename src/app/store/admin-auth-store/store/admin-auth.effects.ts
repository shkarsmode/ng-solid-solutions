import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AdminAuthService } from '../services/admin-auth.service';
import { login, loginFailed, loginSuccess } from './admin-auth.actions';

@Injectable()
export class AdminAuthEffects {
	public login$ = createEffect(() => this.actions$.pipe(
		ofType(login),
		switchMap(({ login, password }) => this.adminAuthService.login({ login, password })
			.pipe(
				map(loginSuccessData => loginSuccess(loginSuccessData)),
				catchError(error => of(loginFailed({ serverError: error.error.message}))),
			)
		)
	));

    constructor(
		private actions$: Actions,
		private adminAuthService: AdminAuthService
	) {}
}
