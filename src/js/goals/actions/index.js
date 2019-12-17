import {createAction} from "redux-actions";

export const loadGoalsAction = createAction("LOAD_GOALS", (userId) => ({userId}));
export const putGoalsAction = createAction("PUT_GOALS", (goals) => ({goals}));
export const putLoadingAction = createAction("PUT_LOADING_GOALS", (isLoading) => ({isLoading}));
export const putErrorsAction = createAction("PUT_ERRORS_GOALS", (errors) => ({errors}));
