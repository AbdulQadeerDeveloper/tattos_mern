// TattooCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import BACKEND_URL_APPLICATION from "../../../utils/index";



function truncateText(text, limit) {
    const words = text.split(" ");
    return words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "");
}
const TattooCard = ({ tattoo }) => (
    <div className='col-lg-4 col-md-6 col-sm-12 pb-2 text-center flex justifly-content-center'>

        <Link to={`/tattoo/${tattoo._id}`} style={{ textDecoration: "none", textAlign: "center", background:"black" }}>
            <div className="image-overlay">
                <img src={`${BACKEND_URL_APPLICATION}/${tattoo.tattooImage}`} alt={tattoo.tattoosTitle} style={{ width: "105%", height: "320px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px", borderBottomLeftRadius:"10px", WebkitBorderBottomRightRadius:"10px" }} />
            </div>
            
        </Link>

    </div>
);

export default TattooCard;
