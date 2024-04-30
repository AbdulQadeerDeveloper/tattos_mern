import { connect } from 'react-redux';
import Placement from '../component/table';
import { fetchPlacement,deletePlacement } from '../reducer/action';


const mapStateToProps = (state) => {
    
    return {
        tattooPlacement: state.placementReducer.placement,
      
    };
    
};

const mapDispatchToProps = {
    fetchPlacement,deletePlacement
};

const TattooDetailContainer = connect(mapStateToProps, mapDispatchToProps)(Placement);

export default TattooDetailContainer;
