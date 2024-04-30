import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Follower(props) {
    const [follower, setFollower] = useState([]);
    useEffect(() => {
        const follower = async () => {
            await props.addNewRecord();
            setFollower(props.follower);
        }
        follower();
    }, [follower, setFollower])

    return (
        <section className="search-page follower-page">
            <div className="container-fluid pt-3">
                <div className="container">
                    <div className="row  animate-box" data-animate-effect="fadeIn">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-block">

                                    <div className="row">
                                        {props.follower && props.follower.length > 0 && (
                                            <>
                                                <div className="col-md-1">
                                                    <img width="100%" src={props.follower[0].profile_url} alt={props.follower[0].name} style={{
                                                        height: '82px',
                                                        width: '88px'
                                                    }} />
                                                </div>
                                                <div className="col-md-11 pd-5">
                                                    <h3>{props.follower[0].name}</h3>
                                                    <p>From Tattoodo App</p>
                                                </div>
                                            </>
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-50">
                        <div className="col-md-12">
                            <div>
                                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Followers </div>
                            </div>
                            <table className="table table-striped">
                                <tbody>

                                    {follower.map((item1, index) => (
                                        <tr>
                                            <td width="5%">
                                                <Link to="/">
                                                    <img width="100%" src={item1.profile_url} style={{
                                                        height: '82px',
                                                        width: '88px'
                                                    }} />
                                                </Link>
                                            </td>
                                            <td width="85%">
                                                <Link to="/">{item1.follwer_name} <br /> <span>{item1.follower_id}</span>
                                                </Link>
                                            </td>
                                            <td width="10%"> <button className="btn btn-defaulr">Follow</button></td>
                                        </tr>
                                    ))}
                                </tbody >
                            </table >
                        </div >
                    </div >
                </div >

            </div >
        </section >

    )
}

export default Follower