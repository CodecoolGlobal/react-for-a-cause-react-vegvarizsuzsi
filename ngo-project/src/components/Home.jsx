import React from 'react';
import '../App.css';

import './Home.css';

function Home() {
  return (
    <div className='home-container' id='Home'>
      <video src='/videos/video-1.mp4'
        autoPlay loop muted />
      <h1>BE A HERO</h1>
      <p>Start Pollinating With Precision Today</p>
    </div>
  );
}

export default Home;