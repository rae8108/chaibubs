import React from "react";
import special1 from "../../images/specialdrinks/berrybeauty.jpeg";
import special2 from "../../images/specialdrinks/mangosunrise.jpeg";
import special3 from "../../images/specialdrinks/passionchia.jpeg";
import special4 from "../../images/specialdrinks/merrycherry.jpeg";
import special5 from "../../images/specialdrinks/cherrystar.jpg";
import special6 from "../../images/specialdrinks/mintoreo.jpg";
import Footer from "../Footer/Footer";
import "./Specials.css";

export default function Specials() {
    return (
        <div>
            <h3>Special Drinks</h3>
            <div className="specialdrinks-container">
                <div className="specialdrinks-grid">
                    <div>
                        <img src={special1} alt="Berry Beauty Shake" />
                        <p>Berry Beauty Shake</p>
                    </div>

                    <div>
                        <img src={special2} alt="Mango Sunrise Smoothie" />
                        <p>Mango Sunrise Smoothie</p>
                    </div>

                    <div>
                        <img src={special3} alt="Passion Chia Glow" />
                        <p>Passion Chia Glow</p>
                    </div>

                    <div>
                        <img src={special4} alt="Merry Cherry Punch" />
                        <p>Merry Cherry Punch</p>
                    </div>

                    <div>
                        <img src={special5} alt="Cherry Star Sparkle" />
                        <p>Cherry Star Sparkle</p>
                    </div>

                    <div>
                        <img src={special6} alt="Mint Oreo Dream" />
                        <p>Mint Oreo Dream</p>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
