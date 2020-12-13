import React from 'react';
import '../css/about.css';
import Css from '../images/css.png';
import Java from '../images/java.png';
import Html from '../images/html.png';
import Javascript from '../images/javascript.png';
import Reacticon from '../images/react.png';
import MySQL from '../images/mysql.png';


export default function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className="about">
        <div data-aos='zoom-in-up' className="">
          <p>I am a technically curious and driven entry-level engineer. Seeking a collaborative team and to contribute to a meaningful / challenging product. Looking to apply existing skills and learn new ones in a fast-paced, high-learning environment.</p>
          <p>Multilingual: speak English, Russian, Spanish, Portuguese and German fluently.</p>
        </div>
      </div>
      <div className="skills">
        <h3>Technical Skills</h3>
        <div className="skill-icons">
          <img data-aos='zoom-out-up' src={Java} alt="Java" /> 
          <img data-aos='zoom-out-up' src={MySQL} alt="MySQL" /> 
          <img data-aos='zoom-out-up' src={Javascript} alt="javascript" />
          <img data-aos='zoom-out-up' src={Reacticon} alt="react" />
          <img data-aos='zoom-out-up' src={Html} alt="html" />
          <img data-aos='zoom-out-up' src={Css} alt="css" />
        </div>
      </div>
      <div className="parallax"></div>
    </div>
  )
}
