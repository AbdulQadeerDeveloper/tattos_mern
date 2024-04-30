import React, { useEffect, useState } from 'react';

function TattooDetail(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            await props.addNewRecord();
            setTodos(props.tataoos_Details_about); // Assuming this is the corrected prop name
        };
        fetchDetails();
    }, [todos, setTodos]);




    return (
        <>
            <div className='strong'>
                <strong style={{paddingLeft:"86px"}}>Explore Tattoos</strong>
                <div className='search'>
                    <input type='text' class="form-control" placeholder="Search Tattoos" />
                    <i class="fa pb-fa fa-search"></i>
                </div>
            </div>

            <section className="app-content">
                <div className="container">
                    <div className="row">
                        {todos.map((todo, index) => (
                            <>
                                <div className="col-md-6">
                                    <div>
                                        <h2>{todo.title}</h2>
                                        <p>{todo.discription}</p>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                        <img width="100%" height="70%" src={todo.Image_Url} alt={todo.title} />
                                    </div>

                            </>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default TattooDetail;
