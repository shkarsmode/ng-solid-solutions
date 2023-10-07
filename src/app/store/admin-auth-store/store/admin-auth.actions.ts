import { createAction, props } from "@ngrx/store";
import { AuthData } from "./admin-auth.reducer";

export enum ActionTypes {
    Login = '[Admin Auth] Login',
    LoginSucess = '[Admin Auth] Login Success',
    LoginFailed = '[Admin Auth] Login Failed',
    ChangeForm = '[Admin Auth] Change Form',
}

/**
 * * Or you can use a class approach *
 *  export class Login implements Action {
 *  	readonly type = ActionTypes.Login;
 * 		constructor(public payload: { login: string, password: string }) {}
 * 	}
 * 
 * store.dispatch(new Login({ username: username, password: password }));
 */

export const login = createAction(
	ActionTypes.Login, 
	props<{ login: string, password: string }>()
);

export const loginSuccess = createAction(
	ActionTypes.LoginSucess, 
	props<AuthData>()
);

export const loginFailed = createAction(
	ActionTypes.LoginFailed, 
	props<{ serverError: string }>()
);

export const changeForm = createAction(
	ActionTypes.ChangeForm
);