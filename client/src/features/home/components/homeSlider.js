import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BACKEND_URL_APPLICATION from "../../../utils/index";
function HomeSlider() {
    const tattoosData = useSelector(state => state.tattooReducer1.tattoos);
    // console.log(tattoosData, "tattoosData");

    // Helper function to chunk the tattoos data into groups of 4
    const chunkSize = 4;
    const chunks = [];
    for (let i = 0; i < tattoosData.length; i += chunkSize) {
        chunks.push(tattoosData.slice(i, i + chunkSize));
    }

    return (
        <React.Fragment>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="fh5co_heading" id='right'>Browse Tattoos Styles</div>
                        </div>
                      
                        <div className="col-md-6 text-right" id='mobile-slider'>
                            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {chunks.map((chunk, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="row">
                                                {chunk.map(tattoo => (
                                                    <div key={tattoo.id} className="col-md-3 mb-3">
                                                        <div className="card p-0">
                                                            <img className="img-fluid card-img-top" src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} />
                                                            <Link to={`/tattoo/${tattoo._id}`} className="fh5co_good_font_6">
                                                                {tattoo?.tattoosTitle.split(' ').slice(0, 5).join(' ')}...
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HomeSlider;
