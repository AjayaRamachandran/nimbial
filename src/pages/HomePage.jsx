import React from 'react';
import './homepage.css';
import mainVideo from '/assets/NimbialBanner.mp4';

import Navbar from '@/components/Navbar';

function HomePage() {
  return (
    <>
      <div className='main-banner'>
        <video 
          src={mainVideo} 
          width='100%' 
          height='100%'
          autoPlay 
          loop 
          muted 
          playsInline
          className="banner-video"
        ></video>
      </div>
      <Navbar />
    </>
  );
}

export default HomePage;
