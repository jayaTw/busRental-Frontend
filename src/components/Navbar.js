import React, { useState } from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GiHamburgerMenu} from "react-icons/gi";

import {Link} from 'react-router-dom';

const Navbar = () => {               
    const [showDropdownLinks, setShowDropdownLinks] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Bus Rental</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className='nav-link dropdown-toggle' onClick={() => setShowDropdownLinks(!showDropdownLinks)} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Bookings
                            </div>
                            <div className={showDropdownLinks ? 'dropdown-menu show' : 'dropdown-menu hide'} aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="bookTicket">Book Your Ticket</a>
                                <a class="dropdown-item" href="checkTickets">Check Your Bookings</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signup">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </li>
                        <li className="nav-item active">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </li>
                    </ul>
                </form>

                {/* </div> */}
            </nav>
           
        </>
    )
}

export default Navbar;