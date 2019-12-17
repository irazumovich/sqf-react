import { handleActions } from "redux-actions";
import {putErrorsAction, putGoalsAction, putLoadingAction} from "goals/actions";
import produce from "immer"


const InitialState = {
    isLoading: true,
    goals: [],
    errors: [],
};

export default handleActions(
    {
        [putGoalsAction]: (state, { payload: { goals } }) => produce(state, draftState => {
            draftState.goals = goals;
        }),
        [putLoadingAction]: (state, {payload: {isLoading}}) => produce(state, draftState => {
            draftState.isLoading = isLoading;
        }),
        [putErrorsAction]: (state, {payload: {errors}}) => produce(state, draftState => {
            draftState.errors = errors;
        }),
    },
    InitialState
);
