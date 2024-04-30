import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from "../component/tatt00Table";
import { fetchTattoos } from "../reducers/action"



const mapStateToProps = state => {
    return {
        loading: state.tattooReducer1.isLoading,
        tattoosData: state.tattooReducer1.tattoos,
        error: null
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchTattoos
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);