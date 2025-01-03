import React from "react";
import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer";
import "./Menu.css"

export default function Menu() {
return (
<div>
   <div className="menu-title">menu</div>
    <div className="menu-grid-container">
            <div className="menu-grid">
               <p className="speciallink"><NavLink to="/special">Specials</NavLink></p>
               <p className="speciallink"><NavLink to="/fruitteas">Fruit Teas</NavLink></p>
               <p>Milk Teas</p>
               <p>Toppings</p>
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </div>
)
}
