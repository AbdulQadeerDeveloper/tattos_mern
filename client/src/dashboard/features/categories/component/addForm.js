import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '../reducer/action';

function AddForm() {
    const [name, setCategoryName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        dispatch(addCategories(name));
        alert("Successfully create!");
        setCategoryName('');
    };
    return (
        <div>
            <div className="modal fade" id="NT" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ width: "500px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">ADD CATEGORY</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="">Category Name</label>
                                <input type="text" className="form-control" placeholder="Category Name" value={name} onChange={(e) => setCategoryName(e.target.value)} />
                            </div>
                            <button className="btn pull-right" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddForm;
