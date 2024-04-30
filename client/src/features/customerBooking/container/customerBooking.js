import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import CustomerForm from '../component/customerBooking';
import { submitCustomerForm } from '../reducer/action';

const mapStateToProps = state => ({
    Loading: state.customerForm.isLoading,
    customerDetails: state.customerForm.data,
    error: state.customerForm.error,
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        submitCustomerForm,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
