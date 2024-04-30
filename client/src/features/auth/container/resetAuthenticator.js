import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ResetAuthenticator from '../components/resetPassword';
import { resetPassword } from '../reducers/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        resetPassword, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResetAuthenticator);
