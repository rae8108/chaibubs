import React from "react";
import milk1 from "../../images/milk/dirtyfrappe.jpg";
import milk2 from "../../images/milk/dirtylatte.jpg";
import milk3 from "../../images/milk/dirtymilk.jpeg";
import milk4 from "../../images/milk/jasmine.jpeg";
import milk5 from "../../images/milk/matcha.jpeg";
import milk6 from "../../images/milk/taro.jpeg";
import Footer from "../Footer/Footer";
import "./Milkteas.css"

export default function Milkteas() {
    return (
        <div>
        <h3 className="milk">Milk Teas</h3>
        <div className="milkteas-container">
            <div className="milkteas-grid">
                <div>
                    <img src={milk1} alt="Dirty Frappe" />
                    <p>Dirty Frappe</p>
                </div>

                <div>
                    <img src={milk2} alt="Dirty Latte" />
                    <p>Dirty Latte</p>
                </div>

                <div>
                    <img src={milk3} alt="Dirty Milk" />
                    <p>Dirty Milk</p>
                </div>

                <div>
                    <img src={milk4} alt="Jasmine" />
                    <p>Jasmine</p>
                </div>

                <div>
                    <img src={milk5} alt="Matcha" />
                    <p>Matcha</p>
                </div>

                <div>
                    <img src={milk6} alt="Taro" />
                    <p>Taro</p>
                </div>

            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}