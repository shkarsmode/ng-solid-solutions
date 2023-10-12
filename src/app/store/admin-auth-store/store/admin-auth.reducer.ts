import { createReducer, on } from '@ngrx/store';
import { changeForm, login, loginFailed, loginSuccess, logoutSuccess } from './admin-auth.actions';

export const ADMIN_AUTH_FEATURENAME = 'admin-auth';

export interface AuthData {
	accessToken: string;
	id: number;
	iat: number;
	exp: number;
}

export interface AdminAuthState {
	loading: boolean;
	loaded: boolean;
	serverError: string;
	authData?: AuthData;
}

const initialState: AdminAuthState = {
	loading: false,
	loaded: true,
	serverError: ''
};

export const adminAuthReducer = createReducer(
	initialState,
	on(login, state => ({
		...state,
		loading: true
	})),
	on(loginSuccess, (state, { authData }) => ({
		...state,
		loaded: true,
		loading: false,
		authData: authData
	})),
	on(loginFailed, (state, { serverError }) => ({
		...state,
		loaded: true,
		loading: false,
		authData: undefined,
		serverError
	})),
	on(changeForm, state => ({
		...state,
		serverError: ''
	})),
	on(logoutSuccess, () => ({
		...initialState,
		authData: undefined
	}))
);
