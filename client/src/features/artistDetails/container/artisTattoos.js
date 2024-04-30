import { connect } from 'react-redux';
import TattooArtistUpload from '../components/artisDetails';
import { fetchUpload } from '../reducer/action';


const mapStateToProps = (state) => {
    return {
        artistUpload: state.tattooUpload.artistUpload,
    };
};

const mapDispatchToProps = {
    fetchUpload,
};

const ArtistUploadContainer = connect(mapStateToProps, mapDispatchToProps)(TattooArtistUpload);

export default ArtistUploadContainer;
