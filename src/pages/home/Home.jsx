import React from "react";
import './home.css'
import img2 from '../../menuprojectimages/menuprojectimage2.jpg'
import img3 from '../../menuprojectimages/menuprojectimage3.jpg'
import img4 from '../../menuprojectimages/menuprojectimage4.jpg'

export default function Home() {
    return (
        <div className="home__container padding-page">
            <div className="home__container__heading">
                <h1>Welcome to Our restaurant</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maxime ad tempore pariatur reiciendis iste amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur reprehenderit tempora architecto ab officiis sint commodi totam nostrum optio molestiae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis omnis tempore dolores harum quod quibusdam corporis velit sunt placeat ipsum. Architecto nemo, non fugiat id molestias aliquam explicabo laudantium nam illum facere saepe minima exercitationem possimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic aperiam tenetur numquam molestias animi sequi velit sapiente libero architecto quas sunt illum provident, vitae corrupti corporis. Fugiat, vitae repellendus? Quam, animi.</p>
            </div>
            <div className="home__container__images">
                <div className="home__container__image__flex">
                    <img src={img2} alt="" />
                </div>
                <div className="home__container__images__grid">
                        <div><img src={img3} alt="" /></div>
                        <div><img src={img4} alt="" /></div>
                </div>
            </div>
        </div>
    )
}