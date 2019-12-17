import {all, call, fork, put} from 'redux-saga/effects';
import {takeLatest} from "@redux-saga/core/effects";

import {loadGoals} from "goals/controllers";
import {loadGoalsAction, putGoalsAction, putLoadingAction} from "goals/actions";

// Load goals
function* loadGoalsSaga({payload: {userId}}) {
    yield put(putLoadingAction(true));
    try {
        console.log(userId)
        const {data} = yield call(loadGoals, userId);
        console.log(data)
        yield put(putGoalsAction(data.data));
        yield put(putLoadingAction(false));
    } catch (e) {
        console.log(e);
    }
}

function* watchLoadGoalsAction() {
    yield takeLatest(loadGoalsAction, loadGoalsSaga);
}

// End load goals

export default function* () {
    yield all([
        watchLoadGoalsAction(),
    ])
}
