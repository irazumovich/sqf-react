import { connect } from "react-redux";

import Navigation from "goals/components/navigation/navigation-section/navigation";
import {logInAction} from "auth/actions";
import {loadGoalsAction} from "goals/actions";

export default connect(
    state => ({
        token: state.auth.user.access_token,
        userId: state.auth.user && state.auth.user.id,
        isAuthorized: state.auth.isAuthorized,
        goals: state.goal.goals,
    }),
    dispatch => ({
        loadGoals: (userId) => dispatch(loadGoalsAction(userId))
    })
)(Navigation);
