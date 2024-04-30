import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import Component from '../component/follower';
import { addNewRecord } from '../reducer/action';


const mapStateToProps = state => {
    return {
        Loading: state.user_follower.isLoading,
        follower: state.user_follower.tataoos_follower

    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({

        addNewRecord

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)