import { connect } from 'react-redux'
import Component from '../components/artist'
import { addNewRecord } from '../../home/reducers/actions'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
    return {
        loading: state.profileData.isLoading,
        follower_artist: state.profileData.artist_Follower,
        slider_1: state.profileData.slider_Banner_Home,
        slider_2:state.profileData.slider2_Banner_Home,
        slider_3:state.profileData.slider_Banner_Home
        
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addNewRecord
    }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Component)