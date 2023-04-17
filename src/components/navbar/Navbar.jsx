import React, { useState } from "react";
import {SiCodechef} from 'react-icons/si'
import {FaHamburger} from 'react-icons/fa'
import {GiKnifeFork} from 'react-icons/gi'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [activeButton,setActiveButton] = useState('Home')
    const [showMenu,setShowMenu] = useState(false)

    return (
        <div className="navbar__container">
            <div className="navbar__container__logo">
                <SiCodechef className="logo-icon"/>
                <h1>ARC'STYLE restaurant</h1>
            </div>
            <div className="navbar__container__links-container">
                <div className={`navbar__container__links-container__links ${showMenu ? 'showMenu' : ''}`}>
                    <Link onClick={() => {setActiveButton('Home'); setShowMenu(false)}} className={`link ${activeButton === 'Home' ? 'active-nav-button' : ''}`} to='/'>Home</Link>
                    <Link onClick={() => {setActiveButton('Menu'); setShowMenu(false)}} className={`link ${activeButton === 'Menu' ? 'active-nav-button' : ''}`} to='/menu'>Menu</Link>
                    <Link onClick={() => {setActiveButton('Favourites'); setShowMenu(false)}} className={`link ${activeButton === 'Favourites' ? 'active-nav-button' : ''}`} to='/favourites'>Favourites</Link>
                    <Link onClick={() => {setActiveButton('About us'); setShowMenu(false)}} className={`link ${activeButton === 'About us' ? 'active-nav-button' : ''}`} to='/aboutus'>About us</Link>
                    <Link onClick={() => {setActiveButton('Contact'); setShowMenu(false)}} className={`link ${activeButton === 'Contact' ? 'active-nav-button' : ''}`} to='/contact'>Contact</Link>
                </div>
                <div className="navbar__container__links-container__menu">
                        {!showMenu ? <FaHamburger onClick={() => setShowMenu(true)} className="hamburger-menu"/> : <GiKnifeFork onClick={() => setShowMenu(false)} className="hamburger-menu"/>}
                </div>
            </div>
        </div>
    )
}