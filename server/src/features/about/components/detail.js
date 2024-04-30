import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../artist/components/search';

function Detail(props) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const details = async () => {
      await props.addNewRecord();
      setTodos(props.tataoos_Details_about);
    };
    details();
  }, [todos, setTodos]);

  // console.log(todos)

  return (
    <>
     <Search/> 
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {todos.map((todo, index) => (
            <div key={index} className="col d-flex align-items-stretch">
              <div className="card custom-card">
                <Link to='/tattoos/tattooDetails'>
                  <img src={todo.Image_Url} className="card-img-top custom-img" alt="..." />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Detail;
