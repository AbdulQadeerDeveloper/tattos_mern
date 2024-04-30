
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/homeSlider';
import { addNewRecord } from '../reducers/actions';

const mapStateToProps = state => {
    return {
        loading: state.profileData.isLoading,
        Home_Slider:state.profileData.slider_Banner_Home,
        error: null
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addNewRecord
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);