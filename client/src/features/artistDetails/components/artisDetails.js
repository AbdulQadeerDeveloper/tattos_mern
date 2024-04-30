import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BACKEND_URL_APPLICATION from "../../../utils/index";
function ArtisDetails(props) {
    const [selectedTattoo, setSelectedTattoo] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        artistUpload();
    }, []);

    const artistUpload = async () => {
        await props.fetchUpload();  
    }

    useEffect(() => {
        if (!data.length) setData(props.artistUpload);
    }, [props.artistUpload]);

    const handleTattooClick = (tattoo) => {
        const width = window.innerWidth > 768 ? '400px' : '100%';
        const height = window.innerWidth > 768 ? '300px' : 'auto';

        setSelectedTattoo({
            ...tattoo,
            width: width,
            height: height
        });
    };

    return (
        <div className="container-fluid pt-5 mt-5 artist-list artist-detail">
            <div className="container animate-box" data-animate-effect="fadeIn">
                <div className="row artist-col">
                    <div className={`main-content ${selectedTattoo ? 'col-md-9' : 'col-md-12 custom-width-artist'}`}>
                        <div>
                            <h1 style={{ color: '#202125', fontSize: '30px', fontWeight: 'bolder' }}>Blogs Tattoos</h1>
                        </div>
                        <hr />
                        <div className="pt-3">
                            <div className="row">
                                {data?.map((tattoo, index) => (
                                    <div key={index} className='col-md-4 col-sm-12 pb-3' onClick={() => handleTattooClick(tattoo)}>
                                        <div className='card p-0'>
                                            <img src={`${BACKEND_URL_APPLICATION}${tattoo?.tattooImage}`} style={selectedTattoo && selectedTattoo.id === tattoo.id ? { width: '100%', height: 'auto', maxWidth:'400px', maxHeight:"300px" } : {}} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {selectedTattoo && (
                        <div className="col-md-3 artist-detail-left mt-5 pt-4">
                            <img className="artist-img" src={`${BACKEND_URL_APPLICATION}/${selectedTattoo?.tattooImage}`} style={{ width: selectedTattoo.width, height: selectedTattoo.height }} alt="" />
                            <h4>{selectedTattoo.tattoosTitle}</h4>
                            <p>{selectedTattoo.tattoosDis}</p>
                            <ul>
                                <li><Link className="active" to="/upload-tattoos">My Uploads</Link></li>
                                <li><Link to="/details">About</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArtisDetails;
