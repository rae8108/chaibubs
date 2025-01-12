import React from "react";
import toppings1 from "../../images/toppings/tapioca.jpg";
import toppings2 from "../../images/toppings/brownsugar.jpg";
import toppings3 from "../../images/toppings/mangobubbles.jpg";
import toppings4 from "../../images/toppings/applebubbles.jpg";
import toppings5 from "../../images/toppings/raspberrybubbles.jpg";
import toppings6 from "../../images/toppings/strawberrybubbles.jpg";
import Footer from "../Footer/Footer";
import "./Toppings.css"

export default function Toppings() {
    return (
        <div>
        <h3 className="toppings">Toppings</h3>
        <div className="toppings-container">
            <div className="toppings-grid">
                <div>
                    <img src={toppings1} alt="Tapioca" />
                    <p>Tapioca</p>
                </div>

                <div>
                    <img src={toppings2} alt="Brown Sugar" />
                    <p>Brown Sugar</p>
                </div>

                <div>
                    <img src={toppings3} alt="Mango Bubbles" />
                    <p>Mango Bubbles</p>
                </div>

                <div>
                    <img src={toppings4} alt="Orange Bubbles" />
                    <p>Orange Bubbles</p>
                </div>

                <div>
                    <img src={toppings5} alt="Rainbow Bubbles" />
                    <p>Rainbow Bubbles</p>
                </div>

                <div>
                    <img src={toppings6} alt="Strawberry Bubbles" />
                    <p>Strawberry Bubbles </p>
                </div>

            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}