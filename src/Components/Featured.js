import React from "react";
import birminghamlive from "../images/featuredimages/birminghamlive.jpg";
import blackburn from "../images/featuredimages/blackburn.jpeg"
import bristollive from "../images/featuredimages/bristollive.jpeg"
import chroniclelive from "../images/featuredimages/chroniclelive.jpeg"
import devondaily from "../images/featuredimages/devondaily.jpeg"
import glasgowtimes from "../images/featuredimages/glasgowtimes.jpeg"
import hampshirelive from "../images/featuredimages/hampshirelive.jpeg"
import insider from "../images/featuredimages/insider.jpeg"
import lancashiretelegraph from "../images/featuredimages/lancashiretelegraph.jpeg"
import londontv from "../images/featuredimages/londontv.jpeg"
 
import peterboroughmatters from "../images/featuredimages/peterboroughmatters.jpeg";
import plymouthlive from "../images/featuredimages/plymouthlive.jpeg"
import pressandjournal from "../images/featuredimages/pressanjournal.jpeg"
import pressreader from "../images/featuredimages/pressreader.jpeg"
import somersetlive from "../images/featuredimages/somersetlive.jpeg"
import thebusinessexchange from "../images/featuredimages/thebusinessexchange.jpeg"
import totalbath from "../images/featuredimages/totalbath.jpeg"
import visitportsmouth from "../images/featuredimages/visitportsmouth.jpeg"
import wasd from "../images/featuredimages/wasd.jpeg"
import "./Featured.css"



export default function Featured() {
    return (
        <div className="featuredimagescontainer">
            <h4>As featured in:</h4>
            <div className="featuredimages">
            <img src={birminghamlive} alt="f1" />
            <img src={blackburn} alt="f2" />
            <img src={bristollive} alt="f3" />
            <img src={chroniclelive} alt="f4" />
            <img src={devondaily} alt="f5" />
            <img src={glasgowtimes} alt="f6" />
            <img src={hampshirelive} alt="f7" />
            <img src={insider} alt="f8" />
            <img src={lancashiretelegraph} alt="f9" />
            <img src={londontv} alt="f10" />

            <img src={peterboroughmatters} alt="f11" />
            <img src={plymouthlive} alt="f12" />
            <img src={pressandjournal} alt="f13" />
            <img src={pressreader} alt="f14" />
            <img src={somersetlive} alt="f15" />
            <img src={thebusinessexchange} alt="f16" />
            <img src={totalbath} alt="f17" />
            <img src={visitportsmouth} alt="f18" />
            <img src={wasd} alt="f19" />
            </div>
        </div>
    )
}