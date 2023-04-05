import React, {createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import data from './data.json'
import Menu from "./pages/menu/Menu";

const dataObjs = data.map(item => ({...item,isFav:false}))

function checkLS() {
    return localStorage.getItem('menuObjsLS') ? JSON.parse(localStorage.getItem('menuObjsLS')) : dataObjs
}
const dataObjsLS = JSON.parse(localStorage.getItem('dataObjs'))
console.log(dataObjsLS)

export const appContext = createContext()

export function AppProvider({children}) {
    const [menu,setMenu] = useState(checkLS())

    function addMealToFav(id) {
        setMenu(oldMenu => {
            return oldMenu.map(item => {
                return item.idMeal === id ? {...item,isFav: !item.isFav} : item
            })
        })
    }
    
    return (
        <appContext.Provider value={{menu,setMenu,addMealToFav}}>
            {children}
        </appContext.Provider>
    )
}

export function useAppContext() {
    return useContext(appContext)
}