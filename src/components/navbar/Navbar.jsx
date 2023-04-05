import React, { useState } from "react";
import {SiCodechef} from 'react-icons/si'
import {FaHamburger} from 'react-icons/fa'
import { Link } from "react-router-dom";
import './navbar.css'

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
                    <Link onClick={() => {setActiveButton('Home'); setShowMenu(false)}} className={`link ${activeButton === 'Home' ? 'active-button' : ''}`} to='/'>Home</Link>
                    <Link onClick={() => {setActiveButton('Menu'); setShowMenu(false)}} className={`link ${activeButton === 'Menu' ? 'active-button' : ''}`} to='/menu'>Menu</Link>
                    <Link onClick={() => {setActiveButton('Favourites'); setShowMenu(false)}} className={`link ${activeButton === 'Favourites' ? 'active-button' : ''}`} to='/favourites'>Favourites</Link>
                    <Link onClick={() => {setActiveButton('About us'); setShowMenu(false)}} className={`link ${activeButton === 'About us' ? 'active-button' : ''}`} to='/aboutus'>About us</Link>
                    <Link onClick={() => {setActiveButton('Contact'); setShowMenu(false)}} className={`link ${activeButton === 'Contact' ? 'active-button' : ''}`} to='/contact'>Contact</Link>
                </div>
                <div className="navbar__container__links-container__menu">
                        <FaHamburger onClick={() => setShowMenu(!showMenu)} className="hamburger-menu"/>
                </div>
            </div>
        </div>
    )
}