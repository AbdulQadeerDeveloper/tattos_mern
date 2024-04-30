import { connect } from 'react-redux';
import tattoosGallery from '../components/homeGallery';
import { fetchGallery } from '../reducerTattoos/action';


const mapStateToProps = (state) => {
    return {
        HomeGallery: state.banner.gallery,
    };
};

const mapDispatchToProps = {
    fetchGallery,
};

const TattooGalleryContainer = connect(mapStateToProps, mapDispatchToProps)(tattoosGallery);

export default TattooGalleryContainer;
