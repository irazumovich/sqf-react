import { connect } from "react-redux";

import UserDropDown from "shared/components/UserDropDown/UserDropDown";
import {resetStoreAction} from "auth/actions";

export default connect(
    state => ({
        user: state.auth.user,
    }),
    dispatch => ({
        resetStore: () => dispatch(resetStoreAction()),
    })
)(UserDropDown);
