import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { addTattoo } from '../reducer/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {API_END_POINTS} from "../../../services/index"

function UploadTattoo() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [placements, setPlacements] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [formData, setFormData] = useState({
        tattoosTitle: '',
        tagTattoos: '',
        tattoosDis: '',
        tattoosCategoryId: '',
        tattoosPlacementId: '',

    });

    useEffect(() => {
        const fetchOptions = async () => {
            const categoriesData = await axios.get(API_END_POINTS.GET_TATTOOS_CATEGORY);
            const placementsData = await axios.get(API_END_POINTS.GET_TATTOOS_PLACEMENT);
            setCategories(categoriesData.data);
            setPlacements(placementsData.data);
        };

        fetchOptions();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addTattoo(formData, selectedFile));

        alert("Successfully Tattoos Created !")
        // Display a success message
        toast.success('Tattoo uploaded successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <div>
            <ToastContainer/>
            <section className="search-page">

                <div className="container" onSubmit={handleSubmit} >
                    <h1>Upload Tattoo</h1>
                    <hr />
                    <div className="row">
                        {/* <!-- left column --> */}
                        <div className="col-md-3">
                            <div className="text-center">
                                <input type="file" className="form-control" id="tattooImage" name="tattooImage" onChange={handleFileChange} />

                                {imagePreviewUrl && (
                                    <img src={imagePreviewUrl} alt="Preview" style={{ width: '80px', height: '80px', marginTop: '10px' }} />
                                )}
                            </div>
                        </div>

                        {/* <!-- edit form column --> */}
                        <div className="col-md-9 personal-info">
                            <div className="alert alert-info alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a>
                                <i className="fa fa-coffee"></i>
                                This is an <strong>.alert</strong>. Use this to show important messages to the user.
                            </div>
                            <h3>Tattoo info</h3>

                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Tattoo Title:</label>
                                    <div className="col-lg-8">
                                        <input
                                            name="tattoosTitle"
                                            value={formData.tattoosTitle}
                                            onChange={handleInputChange}
                                            placeholder="Title"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Tattoo Discription:</label>
                                    <div className="col-lg-8">
                                        <textarea
                                            name="tattoosDis"
                                            value={formData.tattoosDis}
                                            onChange={handleInputChange}
                                            placeholder="Description"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Tattoo Tag:</label>
                                    <div className="col-lg-8">
                                        <textarea
                                            name="tagTattoos"
                                            value={formData.tagTattoos}
                                            onChange={handleInputChange}
                                            placeholder="Tag Tattoo"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Tattoo Placement:</label>
                                    <div className="col-lg-8">
                                        <select
                                            name="tattoosPlacementId"
                                            value={formData.tattoosPlacementId}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        >
                                            <option value="defaultValue">Select Placement</option>
                                            {placements.map((placement) => (
                                                <option key={placement._id} value={placement._id}>
                                                    {placement.Name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Tattoo Category:</label>
                                    <div className="col-lg-8">
                                        <select
                                            name="tattoosCategoryId"
                                            value={formData.tattoosCategoryId}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        >
                                            <option value="defaultValue">Select Category</option>
                                            {categories.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.Name}
                                                </option>

                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <Col lg={2}>
                                        <Button>
                                            ADD TATTOO
                                        </Button>
                                    </Col>
                                </div>

                            </form>

                        </div>
                    </div>
                </div >
                <hr />
            </section >
        </div >
    )
}

export default UploadTattoo