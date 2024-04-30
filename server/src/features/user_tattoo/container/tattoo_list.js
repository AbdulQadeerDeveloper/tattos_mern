import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import Component from '../component/user_tattoo';
import { addNewRecord } from '../../about/reducers/action';


const mapStateToProps = state => {
    return {
        Loading: state.profileDetails.isLoading,
        tataoos_Details_about: state.profileDetails.tataoos_Details

    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({

        addNewRecord

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)