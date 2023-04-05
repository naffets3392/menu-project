import React from "react";
import './aboutus.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img5 from '../../menuprojectimages/menuprojectimage5.jpg'
import img6 from '../../menuprojectimages/menuprojectimage6.jpg'
import img7 from '../../menuprojectimages/menuprojectimage7.jpg'
import img8 from '../../menuprojectimages/menuprojectimage8.jpg'
import img9 from '../../menuprojectimages/menuprojectimage9.jpg'
import img10 from '../../menuprojectimages/menuprojectimage10.jpg'

export default function Aboutus() {
    const images = [img5,img6,img7,img8,img9,img10]
    console.log(images)
    return (
        <div className="aboutus__container padding-page">
            <div className="aboutus__container__heading">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, beatae quibusdam perferendis molestiae veniam incidunt voluptas nostrum quae tempore a repellat cupiditate rerum exercitationem consectetur maiores adipisci, ex, necessitatibus ratione eos nemo quas delectus minima! Voluptate facere necessitatibus dolores eius sed perferendis. Necessitatibus ipsam atque excepturi eum quae aliquam consequatur?</p>
            </div>
            <div className="aboutus__container__images">
                <h3>Our restaurant</h3>
                <Splide className="image-splide" options={{
                    type: 'loop',
                    perPage: 3,
                    gap: '2rem',
                    pagination: false
                }}>
                    {images.map(image => {
                        return <SplideSlide>
                            <img src={image} alt=""  className="splide-image"/>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </div>
    )
}