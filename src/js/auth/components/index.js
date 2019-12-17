import { connect } from 'react-redux';
import {Authentication} from "./authentication";


export default connect(
    state => ({
        isLoading: state.auth.isLoading
    }),
    dispatch => ({})
)(Authentication);
