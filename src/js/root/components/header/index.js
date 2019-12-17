import { connect } from "react-redux";

import Header from "./header";

export default connect(
    state => ({
        isAuthenticated: state.auth.isAuthorized,
        userImage: state.auth.user.image
    }),
    dispatch => ({})
)(Header);
