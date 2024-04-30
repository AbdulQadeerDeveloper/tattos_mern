import { connect } from 'react-redux';
import Component from '../component/categories';
import { fetchCategory} from '../reducers/action';


const mapStateToProps = (state) => {
    return {
        TattooCategory: state.tattooCategorties.category,
      
    };
};

const mapDispatchToProps = {
    fetchCategory,
   
};

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default CategoryContainer;
