import React from 'react';
import '../css/hero.css';
import Me from '../images/me.jpeg';

export default function Hero() {
  return (
    <div id='hero'>
      <div className="hero-img">
        <img src={Me} alt="my photo" />
        <h1 data-aos='fade-up' data-aos-delay="1500" data-aos-duration='1000'>Kristina Zakharova</h1>
        <h2 data-aos='fade-up' data-aos-delay="2000" data-aos-duration='1500'>Junior Full-Stack Developer</h2>
      </div>
    </div>
  )
}
