// Pagination.js
import React from 'react';

const Pagination = ({ totalPages, activePage, onChangePage }) => (
    <nav style={{
        alignItems: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center"
    }}>
        <div className="pagination-container">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                    <span className="page-link" onClick={() => onChangePage(activePage - 1)}>Previous</span>
                </li>
                {[...Array(totalPages).keys()].map(pageNumber => (
                    <li key={pageNumber + 1} className={`page-item ${activePage === pageNumber + 1 ? 'active' : ''}`}>
                        <span className="page-link" onClick={() => onChangePage(pageNumber + 1)}>{pageNumber + 1}</span>
                    </li>
                ))}
                <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
                    <span className="page-link" onClick={() => onChangePage(activePage + 1)}>Next</span>
                </li>
            </ul>
        </div>
    </nav>
);

export default Pagination;
