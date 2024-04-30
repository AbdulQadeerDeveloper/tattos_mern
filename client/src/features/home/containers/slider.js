import { connect } from 'react-redux';
import component from '../components/slider';
import { fetchSlider } from '../reducerTattoos/action';


const mapStateToProps = (state) => {
    return {
        HomeSlider: state.banner.slider,
    };
};

const mapDispatchToProps = {
    fetchSlider,
};

const TattooContainer = connect(mapStateToProps, mapDispatchToProps)(component);

export default TattooContainer;
