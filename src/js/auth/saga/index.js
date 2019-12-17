import {all, call, fork, put} from 'redux-saga/effects';
import {takeLatest} from "@redux-saga/core/effects";
import {
    checkAuthAction,
    logInAction,
    putAuthAction,
    putErrorsAction,
    putLoadingAction,
    putLoadingLoginAction
} from "auth/actions";
import {checkAuth, logIn} from "auth/controllers";

// Check auth
function* checkAuthSaga({payload: {cookies}}) {
    yield put(putLoadingAction(true));
    try {
        const token = cookies.get('access_token', {path: '/'});
        if (token) {
            const {data} = yield call(checkAuth);
            yield put(putAuthAction(true, data.data));
        } else {
            yield put(putAuthAction(false, {}));
        }
        yield put(putLoadingAction(false));
    } catch (e) {
        console.log(e)
        yield put(putAuthAction(false, {}));
        yield put(putLoadingAction(false));
        yield put(putErrorsAction(e.response.data.message))
    }
}

function* watchAuthAction() {
    yield takeLatest(checkAuthAction, checkAuthSaga);
}

// End check auth

// Log in
function* logInSaga({payload: {email, password, setCookie}}) {
    yield put(putLoadingLoginAction(true));
    try {
        const {data} = yield call(logIn, {email, password});
        setCookie('access_token', data.access_token, {path: '/'});
        yield put(putAuthAction(true, data.user));
        yield put(putLoadingLoginAction(false));
    } catch (e) {
        console.log(e);
        yield put(putAuthAction(false, null));
        yield put(putLoadingLoginAction(false));
        yield put(putErrorsAction(e.response.data.message))
    }
}

function* watchLogInAction() {
    yield takeLatest(logInAction, logInSaga);
}

// End log in

export default function* () {
    yield all([
        watchAuthAction(),
        watchLogInAction(),
    ])
}
