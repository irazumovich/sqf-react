import { connect } from 'react-redux';
import {Home} from "./home";


export default connect(
    state => ({
        isLoading: state.auth.isLoading
    }),
    dispatch => ({})
)(Home);
