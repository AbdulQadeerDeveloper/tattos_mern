import React, { useEffect, useState } from 'react'

function Uertattoo(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      await props.addNewRecord();
      setTodos(props.tataoos_Details_about);
    };
    fetchHome();
  }, [todos, setTodos]);


  return (
    <div>
      <section className="search-page">
        <div className="container-fluid pt-3">

          <div className="container">
            <div>
              <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">User Tattoo List </div>
            </div>
            <div className="row  animate-box" data-animate-effect="fadeIn">

              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>
              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>
              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>
              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>
              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>
              <div className="col-md-2">
                {todos.map((list, index) => (
                  <article className="mas-holder">

                    <section className="mas-holder-col">
                      <img src={list.Image_Url} />
                    </section>
                    <br />
                  </article>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Uertattoo