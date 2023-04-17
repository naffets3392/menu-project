import React, { useEffect, useState } from "react";
import './menuitem.css'
import { useAppContext } from "../../AppContext";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function MenuItem({meal,menuItems}) {
    const [showMore,setShowMore] = useState(false)
    const [insOrIng,setInsOrIng] = useState('instructions')
    const {addMealToFav} = useAppContext()
    const {
        strMeal:name,
        strMealThumb:image,
        idMeal:id,
        isFav,
        strInstructions:instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10
    } = meal
    const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10]

        useEffect(() => {
            setShowMore(false)
            setInsOrIng('instructions')
        },[menuItems])

    if(showMore) {
        return (
            <div className="info">
                <div className="info__content-container">
                    <h3>{name}</h3>
                    <div className="info__buttonsAll-container">
                        <div className="menuItem__container__buttons-container__buttons">
                            <button className={insOrIng === 'instructions' ? 'active-menuItem-button' : ''} onClick={() => setInsOrIng('instructions')}>instructions</button>
                            <button className={insOrIng === 'ingredients' ? 'active-menuItem-button' : ''} onClick={() => setInsOrIng('ingredients')}>ingredients</button>
                        </div>
                        <button onClick={() => setShowMore(false)} className="back-button">Back</button>
                    </div>
                </div>
                <div className="info__container__text">
                    {insOrIng === 'instructions' && <p>{instructions}</p>}
                    {insOrIng === 'ingredients' && <ul>{ingredients.map(item => {
                        if(item) {
                            return <li>{item}</li>
                        }
                    })}</ul>}
                </div>
            </div>
        )
    }
    return (
        <div className="menuItem__container">
            <div className="menuItem__container__image">
                <img src={image} alt="" />
            </div>
            <div className="menuItem__container__content">
                <h3>{name}</h3>
                <div className="menuItem__container__content__buttons">
                    <button onClick={() => setShowMore(true)}>Show more</button>
                    {isFav ? <AiFillStar onClick={() => addMealToFav(id)} className="star-icon"/> : <AiOutlineStar onClick={() => addMealToFav(id)} className="star-icon"/>}
                </div>
            </div>
        </div>
    )
}