import React, { useState } from 'react';
import './Style.css';
import Typewriter from "typewriter-effect";
import dropdown from "./img-logo/dropdown.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
      <div className="menu-bar">
        <nav className="navbar">
            <div className="navbar-brand ">
            <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome to VIP School")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Education is the Most Powerfull Weapon")
                      .deleteAll()
                      .typeString("Learning Never Ends")
                      .deleteAll()
                      .typeString("Education is the Most Powerfull Weapon")
                      .start();
                  }}
                />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <ul>
          <li id='home'><a href="/">HOME</a></li>

          <li> <span><a href="/">ABOUT US</a><img src={dropdown} id='dropdown-icon' alt="..." /></span>
            <div class="dropdown-menu">
              <ul >
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
          </li>
          <li><span><a href="/" className='mt-4'>ACADEMIC</a><img src={dropdown} id='dropdown-icon' alt="..." /></span>

            <div class="dropdown-menu">
              <ul>
                <li> <Link to="/fee"><a href="/">Fee-Structure</a></Link> </li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
          </li>

          <li><a href="/">GALLARY</a></li>

          <li><a href="/">CONTACT US</a></li>
        </ul>
            </div>
            <div className="navbar-toggle" onClick={handleToggleMenu}>
                ☰
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
