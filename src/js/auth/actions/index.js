import {createAction} from "redux-actions";

export const checkAuthAction = createAction("AUTH", (cookies) => ({cookies}));
export const putAuthAction = createAction('PUT_AUTH', (isAuthorized, user) => ({isAuthorized, user}));
export const putLoadingAction = createAction('PUT_LOADING_AUTH', (isLoading) => ({isLoading}));
export const putLoadingLoginAction = createAction('PUT_LOADING_LOGIN', (isLoading) => ({isLoading}));
export const putErrorsAction = createAction('PUT_ERRORS', (errors) => ({errors}));
export const logInAction = createAction('LOG_IN_ACTION', (email, password, setCookie) => ({email, password, setCookie}));
