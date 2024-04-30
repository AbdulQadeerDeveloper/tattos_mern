import React, { useEffect, useState, useMemo } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { API_END_POINTS } from "../../../services/index";

function Sidebar() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const backendUrl = `${API_END_POINTS.GET_COMMENT_USER}/${id}/comments`;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(backendUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("There was a problem fetching comments:", error);
      }
    };

    if (id) fetchComments();
  }, [id]);

  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FaStar key={i} color={i <= rating ? "#ffc107" : "#e4e5e9"} />
      );
    }
    return stars;
  };

  const averageRating = useMemo(() => {
    if (comments.length === 0) return 0;
    const sum = comments.reduce((acc, curr) => acc + curr.rating, 0);
    return sum / comments.length;
  }, [comments]);

  return (
    <>
      <span onClick={handleShow}>
        <div>
          {renderStars(averageRating)}
          &nbsp;: {averageRating.toFixed(1)} Rating
        </div>
      </span>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Feedback Reviews</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {comments.map((comment, index) => (
            <React.Fragment key={index}>
              <div style={{ display: "flex" }}>
                <div className='tattoosImages' style={{ paddingTop: "20px" }}>
                  <span style={{ borderRadius: "100%", background: "black", color: "white", padding: "15px 22px", fontSize:'18px' }}>{comment.author.charAt(0)}</span>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div>
                    {renderStars(comment.rating)}
                  </div>
                  <h4 className="artistname p-0" style={{ fontStyle: "5px !important", color: 'black', textDecoration: "none" }}>{comment.author}</h4>
                </div>
              </div>
              <p className="about-artist">{comment.text}</p>
              <hr />
            </React.Fragment>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
