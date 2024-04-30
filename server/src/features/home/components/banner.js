import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function BannerHome(props) {
    useEffect(() => {
        props.addNewRecord();
    }, [props.addNewRecord]);

  return (
    <div>
        <div className="container-fluid paddding mb-5 m-t-75">
            <div className="row mx-0">
                {props.Home_Banner && props.Home_Banner.length > 0 && (
                    <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                        <div className="fh5co_suceefh5co_height">
                            <img src={props.Home_Banner[0].image_Url} alt={props.Home_Banner[0].title} />
                            <div className="fh5co_suceefh5co_height_position_absolute"></div>
                            <div className="fh5co_suceefh5co_height_position_absolute_font">
                                <div>
                                    <Link to="/tattoos/list" className="color_fff">
                                        <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{props.Home_Banner[0].current_Data}
                                    </Link>
                                </div>
                                <div className=""><Link to="/tattoos/list" className="fh5co_good_font">{props.Home_Banner[0].title}</Link></div>
                                <div className=""><Link to="/tattoos/list" className="fh5co_good_font">{props.Home_Banner[0].short_Dis}</Link></div>
                            </div>
                        </div>
                    </div>
                )}

                {props.Home_Banner && props.Home_Banner.length > 1 && (
                    <div className="col-md-6">
                        <div className="row">
                            {props.Home_Banner.slice(1).map((banner, index) => (
                                <div key={banner.id} className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                    <div className="fh5co_suceefh5co_height_2">
                                        <img src={banner.image_Url} alt={banner.title} />
                                        <div className="fh5co_suceefh5co_height_position_absolute"></div>
                                        <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                                            <div className="">
                                                <Link to="/tattoos/list" className="color_fff">
                                                    <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{banner.current_Data}
                                                </Link>
                                            </div>
                                            <div className="">
                                                <Link to="/tattoos/list" className="fh5co_good_font_2">{banner.title}</Link>
                                            </div><div className="">
                                                <Link to="/tattoos/list" className="fh5co_good_font_2">{banner.short_Dis}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default BannerHome