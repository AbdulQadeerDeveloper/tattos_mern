import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlacementFilter from './placementFilter';
import CategoriesFilter from './filtercate';
import TattooCard from './tattooCard';
import Pagination from './pgination';

import { BiSortAlt2 } from "react-icons/bi";
import { FaSortAlphaDown } from "react-icons/fa";
import { searchTattoos, sortTattoos } from './tattooService';
import { fetchTattoos } from '../../../dashboard/features/tatt00Table/reducers/action';

function Categories() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlacement, setSelectedPlacement] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const pageSize = 15;
  const dispatch = useDispatch();

  // Original categories from Redux state
  const categories = useSelector((state) => state.tattooReducer1.tattoos);

  useEffect(() => {
    dispatch(fetchTattoos());
  }, [dispatch]);

  useEffect(() => {
    // Perform filtering based on selected category and placement
    const filtered = categories.filter((tattoo) => {
      const placementMatches = selectedPlacement ? tattoo.placement?.name === selectedPlacement : true;
      const categoryMatches = selectedCategory ? tattoo.categories?.name === selectedCategory : true;
      return placementMatches && categoryMatches;
    });
    setFilteredData(filtered);
  }, [categories, selectedPlacement, selectedCategory]);

  const toggleFilters = () => setShowFilters(!showFilters);

  // searching by filter category
  const searchHandle = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredData(categories.filter((tattoo) => {
        const placementMatches = selectedPlacement ? tattoo.placement?.name === selectedPlacement : true;
        const categoryMatches = selectedCategory ? tattoo.categories?.name === selectedCategory : true;
        return placementMatches && categoryMatches;
      }));
      return;
    }

    try {
      const searchFiltered = await searchTattoos(term, selectedPlacement, selectedCategory);
      setFilteredData(searchFiltered);
    } catch (error) {
      console.error("Error searching tattoos:", error);

    }
  };

  // sort by filter category

  const handleSort = async (event) => {
    const sortBy = event.target.value;

    try {
      const sortedData = await sortTattoos(sortBy);
      setFilteredData(sortedData);
    } catch (error) {
      console.error("Error fetching sorted tattoos:", error);

    }
  };

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentTattoos = filteredData.slice((activePage - 1) * pageSize, activePage * pageSize);

  return (
    <>
      <section className="search-page">
        <div className="container">
          <div>
            <strong>
              <h1 style={{
                color: '#202125',
                fontWeight: 'bolder',

              }}>Tattoos Categories </h1>
            </strong>
          </div>
          <div class="row mt-4">
            <div class="col-md-12" id='searching'>
              <input type='text' class="form-control" onChange={searchHandle}
                value={searchTerm} placeholder="Search Tattoos" />
              <i className="fa pb-fa fa-search" id='search.search'></i>
            </div>
          </div>


          <div className="row mt-5" id='searchingitem'>
            <div className="col-md-9 flex" style={{ alignItems: 'center' }}>
              <span className="form-control" onClick={toggleFilters} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Filter Tattoos
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 15" style={{ transform: 'rotate(180deg)', width: '20px', marginLeft: 'auto' }}>
                  <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.002 3.625c0-1.243-1.007-2.25-2.25-2.25-1.242 0-2.25 1.007-2.25 2.25 0 1.242 1.006 2.25 2.249 2.25s2.25-1.007 2.251-2.25zm-6 7.5c0 1.243-1.007 2.25-2.25 2.25-1.242 0-2.25-1.007-2.25-2.25 0-1.241 1.006-2.25 2.249-2.25.597 0 1.17.237 1.592.659.422.422.659.994.659 1.591h0zm0 0h6m-4.5-7.5h-9m0 7.5h3"></path>
                </svg>

              </span>
            </div>


            <div className="col-md-3 flex justify-content-between" id='filter-cate5'>
              <select className="form-select" aria-label="Default select example" onChange={handleSort}>
                <option selected>Sort by Tattoos <BiSortAlt2 /></option>
                <option value="name-asc">A-Z <FaSortAlphaDown /></option>
                <option value="name-desc">Z-A</option>
                <option value="date-asc">Newest</option>
                <option value="date-desc">Oldest</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div>
              <PlacementFilter uniquePlacements={[...new Set(categories.map(item => item.placement?.name))]} selectedPlacement={selectedPlacement} onSelectPlacement={setSelectedPlacement} />
              <CategoriesFilter uniqueCategories={[...new Set(categories.map(item => item.categories?.name))]} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            </div>
          )}

          <div className="container mt-5">
            <div className="row" style={{
              position: "relative",
              right: "10px"
            }}>
              {currentTattoos.map((tattoo, index) => (
                <TattooCard key={index} tattoo={tattoo} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Pagination totalPages={totalPages} activePage={activePage} onChangePage={setActivePage} />
    </>
  );
}

export default Categories;
