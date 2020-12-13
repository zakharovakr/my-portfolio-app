import React from 'react';
import '../css/projects.css';
import Yogablog from '../images/yogablog.png';
import Superhero from '../images/superhero.png';
import Flooring from '../images/flooring.jpg';
import Vending from '../images/vending.jpg';
import Coffeeshop from '../images/Coffeeshop.png';


export default function Projects() {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        <a data-aos='fade-right' className='project' target='_blank' href="https://yoga-blog.herokuapp.com/">
          <div className="overlay">
          </div>
          <img src={Yogablog} alt="Yoga Blog" />
          <h3>Yoga Blog</h3>
          <hr></hr>
          <p>Blog Engine and CMS</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Yoga Blog</h3>
        <a data-aos='fade-left' className='project' target='_blank' href="https://github.com/zakharovakr/DDWAM4A-SuperheroSightings">
          <div className="overlay">
          </div>
          <img src={Superhero} alt="Superhero Sightings" />
          <h3>Superhero Sightings</h3>
          <hr></hr>
          <p>Superhero Tracking Website</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Superhero Sightings</h3>
        <a data-aos='fade-right' className='project' target='_blank' href="https://github.com/zakharovakr/javaSG-classwork/tree/master/OOP-FlooringMastery">
          <div className='overlay'>
          </div>
          <img src={Flooring} alt="flooring program" />
          <h3>Flooring Program</h3>
          <hr></hr>
          <p>A Java console application that can read and write flooring orders</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Flooring Program</h3>
        <a data-aos='fade-left' className='project' target='_blank' href="https://github.com/zakharovakr/javaSG-classwork/tree/master/OOP-M3AssessmentVendingMachine/VendingMachine">
          <div className="overlay">
          </div>
          <img src={Vending} alt="vending machine" />
          <h3>Vending Machine</h3>
          <hr></hr>
          <p>A Java console app that simulates a vending machine</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Vending Machine</h3>

        <a data-aos='fade-right' className='project' target='_blank' href="https://zakharovakr.github.io/static-landing/restaurantJS/index.html">
          <div className="overlay">
          </div>
          <img src={Coffeeshop} alt="Calarca Coffee Shop" />
          <h3>Calarca Coffee Shop</h3>
          <hr></hr>
          <p>A simple HTML, CSS and JS website for a made up coffee shop</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Vending Machine</h3>
      </div>
      <div className="parallax"></div>
    </div >
  )
}
