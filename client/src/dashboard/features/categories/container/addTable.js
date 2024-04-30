import { connect } from 'react-redux';
import TattooDetail from '../component/table';
import { fetchCategory} from '../reducer/action';


const mapStateToProps = (state) => {
    return {
        getCategory: state.fetchCategoryReducer.category,
       
    };
};

const mapDispatchToProps = {
    fetchCategory
    
};

const TattooDetailContainer = connect(mapStateToProps, mapDispatchToProps)(TattooDetail);

export default TattooDetailContainer;
