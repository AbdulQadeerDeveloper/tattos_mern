import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginAuthenticator from '../../auth/components/login';
import { loginUser } from '../../auth/reducers/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loginUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthenticator);
