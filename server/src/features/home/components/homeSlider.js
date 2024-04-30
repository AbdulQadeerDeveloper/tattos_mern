import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function HomeSlider(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchHome = async () => {
            await props.addNewRecord();
            setTodos(props.Home_Slider);
        };
        fetchHome();
    }, [todos, setTodos]);

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
        <>
            <div>
                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4" id='right'>BROWSE TATTOO STYLES</div>
            </div>
            <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-inner w-100">
                    {todos.map((todo, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="col-md-3">
                                <div className="card card-body p-0" id='cardItem'>
                                    <img className="img-fluid" src={todo.image_Url} alt={todo.title} />
                                    <div class="fh5co_latest_trading_img_position_absolute_1">

                                        <div class=""><a href="single.html" class="fh5co_good_font_2"> After all is said and done, <br/>more is said than done </a></div>
                                        <div class="fh5co_latest_trading_date_and_name_color"> {todo.info} - {todo.current_Data}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomeSlider;
