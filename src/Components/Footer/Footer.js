import React from "react";
import "./Footer.css" 

export default function Footer() {
    return (
        <div className="footer-grid-container">
          <div className="section section-1">chaibubs</div>
          <div className="section section-2">
            <div className="row">
              <a href="https://bubblecitea.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="link">Terms and Conditions</a></div>
            <div className="row">
              <a href="https://bubblecitea.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="link">Privacy Policy</a></div>
            <div className="row"><a href="https://bubblecitea.com/returns-policy" target="_blank" rel="noopener noreferrer" className="link">Returns Policy</a></div>
          </div>
          <div className="section section-3">
            <div className="row">
              <a href="https://bubblecitea.com/our-story/" target="_blank" rel="noopener noreferrer" className="link">About Us</a></div>
            <div className="row"><a href="https://bubblecitea.com/faqs"target="_blank" rel="noopener noreferrer" className="link">FAQs</a></div>
            <div className="row"> <a href="https://bubblecitea.com/franchise" target="_blank" rel="noopener noreferrer" className="link">Franchising</a></div>
          </div>
          <div className="section section-4">
            <div> 131 Queen Street </div>
            <div> Portsmouth </div>
             <div> PO1 3HY </div>
             </div>
         </div>
      );
}