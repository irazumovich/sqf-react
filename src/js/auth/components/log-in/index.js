import { connect } from "react-redux";

import LogIn from "./log-in";
import {logInAction} from "auth/actions";

export default connect(
    state => ({
        isLoading: state.auth.isLoading
    }),
    dispatch => ({
        logIn: (email, password, setCookie) => dispatch(logInAction(email, password, setCookie)),
    })
)(LogIn);
