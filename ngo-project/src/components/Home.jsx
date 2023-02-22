import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <video src='/videos/video-1.mp4'
        autoPlay loop muted />
      <h1>BE A HERO</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default Home;