import React, { useEffect, useState } from 'react'
import imageList from '../../asserts/baner/Statue-angel-tattoo-by-@oxi.tattoo-495x400.jpg'
import { Link } from 'react-router-dom';
function Artis_details(props) {

    const [info, setInfo] = useState([]);
    const [image, setImage] = useState([]);
    useEffect(() => {
        const fetchArtis = async () => {
            await props.addNewRecord();
            setInfo(props.Artist_info_list);
            setImage(props.Artis_list_upload);

        };
        fetchArtis();

    }, [info, setInfo], [image, setImage])



    return (
        <>
            <div class="container-fluid pt-3 artisit-list artist-detail">
                <div class="container animate-box" data-animate-effect="fadeIn">

                    <div class="row aritist-col m-t-90">
                        <div class="col-md-9">
                            <div>
                                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">MY UPLOADS</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">

                                    {image.slice(0, 4).map((list, index) => (
                                        <article class="mas-holder">

                                            <section class="mas-holder-col">
                                                <img src={list.image_Url} style={{ width: '250px', height: "250px" }} />
                                            </section>
                                            <hr />

                                        </article>
                                    ))}

                                </div>
                                <div class="col-md-4">

                                    {image.slice(4, 8).map((list, index) => (
                                        <article class="mas-holder">

                                            <section class="mas-holder-col">
                                                <img src={list.image_Url} style={{ width: '250px', height: "250px" }} />
                                            </section>
                                            <hr />

                                        </article>
                                    ))}

                                </div>
                                <div class="col-md-4">

                                    {image.slice(7, 12).map((list, index) => (
                                        <article class="mas-holder">

                                            <section class="mas-holder-col">
                                                <img src={list.image_Url} style={{ width: '250px', height: "250px" }} />
                                            </section>
                                            <hr />

                                        </article>
                                    ))}

                                </div>
                            </div>



                        </div>
                        <div class="col-md-3  artist-detail-left">
                            <div id='about'>
                                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">About Aaron Bell</div>
                            </div>
                            <div class="row sticky-holder" id='holder'>
                                <div class="col-md-12 text-center" id='image'>
                                    <img class="artisit-img" src={imageList} />
                                </div>
                                <div class="col-md-12 text-center">
                                    <h4 class="artisit-name">Aaron Bell</h4>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            <p class="artisit-follower"><span>793</span> <span> <Link to="/follower">follower</Link> </span></p>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <p class="artisit-follower"><span>0</span> <span> <Link to="follower">Following</Link> </span></p>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <p class="artisit-follower"><span>793</span> <span>
                                                Follow </span></p>
                                        </div>
                                        <div class="col-md-12" id='upload'>
                                            <ul class="page-section-list" id='uploadId'>
                                                <li><Link class="active" to="/upload">My Uploads</Link></li>
                                                <li><Link to="/listDetails">About</Link></li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Artis_details