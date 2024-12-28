import React from 'react';
import Carousel from './Carousel';  
import SocialMicon from './SocialMicons';
import Appicon from './Appicon';

export default function GridLayout() {
  return (
    <div className="carousel-grid-container">
      <div className="grid-item text-section">
        <h1 className="carousel-title">chaibubs communitea</h1>
        <p>
        Stay connected with us on Instagram and TikTok for all the latest updates, exclusive content, and behind-the-scenes fun at our bubble tea stores! 
        <span> 🎉🥤</span>
        <br/>
        <br/>
From new flavors to special promotions, our social channels are where the action happens. Don't miss out.
Share your Chatime moments with us by tagging @chatimeuk #CupsOfJoy
        </p>
        <div className='sm'>
            <SocialMicon />
            <Appicon />
        </div>
      </div>
      <div className="grid-item carousel-section">
        <Carousel /> 
      </div>
    </div>
  );
}
