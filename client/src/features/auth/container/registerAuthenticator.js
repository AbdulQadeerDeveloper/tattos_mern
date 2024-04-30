import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import RegisterAuthenticator from '../components/register';
import { registerUser } from '../reducers/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAuthenticator);
