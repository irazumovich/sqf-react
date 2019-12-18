import { connect } from 'react-redux';
import {Goal} from "goals/components/goal/goal";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default connect(
    state => ({
        token: state.auth.user.access_token,
        goals: state.goal.goals,
        user: state.auth.user,
        isLoading: state.auth.isLoading
    }),
    dispatch => ({})
)(Goal);
