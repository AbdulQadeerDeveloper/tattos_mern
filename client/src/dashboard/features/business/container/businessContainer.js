import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import BusinessForm from '../component/form';
import { submitBusinessForm } from '../reducer/action';

const mapStateToProps = state => ({
    Loading: state.businessForm.isLoading,
    businessUser: state.businessForm.data,
    error: state.businessForm.error, 
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        submitBusinessForm, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BusinessForm);
