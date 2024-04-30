import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BACKEND_URL_APPLICATION from "../../../utils/index";

function HomeSlideGallery(props) {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HomePage = async () => {
            await props.fetchGallery();
        }

        HomePage();
    }, []);

    useEffect(() => {
        if (Array.isArray(props.HomeGallery) && props.HomeGallery.length) {
            setGallery(props.HomeGallery);
            setIsLoading(false);
        }
    }, [props.HomeGallery]);


    return (
        <>

            <div className="container">
                <div class="fh5co_heading fh5co_heading_border_bottom py-2" id='right'>Featured Tattoos Destinations</div>

                <ul className="cards">

                    {gallery?.map((tattoo, index) => (
                        <React.Fragment key={index}>
                            <li className="card p-0">
                                <div className="image-overlay">
                                    <img className="img-fluid" src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} />
                                </div>
                                <Link to={`/tattoo/${tattoo._id}`} className="fh5co_good_font_6">
                                    {tattoo?.tattoosTitle.split(' ').slice(0, 5).join(' ')}...
                                </Link>

                            </li>

                        </React.Fragment>
                    ))}

                </ul>

            </div>
        </>
    );
}

export default HomeSlideGallery;
