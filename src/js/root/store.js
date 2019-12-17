import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from '../root/saga/index';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

export default () => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
