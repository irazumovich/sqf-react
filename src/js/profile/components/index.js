import { connect } from 'react-redux';
import {Profile} from "profile/components/profile";


export default connect(
    state => ({
        isLoading: state.auth.isLoading
    }),
    dispatch => ({})
)(Profile);
