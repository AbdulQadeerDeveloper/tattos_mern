import { connect } from 'react-redux';
import TattooSlider from '../components/homeSlider';
import { fetchSlider } from '../reducerTattoos/action';


const mapStateToProps = (state) => {
    return {
        HomeSlider: state.banner.slider,
    };
};

const mapDispatchToProps = {
    fetchSlider,
};

const TattooSliderContainer = connect(mapStateToProps, mapDispatchToProps)(TattooSlider);

export default TattooSliderContainer;
