//components/header.js
import react from "react";
import { Link } from 'react-router-dom'
import logo from '../../asserts/baner/logo.png'
function Header(props) {


    return (
        <>
            <header class='header'>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-3 fh5co_padding_menu">
                            <Link to="/">
                                <img src={logo} alt="img" class="fh5co_logo_width" />
                            </Link>
                        </div>
                        <div class="col-12 col-md-9 align-self-center fh5co_mediya_right">
                            <nav class="navbar navbar-toggleable-md navbar-light ">
                                <button class="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span
                                        class="fa fa-bars">
                                    </span>
                                </button>
                                <Link class="navbar-brand" to="/">
                                    <img src="images/logo.png" alt="img" className="mobile_logo_width" />
                                </Link>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <Link class="nav-link" to="/">Home <span
                                                class="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/categories">Categories <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/artist">Artist <span class="sr-only"></span></Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link class="nav-link" to="/tattoo">
                                                Tattoo <span class="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" to="/Details">
                                                Tattoo Detail<span class="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" to="/listDetails">
                                                Artist Detail<span class="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" to="/follower">Follower<span class="sr-only">(current)</span> </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/register">Register <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" to="/login">Login <span class="sr-only">(current)</span></Link>
                                        </li>



                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
