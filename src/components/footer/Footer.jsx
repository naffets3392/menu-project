import React from "react";
import './footer.css'
import {AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare} from 'react-icons/ai'

export default function Footer() {
    return (
        <div className="footer__container">
            <h1>Arc'style restaurant</h1>
            <div className="footer__container__links">
                <AiOutlineInstagram className="footerIcon"/>
                <AiOutlineFacebook className="footerIcon"/>
                <AiFillTwitterSquare className="footerIcon"/>
            </div>
        </div>
    )
}