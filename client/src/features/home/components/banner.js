import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BACKEND_URL_APPLICATION from "../../../utils/index";
function BannerHome(props) {
    const [HomeBanner, setBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HomePage = async () => {
            await props.fetchHomeBanner();
        }

        HomePage();
    }, []);

    useEffect(() => {
        if (Array.isArray(props.HomeBanner) && props.HomeBanner.length) {
            setBanner(props.HomeBanner);
            setIsLoading(false);
        }
    }, [props.HomeBanner]);


    function truncateText(text, limit) {
        const wordArray = text?.split(' ');
        if (!wordArray) return ''; // Return empty string if text is undefined or null
        if (wordArray.length <= limit) return text; // Return the original text if it's short enough

        const truncated = wordArray.slice(0, limit).join(' ');
        return `${truncated}...`; // Append ellipsis to indicate truncation
    }

    return (
        <div>
            <div className="container-fluid paddding mb-5">
                <div className="row mx-0">
                    {HomeBanner && HomeBanner.length > 0 && (
                        <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                            <div className="fh5co_suceefh5co_height" style={{background:"black"}}>
                                <img src={`${BACKEND_URL_APPLICATION}/${HomeBanner[0]?.tattooImage}`} style={{background:"black", opacity:"0.7"}} />
                                <div className='bannerTattoos'>
                                    <Link to="/tattoos" >{truncateText(HomeBanner[0].tattoosDis, 20)}</Link>
                                </div>

                            </div>
                        </div>
                    )}

                    {HomeBanner && HomeBanner.length > 1 && (
                        <div className="col-md-6">
                            <div className="row">
                                {HomeBanner.slice(1, 5).map((banner, index) => (
                                    <div key={banner.id} className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                        <div className="fh5co_suceefh5co_height_2"style={{background:"black"}}>
                                            <img src={`${BACKEND_URL_APPLICATION}/${banner?.tattooImage}`} style={{background:"black", opacity:"0.7"}} />
                                            <div className='bannerTattoos1'>
                                                <Link to="/tattoos">{truncateText(banner.tattoosTitle, 10)}...</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BannerHome
