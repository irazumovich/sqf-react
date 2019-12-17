import { connect } from 'react-redux';
import {Goal} from "goals/components/goal/goal";


export default connect(
    state => ({
        goals: state.goal.goals,
        user: state.auth.user,
        isLoading: state.auth.isLoading
    }),
    dispatch => ({})
)(Goal);
