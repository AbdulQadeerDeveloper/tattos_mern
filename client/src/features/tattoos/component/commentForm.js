import React, { useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import{API_END_POINTS} from "../../../services/index"


function StarRating({ rating, setRating }) {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <IoMdStar
              size={24}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              style={{ cursor: 'pointer', transition: 'color 200ms' }}
            />
          </label>
        );
      })}
    </div>
  );
}

// Define CommentForm component

function CommentForm({ tattooId }) {
  // console.log("Tattoo ID in CommentForm:", tattooId); // Add this line
  const backendUrl = API_END_POINTS.ADD_COMMENT_USER;
  const [formData, setFormData] = useState({
    author: '',
    text: '',
    rating: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Include the tattooId in the request URL
      const response = await axios.post(`${backendUrl}/${tattooId}`, formData);
      alert('Comment added successfully');
      // Reset form or handle success
    } catch (error) {
      console.error('Error adding comment:', error);
      // Handle error
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <form onSubmit={handleSubmit} style={{ background: "white", maxWidth: "700px", width: "100%", margin: "40px auto", padding: "40px" }}>
            <div style={{ fontSize: '21px', paddingBottom: '20px', display: "flex", justifyContent: "center" }}>
              <span>Rating: </span>
              <StarRating rating={formData.rating} setRating={(rating) => setFormData({ ...formData, rating })} />
            </div>
            <div className="form-group">
              <input type='text' name="author" className='form-control' value={formData.author} onChange={handleChange} placeholder="Username" />
            </div>
            <br />
            <div className="form-group">
              <input type="text" name="text" className='form-control' value={formData.text} onChange={handleChange} placeholder="Write comments" />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type='submit' className="btn pull-center">ADD</Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default CommentForm;
