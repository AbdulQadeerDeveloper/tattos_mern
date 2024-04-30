
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/homeSlider_2';
import { addNewRecord } from '../reducers/actions';

const mapStateToProps = state => {
    return {
        loading: state.profileData.isLoading,
        Home_Slider_2:state.profileData.slider2_Banner_Home,
        error: null
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addNewRecord
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);