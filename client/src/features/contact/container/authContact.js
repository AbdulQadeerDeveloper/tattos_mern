import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ContactAuthenticator from '../component/contact';
import { messageUser } from '../reducer/action';

const mapStateToProps = state => ({
    Loading: state.messageReducer.isLoading,
    users: state.messageReducer.user,
    isAuthenticated: state.messageReducer.isAuthenticated,
    error: state.messageReducer.error, 
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        messageUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ContactAuthenticator);
