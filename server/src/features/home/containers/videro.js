import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Component   from '../components/video'

import { addNewRecord } from '../reducers/actions'

const mapStateToProps = state => {
    return {
        loading : state.profileData.isLoading,
        video_slider : state.profileData.video_home_slider,
        error:null
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        addNewRecord
    }, dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps)(Component)