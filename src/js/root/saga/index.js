import {all} from "@redux-saga/core/effects";
import watchAuthSaga from 'auth/saga'
import watchGoalsSaga from 'goals/saga'

export default function*() {
    yield all([
        watchAuthSaga(),
        watchGoalsSaga()
    ])
}
