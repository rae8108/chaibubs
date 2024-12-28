import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok  } from '@fortawesome/free-brands-svg-icons';
import "./SocialMicons.css"

export default function SocialMicon() {
    return (
        <div className="socialmediaicons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
        </a>
    </div>
    );
}
