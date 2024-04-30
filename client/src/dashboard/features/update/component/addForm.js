import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateTattoo } from '../reducer/action';
import { API_END_POINTS } from "../../../../services/index";
import { Link, useParams } from 'react-router-dom';
import defaultImage from '../../../asserts/899048ab0cc455154006fdb9676964b3.jpg';
import { FaPen } from "react-icons/fa6";

function UpdateTattooForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultImage);
  const [formData, setFormData] = useState({
    tattoosTitle: '',
    tagTattoos: '',
    tattoosDis: '',
    categories: '',
    placement: '',
  });

  useEffect(() => {
    const fetchOptionsAndTattooData = async () => {
      try {
        const categoriesData = await axios.get(API_END_POINTS.GET_TATTOOS_CATEGORY);
        const placementsData = await axios.get(API_END_POINTS.GET_TATTOOS_PLACEMENT);
        const tattooDetails = await axios.get(`${API_END_POINTS.GET_TATTOOS_ID}/${id}`);

        setCategories(categoriesData.data);
        setPlacements(placementsData.data);
        setFormData({
          tattoosTitle: tattooDetails.data.tattoosTitle,
          tagTattoos: tattooDetails.data.tagTattoos,
          tattoosDis: tattooDetails.data.tattoosDis,
          categories: tattooDetails.data.categories,
          placement: tattooDetails.data.placement,
          tattooImage: tattooDetails.data.tattooImage
        });
        setImagePreviewUrl(tattooDetails.data.imageUrl || defaultImage);
      } catch (error) {
        toast.error('Failed to fetch tattoo details or options!');
      }
    };

    fetchOptionsAndTattooData();
    // console.log(fetchOptionsAndTattooData)
  }, [id]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result); // Update the preview
        setSelectedFile(file); // Set the file to be uploaded
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateFormData = new FormData();
    for (const key in formData) {
      updateFormData.append(key, formData[key]);
    }
    if (selectedFile) {
      updateFormData.append('tattooImage', selectedFile);
    }

    try {
      await axios.put(`http://localhost:8080/api/update/tattoos/${id}`, updateFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Tattoo updated successfully!');
    } catch (error) {
      toast.error('Failed to update tattoo!');
    }
  };
  return (
    <React.Fragment>

      <div className="modal-content" style={{ position: 'absolute', right: "40px", paddingBottom: "50px" }} id='formResponsive'>
        <div className="modal-body" id='fragemt_form'>
          <div className="bg-img433">
            <strong><h1>UPDATE TATTOO</h1></strong>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-lg-2'>
                  <div className='text-center mb-3'>
                    <label style={{ color: "#343a4c", textAlign: "left", alignContent: "left", display: "flex", justifyContent: "left" }}>Update Tattoo:<span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <img
                      src={imagePreviewUrl}
                      alt="Tattoo"
                      style={{ width: '150px', height: '150px', border: "1px solid #ddd", cursor: 'pointer' }}
                      onClick={() => document.getElementById('tattooImageInput').click()}
                    />
                    <input
                      type='file'
                      id='tattooImageInput'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                </div>

                <div className='col-lg-9' style={{ marginLeft: "70px" }}>

                  <div className='row'>
                    <div className='col-md-12'>

                      <div className="form-group mt-3">
                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Tattoos Title: <span style={{ color: 'red' }}>*</span></label><br />
                        <input
                          type="text"
                          name="tattoosTitle"
                          value={formData.tattoosTitle}
                          onChange={handleInputChange}
                          placeholder="Title"
                          className="form-control"
                          required
                        />
                      </div>

                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12'>

                      <div className="form-group mt-3">
                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Tattoos Discription: <span style={{ color: 'red' }}>*</span></label><br />
                        <textarea name="tattoosDis"
                          value={formData.tattoosDis}
                          onChange={handleInputChange}
                          placeholder="Description"
                          className="form-control"
                          required rows="10" cols="67"></textarea>
                      </div>

                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>

                      <div className="form-group mt-3">
                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Tattoos Tags: <span style={{ color: 'red' }}>*</span></label><br />
                        <textarea name="tagTattoos"
                          value={formData.tagTattoos}
                          onChange={handleInputChange}
                          placeholder="Tag Tattoo"
                          className="form-control"
                          required rows="7" cols="67"></textarea>

                      </div>

                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className="form-group mt-3">
                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Tattoos Placements: <span style={{ color: 'red' }}>*</span></label>
                        <select
                          name="placement"
                          value={formData.placement}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select Placement</option>
                          {placements.map((placement) => (
                            <option key={placement._id} value={placement._id}>
                              {placement.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6'>

                      <div className="form-group mt-3">
                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Tattoos Categories: <span style={{ color: 'red' }}>*</span></label>
                        <select
                          name="categories"
                          value={formData.categories}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select Category</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>


                    </div>
                  </div>

                </div>



              </div>

              <div style={{ display: "flex",width: "10%",  gap: "20px", justifyContent: 'end',marginLeft: "auto" }}>
                <button type='submit' className="btn pull-right">Save</button>
                <Link to="/tattoo" className="btn pull-right">Cancel</Link>
              </div>


            </form>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default UpdateTattooForm;
