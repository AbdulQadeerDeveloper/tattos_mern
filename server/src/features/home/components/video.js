import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function HomeSlider(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchHome = async () => {
            await props.addNewRecord();
            setTodos(props.video_slider);
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
                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4" id='right'>VIDEO NEWS</div>
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
                            <div className="col-md-4">
                                <div className="card-body p-0">
                                    <iframe width="340"
                                        src={todo.video}>
                                    </iframe>
                                  
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
