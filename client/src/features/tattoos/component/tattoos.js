import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTattooDetails } from '../reducer/action';
import LikeAndUnlike from './likeAndUnlike';
import CommentForm from './commentForm';
import Sidebar from './sidebar';
import BACKEND_URL_APPLICATION from "../../../utils/index";

function TattoosId() {
  const auth = useSelector((state) => state.authReducer.user);

  const { id } = useParams();
  // console.log("Tattoo ID from useParams:", id);
  const dispatch = useDispatch();
  const { loading = false, tattooDetails = null, error = '' } = useSelector(state => state.tattooDetails || {});

  useEffect(() => {
    if (id) {
      dispatch(fetchTattooDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  function truncateText(text, limit) {
    const wordArray = text?.split(' ');
    if (!wordArray) return ''; // Return empty string if text is undefined or null
    if (wordArray.length <= limit) return text; // Return the original text if it's short enough

    const truncated = wordArray.slice(0, limit).join(' ');
    return `${truncated}...`; // Append ellipsis to indicate truncation
  }


  return (
    <div className="container-fluid artisit-list artist-detail mt-5 pt-5">
      <div className="container animate-box" data-animate-effect="fadeIn">
        <div className="row aritist-col m-t-90">

          <div className='col-md-7'>
            <div className='tattoosImages'>
              <img src={`${BACKEND_URL_APPLICATION}/${tattooDetails?.tattooImage}`} style={{ height: "480px", width: "100%" }} />
            </div>
          </div>
          <div className='col-md-5' style={{ background: "white", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", padding: "20px", height: 'auto' }}>
            <div>
              <img src={`${BACKEND_URL_APPLICATION}/${tattooDetails?.tattooImage}`} style={{ borderRadius: "100%", width: "50px", height: '50px' }} />

              <span style={{ color: "black", paddingLeft: "20px", paddingTop: "20px", fontSize: "20px", fontWeight: "500" }}>
                <strong>Hannah Aitchison</strong>
                <br />
                <span className='fs-6 pt-4'>{tattooDetails?.tagTattoos}</span>
              </span>
              <hr />


            </div>
            <span style={{ position: "relative", right: "20px" }}><LikeAndUnlike tattooId={id} /></span>
            <Sidebar />

            <hr />

            <p>Done At</p>

            <Link to="/booking" style={{
              color: "rgb(88 92 98 / 86%)",
              textDecoration: "none"
            }}>
              <div style={{ display: "flex", }} className='artistWriter' >
                <div className='tattoosImages'>
                  <img src={`${BACKEND_URL_APPLICATION}/${tattooDetails?.tattooImage}`} style={{ borderRadius: "100%", width: "50px", height: "50px" }} />
                </div>

                <div>
                  <h4 style={{ fontStyle: "5px !important", color: 'black', textDecoration: "none", padding: "0px", marginLeft: "20px" }}>Hannah Aitchison</h4>
                  <span style={{ marginLeft: "20px" }}>Dr. Tattoos artisit</span>
                </div>
              </div>
            </Link>

          </div>


          {auth ?
            <React.Fragment> <CommentForm tattooId={id} /></React.Fragment> : <React.Fragment></React.Fragment>
          }



        </div>

      </div >


    </div >





  )
}

export default TattoosId