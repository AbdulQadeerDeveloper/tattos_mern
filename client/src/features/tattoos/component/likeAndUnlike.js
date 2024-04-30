import React, { useState } from 'react';
import axios from 'axios';
import { FaShare } from "react-icons/fa";
import { API_END_POINTS } from "../../../services/index"
import { IoClose } from "react-icons/io5";
import { AiFillLike, AiFillDislike, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    EmailShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    EmailIcon,
    WhatsappIcon
} from 'react-share';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function LikeAndUnlike({ tattooId }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false); // State to track if the tattoo has been disliked
    const shareUrl = process.env.REACT_APP_SHARE_URL;
    // console.log('Share URL:', shareUrl);
    const backendUrlDislike = `${API_END_POINTS.POST_DISLIKE}/${tattooId}/dislike`;
    const backendUrlLike = `${API_END_POINTS.POST_LIKE}/${tattooId}/like`;
    const userId = process.env.REACT_APP_USER_ID;
    // console.log('User ID:', userId);

    const handleLike = async () => {
        try {
            await axios.post(backendUrlLike, { userId });
            setIsLiked(true);
            setIsDisliked(false); // Reset dislike when liked
            toast.success('Tattoo liked successfully!');
        } catch (error) {
            console.error('Error liking the tattoo:', error);
            toast.error('Failed to like the tattoo.');
        }
    };

    const handleDislike = async () => {
        try {
            await axios.post(backendUrlDislike, { userId });
            setIsDisliked(true);
            setIsLiked(false); // Reset like when disliked
            toast.success('Tattoo disliked successfully!');
        } catch (error) {
            console.error('Error disliking the tattoo:', error);
            toast.error('Failed to dislike the tattoo.');
        }
    };

    return (
        <div>
            <span className='likecontainer'>
                {isLiked ? (
                    <>
                        <span style={{ color: "#0561f2", fontSize: "20px", paddingLeft: "20px" }}>
                            <AiFillHeart />
                        </span>
                        <span style={{
                            position: "relative",
                            left: "4px",
                            color: "#0561f2"

                        }}><span>Like</span></span>
                    </>
                ) : (
                    <>
                        <span style={{ color: "#1a1918", fontSize: "20px", paddingLeft: "20px", position: "relative", bottom: '5px' }} onClick={handleLike}>
                            <AiFillLike />
                        </span>
                        <span style={{
                            position: "relative",
                            left: "4px"
                        }}>Like</span>
                    </>
                )}

            </span>
            {/* Updated Dislike button with conditional rendering */}
            <span className='likecontainer'>
                {isDisliked ? (
                    <>
                        <span style={{ color: "#0561f2", fontSize: "20px", paddingLeft: "20px" }}>
                            <AiOutlineHeart />
                        </span>
                        <span style={{
                            position: "relative",
                            left: "4px",
                            color: "#0561f2"
                        }}>Dislike</span>
                    </>
                ) : (
                    <span>
                        <span style={{ color: "#1a1918", fontSize: "20px", paddingLeft: "20px" }} onClick={handleDislike}>
                            <AiFillDislike />
                        </span>
                        <span style={{
                            position: "relative",
                            left: "4px"
                        }}>Dislike</span>
                    </span>
                )}

            </span>
            <span className='likecontainer'>
                <span data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: "#1a1918", fontSize: "20px", paddingLeft: "20px" }}>
                    <FaShare />
                </span>
                <span style={{
                    position: "relative",
                    left: "4px"
                }}>Share</span>
            </span>

            <br /><br />


            {/* Modal and share buttons */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id='social' style={{ width: "350px", padding: "10px", position: "relative", top: "4rem" }}>
                        <IoClose className='share' data-bs-dismiss="modal" />
                        <FacebookShareButton url={shareUrl}>
                            <button>Facebook<FacebookIcon size={40} round={true} style={{ marginLeft: '20px' }} /></button>
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl}>
                            <button>Twitter <TwitterIcon size={40} round={true} style={{ marginLeft: '20px' }} /></button>
                        </TwitterShareButton>
                        <PinterestShareButton url={shareUrl} media={`${shareUrl}example-image.jpg`}>
                            <button>Pinterest   <PinterestIcon size={40} round={true} style={{ marginLeft: '20px' }} /></button>
                        </PinterestShareButton>
                        <EmailShareButton url={shareUrl}>
                            <button>E-mail <EmailIcon size={40} round={true} style={{ marginLeft: '20px' }} /></button>
                        </EmailShareButton>
                        <WhatsappShareButton url={shareUrl} title="Check out this site!">
                            <button>Whatsapp<WhatsappIcon size={40} round={true} style={{ marginLeft: '20px' }} /></button>
                        </WhatsappShareButton>


                    </div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default LikeAndUnlike;
