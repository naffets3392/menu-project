import React from "react";
import { useAppContext } from "../../AppContext";
import MenuItem from "../../components/menuItem/MenuItem";

export default function Favourites() {
    const {menu,addMealToFav} = useAppContext()
    const favouriteMeals = menu.filter(item => {
        if(item.isFav) {
            return item
        }
    })
    console.log(menu)
    return (
        <div className="favourites__container padding-page">
            <div className="favourites__container__heading heading">
                <h1>Favourites</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam dolorum exercitationem, neque dolore cumque quas ipsam esse molestias ratione?</p>
            </div>
            <div className="favourites__container__items-container">
                {favouriteMeals.length ? <div className="favourites__container__items">
                    {favouriteMeals.map(meal => {
                        return <MenuItem meal={meal}/>
                    })}
                </div> : <h3 className="favouriteMeals">No favourite meals!</h3> }
            </div>
        </div>
    )
}