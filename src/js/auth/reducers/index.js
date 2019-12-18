import { handleActions } from "redux-actions";
import {putAuthAction, putErrorsAction, putLoadingAction, putLoadingLoginAction, resetStoreAction} from "auth/actions";
import produce from "immer"


const InitialState = {
    isLoading: true,
    isLoadingLogin: false,
    isAuthorized: false,
    user: {},
    errors: [],
};

export default handleActions(
    {
        [putAuthAction]: (state, { payload: { isAuthorized, user } }) => produce(state, draftState => {
            draftState.isAuthorized = isAuthorized;
            draftState.user = user;
        }),
        [putLoadingAction]: (state, {payload: {isLoading}}) => produce(state, draftState => {
            draftState.isLoading = isLoading;
        }),
        [putLoadingLoginAction]: (state, {payload: {isLoading}}) => produce(state, draftState => {
            draftState.isLoadingLogin = isLoading;
        }),
        [putErrorsAction]: (state, {payload: {errors}}) => produce(state, draftState => {
            draftState.errors = errors;
        }),
        [resetStoreAction]: (state) => produce(state, draftState => {
            draftState = InitialState;
        }),
    },
    InitialState
);
