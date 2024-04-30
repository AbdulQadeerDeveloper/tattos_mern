import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from "../component/categories";
import { addNewRecord } from '../reducers/action';


const mapStateToProps = state => {
    return {
        loading: state.profileCategories.isLoading,
        Categories_list:state.profileCategories.tatoo_Categories,
        Categories_list_categorie:state.profileCategories.tatoo_Categories_List,
        error: null
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addNewRecord
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);