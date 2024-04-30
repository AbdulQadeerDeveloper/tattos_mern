import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import Search from './search';
import { Link } from 'react-router-dom';

function Artist(props) {
    const [todos, setTodos] = useState([]);
    const [todos1, setTodos1] = useState([]);
    const [todos2, setTodos2] = useState([]);
    useEffect(() => {
        const fetchHome = async () => {
            await props.addNewRecord();
            setTodos(props.follower_artist);
            setTodos1(props.slider_1);
            setTodos2(props.slider_2)
        };
        fetchHome();
    }, [todos, setTodos], [todos1, setTodos1], [todos2, setTodos2]);
    


    $('.carousel .carousel-item').each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) { next = next.next(); if (!next.length) { next = $(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); }
    });

    return (
        <div>
            <Search />
            <div className="container-fluid pt-3 artisit-list" >
                <div className="container-fluid animate-box" data-animate-effect="fadeIn">
                    <div>
                        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">TATTOODO AMBASSADORS</div>
                    </div>
                    <div className="row aritist-col">

                        <div className="col-md-3">
                            <div className="row">

                                {todos.map((tods, index) => (
                                    <>  <div className="col-md-4">
                                        <a href="artist-detail.html">
                                            <img className="artisit-img" src={tods.small_Url} />
                                        </a>
                                    </div>
                                        <div className="col-md-8">
                                            <h4 className="artisit-name">{tods.name}</h4>
                                            <p className="artisit-follower">{tods.count} {tods.Follower}</p>
                                            <p className="artisit-follower">{tods.current_Data}</p>
                                            <p className="about-artisit">{tods.short_Dis}</p>
                                        </div>
                                    </>
                                ))}

                            </div>

                        </div>

                        <div className="col-md-9" >
                            {/* //myCarousel_1 */}
                            <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel" style={{ position: 'relative', bottom: '44px' }}>
                                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                <div className="carousel-inner w-100">
                                    {todos1.map((todo, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="col-md-3">
                                                <div className="card card-body p-0">
                                                    <img className="img-fluid" src={todo.image_Url} alt={todo.title} />
                                                    <div class="fh5co_latest_trading_img_position_absolute_1">

                                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> {todo.short_Dis} </a></div>
                                                        <div class="fh5co_latest_trading_date_and_name_color"> {todo.info} - {todo.current_Data}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* //myCarousel_2 */}
                            <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
                                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden" style={{ color: 'red' }}>Next</span>
                                </button>
                                <div className="carousel-inner w-100">
                                    {todos2.map((todo, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="col-md-4">
                                                <div className="card card-body" id='card'>
                                                    <img className="img-fluid" src={todo.image_Url} alt={todo.title} />
                                                </div>
                                                <div class="fh5co_latest_trading_img_position_absolute_1" id='card-bottom'>

                                                    <div class="card-color">
                                                        <Link to="/" class="fh5co_good_font_3"> {todo.short_Dis} </Link>
                                                    </div>
                                                    <div class="fh5co_latest_trading_date_and_name_color"> {todo.info} - {todo.current_Data}</div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Artist