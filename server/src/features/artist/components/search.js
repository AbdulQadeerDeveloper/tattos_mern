import React from 'react'

function Search() {
  return (
    <div>
      <section class="search-page">
        <div class="container-fluid pt-3">
          <div class="container animate-box" data-animate-effect="fadeIn">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <input type='text' class="form-control" placeholder="Search Tattoos" />
                <i class="fa pb-fa fa-search"></i>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Search