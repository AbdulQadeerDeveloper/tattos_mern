import { connect } from 'react-redux';
import TattooDetail from '../components/tattooDetail';
import { fetchTattoo } from '../reducers/action';


const mapStateToProps = (state) => {
    return {
        tattooData: state.tattooReducer.tattoos,
    };
};

const mapDispatchToProps = {
    fetchTattoo,
};

const TattooDetailContainer = connect(mapStateToProps, mapDispatchToProps)(TattooDetail);

export default TattooDetailContainer;
