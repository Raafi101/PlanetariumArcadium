import React from 'react';
import './AnimationPage.css';
import Navbar from './components/NavBarBack.js';
import Canvas from './components/Canvas.js';

function Animation() {
  
  return (
    <div>
      <Navbar />
      <Canvas>
        <img id='StarryNight' src='./images/blackSpace3.png' />
      </Canvas>
    </div>
  );
}

export default Animation;