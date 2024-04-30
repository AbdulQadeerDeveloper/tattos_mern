import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import SliderMain from '../../shared/component/sliderMain';
import BACKEND_URL_APPLICATION from "../../../utils/index";
import { API_END_POINTS } from '../../../services';




const ArtistTattoos = (props) => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Step 1
    const [activePage, setActivePage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const pageSize = 18;
    useEffect(() => {
        props.fetchArtist();
    }, []);

    useEffect(() => {
        setData(props.artistData);
    }, [props.artistData]);

    const handleSearchChange = (e) => { // Step 2
        setSearchQuery(e.target.value);
    };

    // Optional: Implement debouncing here if required

    const filteredData = data.filter(tattoo => { // Step 3
        return tattoo.tattoosTitle.toLowerCase().includes(searchQuery.toLowerCase());
    });


    // Pagination items
    useEffect(() => {
        setIsLoading(true);
        axios.get(API_END_POINTS.GET_TATTOOS_PAGINATION, {
            params: {
                page: activePage,
                size: pageSize // Use the pageSize for the request
            }
        }).then(({ data }) => {
            setData(data.records);
            setTotalRecords(data.total);
            setIsLoading(false);
        }).catch(error => {
            console.error("Error fetching paginated tattoos:", error);
            setIsLoading(false);
        });
    }, [activePage, pageSize]);

    const totalPages = Math.ceil(totalRecords / pageSize);
    const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setActivePage(newPage);
        }
    };


    return (
        <div>
            <div className="container artisit-list pt-5 mb-5 p-0">
                <div className="container animate-box mt-5" data-animate-effect="fadeIn">

                    <div className="row pb-5 mt-5 p-0">
                        <div className="col-md-12">
                            <input
                                type='text'
                                className="form-control"
                                placeholder="Search Tattoos"
                                onChange={handleSearchChange}
                            // Step 2: Bind the input change handler
                            />
                            <i className="fa pb-fa fa-search"></i>
                        </div>
                    </div>
                    <div className='heading'>

                        <h1 style={{
                            color: '#202125',
                            fontWeight: 'bolder'
                        }}>Tattoos Listing</h1>

                    </div>
                    <div className="row aritist-col">

                        <div className="col-md-3" style={{ marginTop: "76px" }}>
                            <div className="row" id='mobile-artist'>
                                {filteredData?.slice(1, 16).map((tattoo, index) => (
                                    <div key={index} className="col-12">
                                        <div className="row g-0 align-items-center">
                                            {/* Image on the left */}
                                            <div className="col-4">
                                                <Link to={`/tattoo/${tattoo._id}`}>
                                                    <img className="img-fluid" src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} />
                                                </Link>
                                            </div>
                                            {/* Text on the right */}
                                            <div className="col-8">
                                                <h4 className="artist-name p-0 m-0">{tattoo?.tattoosTitle}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="container">
                                <SliderMain />

                                <div className="container">
                                    <div className="row" style={{ position: "relative", left: "16px" }}>
                                        {filteredData.slice(0, pageSize).map((tattoo, index) => (
                                            <React.Fragment key={index}>
                                                <div className='col-lg-4 col-md-4 col-sm-12 mb-4'>

                                                    <Link to={`/tattoo/${tattoo._id}`}>
                                                        <div className="image-overlay">
                                                            <img className="img-fluid" src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} style={{ width: "17rem", height: "15rem", opacity: '0.9', borderRadius: "5px" }} />
                                                        </div>
                                                       
                                                    </Link>

                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav style={{
                alignItems: "center",
                margin: "auto",
                display: "flex",
                justifyContent: "center"
            }}>
                <div className="pagination-container">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => changePage(activePage - 1)}>Previous</span>
                        </li>
                        {[...Array(totalPages).keys()].map(pageNumber => (
                            <li key={pageNumber + 1} className={`page-item ${activePage === pageNumber + 1 ? 'active' : ''}`}>
                                <span className="page-link" onClick={() => changePage(pageNumber + 1)}>{pageNumber + 1}</span>
                            </li>
                        ))}
                        <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => changePage(activePage + 1)}>Next</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default ArtistTattoos;
