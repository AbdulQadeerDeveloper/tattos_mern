import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ForgotAuthenticator from '../components/forgotPassword';
import { forgotPassword } from '../reducers/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        forgotPassword, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotAuthenticator);
