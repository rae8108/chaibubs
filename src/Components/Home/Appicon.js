import React from "react";
import "./Appicon.css"

export default function Appicon() {
    return (
        <div>
            <div className="loyaltyapp">Download our loyalty app</div>
            <div>
            <button className="buttons">
                <a href="https://apps.apple.com/gb/app/bubble-citea/id1659363993" target="_blank" rel="noopener noreferrer" className="abuttons">App Store</a></button>
            <button>
                <a href="https://play.google.com/store/apps/details?id=com.como.prod940920221212&pli=1" target="_blank" rel="noopener noreferrer" className="abuttons">Google Play</a></button>
            </div>
        </div>
    )
}