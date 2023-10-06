import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ADMIN_AUTH_FEATURENAME, AdminAuthState, AuthData } from './admin-auth.reducer';

const getFeature = createFeatureSelector<AdminAuthState>(ADMIN_AUTH_FEATURENAME);

export const getAdminAuthLoading = createSelector<object, AdminAuthState, boolean>(
	getFeature,
	state => state.loading
);

export const getAdminAuthLoaded = createSelector<object, AdminAuthState, boolean>(
	getFeature,
	state => state.loaded
);

export const getAdminAuthServerError = createSelector<object, AdminAuthState, string>(
	getFeature,
	state => state.serverError
);

export const getAdminAuthAuthData = createSelector<object, AdminAuthState, AuthData | undefined>(
	getFeature,
	state => state.authData
);

export const getAdminAuthAccessToken = createSelector<object, AuthData | undefined, string | undefined>(
	getAdminAuthAuthData,
	authData => authData && authData.accessToken
);

export const isAuth = createSelector<object, string | undefined, boolean>(
	getAdminAuthAccessToken,
	accessToken => !!accessToken
);