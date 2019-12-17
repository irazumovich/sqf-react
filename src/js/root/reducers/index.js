import { combineReducers } from 'redux';

import authReducer from 'auth/reducers';
import goalReducer from 'goals/reducers';

export default combineReducers({
    auth: authReducer,
    goal: goalReducer,
});
