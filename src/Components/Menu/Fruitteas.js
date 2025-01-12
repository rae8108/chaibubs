import React from "react";
import fruit1 from "../../images/fruit/greenapple.jpeg";
import fruit2 from "../../images/fruit/guavafruit.jpeg";
import fruit3 from "../../images/fruit/lycheefruit.jpeg";
import fruit4 from "../../images/fruit/mangofruit.jpeg";
import fruit5 from "../../images/fruit/strawberryfruit.jpeg";
import fruit6 from "../../images/fruit/whitepeach.jpeg";
import Footer from "../Footer/Footer";
import "./Fruitteas.css"

export default function Fruitteas() {
    return (
        <div>
        <h3 className="fruit">Fruit Teas</h3>
        <div className="fruitteas-container">
            <div className="fruitteas-grid">
                <div>
                    <img src={fruit1} alt="Green Apple" />
                    <p>Green Apple</p>
                </div>

                <div>
                    <img src={fruit2} alt="Guava Fruit" />
                    <p>Guava</p>
                </div>

                <div>
                    <img src={fruit3} alt="Lychee Fruit" />
                    <p>Lychee</p>
                </div>

                <div>
                    <img src={fruit4} alt="Mango Fruit" />
                    <p>Mango</p>
                </div>

                <div>
                    <img src={fruit5} alt="Strawberry Fruit" />
                    <p>Strawberry</p>
                </div>

                <div>
                    <img src={fruit6} alt="White Peach" />
                    <p>White Peach</p>
                </div>

            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}