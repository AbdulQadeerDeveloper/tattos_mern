import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategoryDetails, updateCategory, setCategoryName } from '../update/reducer/action';
import { useNavigate } from "react-router-dom"
function Update() {
    const Name = useSelector(state => state.category.Name);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategoryDetails(params.id));
    }, [dispatch, params.id]);

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        dispatch(updateCategory(params.id, Name));
        navigate("/tattoos-category");
    }
    return (
        <React.Fragment>
            <form>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Update Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={Name}
                        onChange={(e) => dispatch(setCategoryName(e.target.value))}
                    />
                </div>

                <div style={{display:"flex", justifyContent:"end", gap:"10px"}}>
                    <button type='submit' className="btn pull-right" onClick={handleUpdateCategory}>Update</button>
                    <span><Link to="/tattoos-category" className="btn pull-right">Cancel</Link></span>
                </div>

            </form>
        </React.Fragment>
    );
}

export default Update;
