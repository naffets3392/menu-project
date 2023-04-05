import React from "react";
import './contact.css'
import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api";

export default function Contact() {
    const {} = useLoadScript({googleMapsApiKey: ''})

    return (
        <div className="contact__container padding-page">
            <div className="contact__container__heading">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est pariatur quasi, mollitia delectus optio a tempora sapiente odit? Perferendis, voluptate? Doloremque provident harum alias non eligendi libero ratione a ullam. Nisi enim dolorem, numquam doloremque sed quaerat amet, eveniet nulla odit fugiat illo eaque suscipit. Itaque illo ducimus rem!</p>
            </div>
            <div className="contact__container__phone">
                <div className="contact__container__phone__phone-number">
                    <h3>Phone number: 011 / 255-3247</h3>
                </div>
                <div className="contact__container__phone__adress">
                    <h3>Adress: Milesevska 73</h3>
                </div>
            </div>
            <div className="contact__container__map">
                <h3>Location</h3>
                <iframe width='100%' height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1000&amp;height=300&amp;hl=en&amp;q=milesevska%2073%20Belgrade+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    )
}