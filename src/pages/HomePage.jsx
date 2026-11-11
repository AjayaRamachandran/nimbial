import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './homepage.css';
import mainVideo from '/assets/NimbialBanner.mp4';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPanel from './AboutPanel';
import BlueprintPanel from './BlueprintPanel';

function HomePage() {
  const { pathname } = useLocation();
  const aboutRef = useRef(null);

  // Visitors arriving at /about are taken down to the about panel
  useEffect(() => {
    if (pathname.replace(/\/+$/, '') === '/about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname]);

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
      <AboutPanel ref={aboutRef} />
      <BlueprintPanel />
      <Footer />
      <Navbar />
    </>
  );
}

export default HomePage;
