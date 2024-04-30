import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from "../components/artis_det";
import { addNewRecord } from '../reducer/action';



const mapStateToProps = state => {
    return {
        loading: state.artistDetails.isLoading,
        Artis_list_upload:state.artistDetails.tatoo_upload_List,
        Artist_info_list:state.artistDetails.tatoo_Info,
        error: null
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addNewRecord
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);