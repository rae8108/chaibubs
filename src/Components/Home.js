import React from "react";
import seasonalbanner from "../images/seasonalbanner.jpeg"
import Homegrid from "./Homegrid";
import "./Home.css"

import GridLayout from "./Gridlayout";

export default function Home() {
return (
    <div>
    <div>
        <img src={seasonalbanner} alt="seasonalbanner" className="seasonalbanner"/>
    </div>
    <div>
        <h4 className="welcometitle">Welcome to chaibubs </h4>
        <p className="welcomemessage">We are a locally owned and renowned brand who adapts unique flavours to meet local needs, whilst keeping the traditional core value of Taiwanese bubble tea culture. We proudly serve fresh bubble tea at all our retail locations, where we aim to keep the core value of high-quality drinks, outstanding customer service, cleanliness and hygiene. Every season we adapt our special recipes to meet your needs. </p>
    </div>
  <div>
    <Homegrid />
  </div>
  <div>
    <GridLayout/>
  </div>
</div>
)
}
