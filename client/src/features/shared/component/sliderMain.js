import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BACKEND_URL_APPLICATION from "../../../utils/index";

function SliderMain() {
    const tattoosData = useSelector(state => state.tattooReducer1.tattoos);


    // Helper function to chunk the tattoos data into groups of 4
    const chunkSize = 3;
    const chunks = [];
    for (let i = 5; i < tattoosData.length; i += chunkSize) {
        chunks.push(tattoosData.slice(i, i + chunkSize));
    }

    return (
        <React.Fragment>
            <section className="pb-5">
                <div className="container">
                    <div className="row">


                        <div className="col-md-6 text-right p-0" style={{
                        marginLeft: "auto",
                        position: "relative",
                        bottom: "44px",
                        left:"13px"
                    }} id='style-item'>
                            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-md-12 mt-4" style={{position:"relative", left:"16px"}} id='mobile-slider-mobile'>
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {chunks.map((chunk, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="row">
                                                {chunk.map(tattoo => (
                                                    <div key={tattoo.id} className="col-md-4 mb-3">
                                                        <div className="card p-0">


                                                            <img src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} height="300px" />

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

export default SliderMain;
