import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <Link to="/">
                    <img
                        src={require('../images/speroicon.png')}
                        alt="Logo"
                        id="logo-image"
                    />
                </Link>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <Link to="/about">
                            <div className="navlink">ABOUT US</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/team">
                            <div className="navlink">OUR TEAM</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/design/mountainmover">
                            <div className="navlink">DESIGNS</div>
                        </Link>
                    </li>
                    <li>
                        <a href="http://tinyurl.com/spero-etsy">
                            <div className="navlink">SHOP</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
