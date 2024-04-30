// TattooDetail.js
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {API_END_POINTS} from "../../../services/index"
import BACKEND_URL_APPLICATION from "../../../utils/index";
function TattooDetail(props) {
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const pageSize = 5;
    useEffect(() => {
        tattoosPage();
    }, []);

    const tattoosPage = async () => {
        await props.fetchTattoo();
    }
    useEffect(() => {
        if (!data.length) setData(props.tattooData);
    }, [props.tattooData])

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
        <>
            <section className="app-content">
                <div className="container">
                    <div className="row">
                        {data.slice(0, pageSize).map((tattoo, index) => (
                            <React.Fragment key={index}>
                                <div className="col-md-7">
                                    <div className='tattoos-heading'>
                                        <h2 style={{fontSize:"20px", textAlign:"justify", fontWeight:"700", wordSpacing:"1px"}}>{tattoo.tattoosTitle}</h2>
                                        <p style={{fontSize:"17px", textAlign:"justify",color: "#495057"}}>{tattoo.tattoosDis}</p>
                                    </div>
                                </div>
                                <div className="col-md-5" id='about-tattoos'>
                                    <img src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo.title}  />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
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
        </>
    );
}

export default TattooDetail;
