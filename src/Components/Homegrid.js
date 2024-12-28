import React from "react";
import "./Homegrid.css"
import bubblepic1 from "../images/bubblepic/bubblepic1.png";
import bubblepic2 from "../images/bubblepic/bubblepic2.png";
import bubblepic3 from "../images/bubblepic/bubblepic3.png";
import bubblepic4 from "../images/bubblepic/bubblepic4.png";
import bubblepic5 from "../images/bubblepic/bubblepic5.jpg";
import bubblepic6 from "../images/bubblepic/bubblepic6.png";
import bubblepic7 from "../images/bubblepic/bubblepic7.jpg";
import bubblepic8 from "../images/bubblepic/bubblepic8.jpg";

export default function Homegrid() {
    return (
        <div className="grid-container">
            <div className="grid">
                <img src={bubblepic1} alt="image1" />
                <img src={bubblepic2} alt="image2" />
                <img src={bubblepic3} alt="image3" />
                <img src={bubblepic4} alt="image4" />
                <img src={bubblepic5} alt="image5" />
                <img src={bubblepic6} alt="image6" />
                <img src={bubblepic7} alt="image7" />
                <img src={bubblepic8} alt="image8" />
            </div>
        </div>
    );
}
