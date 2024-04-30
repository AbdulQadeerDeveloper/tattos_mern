import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlacement } from '../reducer/action';

function AddPlacementForm() {
    const [name, setPlacementName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        
        await dispatch(addPlacement(name));
        alert("Successfully create");
        setPlacementName(''); 
    };


    return (
        <div>
            <div className="modal fade" id="NT" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: "500px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">ADD PLACEMENT</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="">placement Name</label>
                                <input type="text" className="form-control" placeholder="Category Name" value={name} onChange={(e) => setPlacementName(e.target.value)} />
                            </div>
                            <button className="btn pull-right" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPlacementForm;
