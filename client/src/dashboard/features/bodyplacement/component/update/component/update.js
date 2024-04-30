import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPlacementDetails, updatePlacement, setPlacementName } from '../reducer/action';

function UpdatePlacement() {
    const Name = useSelector(state => state.placement.Name);
    const dispatch = useDispatch();
    const params = useParams();
    // console.log(params);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPlacementDetails(params.id));
    }, [dispatch, params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updatePlacement(params.id, Name));
        navigate("/tattoos-placement");
    }
    return (
        <React.Fragment>
            <form>
                <div className="mb-3">
                    <label htmlFor="placement" className="form-label">Update Placement Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="placement"
                        value={Name}
                        onChange={(e) => dispatch(setPlacementName(e.target.value))}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                    <button type='submit' className="btn pull-right" onClick={handleSubmit}>Update</button>
                    <span> <Link to="/tattoos-placement" className="btn pull-right">Cancel</Link></span>
                </div>

            </form>
        </React.Fragment>
    );
}

export default UpdatePlacement;
