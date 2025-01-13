import React from "react";
import Footer from "../Footer/Footer";
import "./Locations.css"

export default function Locations() {
return (
<div className="l-font">
 <div className="locations-grid-container">
         <div className="locations-grid">
            <div>
                <div className="location-background">
                <small className="l-font">
                    Birmingham
                    <br />
                   Linkstreet Bullring</small>
                </div>
                <div className="other-background">
                <small>
                    Glasgow
                    <br />
                    Silverburn Shopping Centre</small>
                    </div>
                    <div className="location-background">
                    <small className="l-font">
                    Manchester
                    <br />
                    Manchester Arndale Mall </small>
                    </div>
                    <div className="other-background">
                   <small>
                    Lakeside
                    <br />
                    Lakeside Shopping Centre </small>
                    </div>
                    <div className="location-background">
                   <small className="l-font">
                    Bolton
                    <br />
                    Market Place Shopping Centre</small>
                    </div>
                    <div className="other-background">
                   <small>
                    York
                    <br />
                    Designer Outlet</small>
                    </div>
                    <div className="location-background">
                    <small className="l-font">
                    Bath
                    <br />
                    Southgate Shopping Centre</small>
                       </div>
                       <div className="other-background">
                    <small>
                    London
                    <br />
                    West One Shopping Centre</small>
                       </div>
                       <div className="location-background">
                    <small className="l-font">
                    Bristol
                    <br />
                    Cribbs Causeway </small>
                </div>
                <div className="other-background">
                    <small>
                    Livingston
                    <br />
                    The Centre Livingston</small>
                       </div>
                
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1teIlzjPMHDLqGwJ2KuJmuheEDsGV8iA&ehbc=2E312F&noprof=1" width="565" height="750" frameborder="0"  style={{ border:`none` }} title="myFrame"></iframe>
         </div>
     </div>
     <div>
         <Footer />
     </div>
     </div>
)
}
