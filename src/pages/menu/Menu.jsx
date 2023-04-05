import React, { useEffect, useState } from "react";
import './menu.css'
import { useAppContext } from "../../AppContext";
import MenuItem from "../../components/menuItem/MenuItem";

export default function Menu() {
    const {menu,setMenu,addMealToFav} = useAppContext()
    const [menuItems,setMenuItems ] = useState([])
    const [area,setArea] = useState('All')

    const areaButtons = ['All',...new Set(menu.map(item => {
        return item.strArea
    }))]
    
    useEffect(() => {
        const filteredArea = menu.filter(item => {
            if(area === item.strArea) {
                return item
            } else if(area === 'All'){
                return item
            }
        })
        setMenuItems(filteredArea)
        localStorage.setItem('menuObjsLS',JSON.stringify(menu))
    },[menu,area])

    return (
        <div className="menu__container padding-page">
            <div className="menu__container__heading-container">
                <div className="menu__container__heading-container__heading">
                    <h1>Menu</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit praesentium ipsam delectus dignissimos nostrum facilis nam nobis sit, at corporis illum! Nulla labore est excepturi id cupiditate sint odit voluptates nihil, magni, neque voluptatum dicta. Nemo vel earum praesentium hic natus, soluta, rerum dolor expedita ipsum doloribus optio nesciunt!</p>
                </div>
                <div className="menu__container__heading-container__buttons">
                    {areaButtons.map(button => {
                        return <button onClick={() => setArea(button)} className={`areaButton ${area === button ? 'activeButton' : ''}`}>{button}</button>
                    })}
                </div>
            </div>
            <div className="menu__container__menu">
                {menuItems.map(meal => {
                    return <MenuItem menuItems={menuItems} meal={meal}/>
                })}
            </div>
        </div>
    )
}