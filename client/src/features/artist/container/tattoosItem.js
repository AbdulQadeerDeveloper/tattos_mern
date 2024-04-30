import { connect } from 'react-redux';
import TattooArtist from '../components/artistTattoos';
import { fetchArtist } from '../reducer/action';


const mapStateToProps = (state) => {
    return {
        artistData: state.fetchArtist.artist,
    };
};

const mapDispatchToProps = {
    fetchArtist,
};

const TattooArtistContainer = connect(mapStateToProps, mapDispatchToProps)(TattooArtist);

export default TattooArtistContainer;
