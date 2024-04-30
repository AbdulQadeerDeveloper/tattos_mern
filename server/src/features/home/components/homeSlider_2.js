import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function HomeSlider_2(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchHome = async () => {
            await props.addNewRecord();
            setTodos(props.Home_Slider_2);
        };
        fetchHome();
    }, [todos, setTodos]);
   
    



    return (
        <>
            <div>
                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4" id='right'>FEATURED TATTOO DESTINATIONS</div>
            </div>
            <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden" style={{color:'red'}}>Next</span>
                </button>
                <div className="carousel-inner w-100">
                    {todos.map((todo, index) => (
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
        </>
    );
}

export default HomeSlider_2;
