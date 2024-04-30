import React, { useEffect, useState } from 'react';

function Categories(props) {
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      await props.addNewRecord();
      setTodos(props.Categories_list);
      setList(props.Categories_list_categorie);
    };
    fetchHome();
  }, [todos, setTodos], [list, setList]); // Corrected the dependency array

  return (
    <>
      <style>
        {`
          .mas-holder-col img {
            width: 100%;
            max-width:400px;
            height: 200px; 
            object-fit: cover; 
          }
        `}
      </style>
      <section className="search-page">
        <div className="container-fluid pt-3">
          <div className="container animate-box" data-animate-effect="fadeIn">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <input type='text' className="form-control" placeholder="Search Tattoos" />
                <i className="fa pb-fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row  animate-box" data-animate-effect="fadeIn">
              <div className="col-md-3 cat-holder">
                <ul>
                  <li>
                    <a data-toggle="collapse" href="#sublist">
                      <h3>Categories
                        <i className="float-right fa fa-angle-down"></i>
                      </h3>
                    </a>
                    {todos.map((todo, index) => (
                      <ul className="collapse sub-cat" id="sublist" key={index.id}>
                        <li>
                          <a data-toggle="collapse" href="#sublist_2">
                            <h3>Sub Category</h3>
                          </a>
                          {todos.map((todo, index) => (
                            <li key={index}><a href="">{todo.name}</a></li>
                          ))}
                        </li>
                      </ul>
                    ))}
                  </li>
                  {todos.map((todo, index) => (
                    <li key={index}><a href="">{todo.name}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-md-3">

                {list.slice(0, 6).map((list_Item, index) => (
                  <article className="mas-holder" style={{ marginTop: '0' }} key={index}>
                    <section className="mas-holder-col">
                      <img src={list_Item.image_Url} alt={`Image ${index}`} />
                    </section>
                  </article>
                ))}
              </div>

              <div className="col-md-3">

                {list.slice(6, 12).map((list_Item, index) => (
                  <article className="mas-holder" style={{ marginTop: '0' }} key={index}>
                    <section className="mas-holder-col">
                      <img src={list_Item.image_Url} alt={`Image ${index}`} />
                    </section>
                  </article>
                ))}
              </div>

              <div className="col-md-3">

                {list.slice(13, 19).map((list_Item, index) => (
                  <article className="mas-holder" style={{ marginTop: '0' }} key={index}>
                    <section className="mas-holder-col">
                      <img src={list_Item.image_Url} alt={`Image ${index}`} />
                    </section>
                  </article>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
