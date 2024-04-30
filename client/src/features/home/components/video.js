import React from 'react';


function HomeVideoSlider() {
    const videoIds = ["4sKuMO_xNdg", "TP8N1a-edBE", "tqsfW0c03xg", "tIzYFxRrTQU", "QLMqfKPOL6w","4sKuMO_xNdg", "TP8N1a-edBE", "tqsfW0c03xg", "tIzYFxRrTQU", "QLMqfKPOL6w"];
    

    // Helper function to chunk the array into smaller arrays of size up to 4
    const chunkSize = 4;
    const chunks = [];
    for (let i = 0; i < videoIds.length; i += chunkSize) {
        chunks.push(videoIds.slice(i, i + chunkSize));
    }

    return (
        <React.Fragment>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="fh5co_heading" id='right'>Video Tattoos News</div>
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
                                                {chunk.map(videoId => (
                                                    <div key={videoId} className="col-md-3 mb-3">
                                                        <div className="card p-0">
                                                            <iframe width="100%" height="200"
                                                                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`}
                                                                title="YouTube video player"
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                referrerPolicy="strict-origin-when-cross-origin"
                                                                allowFullScreen></iframe>
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

export default HomeVideoSlider;
