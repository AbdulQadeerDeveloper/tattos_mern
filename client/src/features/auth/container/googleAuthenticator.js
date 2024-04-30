import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginAuthenticator from '../components/login';
import { googleLoginUser } from '../googleReducer/action';

const mapStateToProps = state => ({
    Loading: state.googleLoginReducer.isLoading,
    users: state.googleLoginReducer.user,
    isAuthenticated: state.googleLoginReducer.isAuthenticated,
    error: state.googleLoginReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        googleLoginUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthenticator);
