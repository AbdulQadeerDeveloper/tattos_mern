import { connect } from 'react-redux';
import tattoosBanner from '../components/banner';
import { fetchHomeBanner } from '../reducerTattoos/action';


const mapStateToProps = (state) => {
    return {
        HomeBanner: state.banner.Homebanner,
    };
};

const mapDispatchToProps = {
    fetchHomeBanner,
};

const TattooBannerContainer = connect(mapStateToProps, mapDispatchToProps)(tattoosBanner);

export default TattooBannerContainer;
