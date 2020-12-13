import React from 'react';
import '../css/about.css';
import Css from '../images/css3-original-wordmark.svg';
import Java from '../images/java-plain-wordmark.svg';
import Html from '../images/html5-original-wordmark.svg';
import Javascript from '../images/javascript-original.svg';
import Bootstrap from '../images/bootstrap-plain-wordmark.svg';
import Reacticon from '../images/react.png';
import MySQL from '../images/mysql-original-wordmark.svg';
import Git from '../images/git-original-wordmark.svg';
import Github from '../images/github-original-wordmark.svg';
import Jquery from '../images/jquery-original-wordmark.svg';


export default function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className="about">
        <div data-aos='zoom-in-up' className="">
            <p>Hi, I'm Kristina.</p>
          <p>I am a technically curious and driven entry-level engineer. Wiling to contribute to a meaningful/challenging product. Looking to apply existing skills and learn new ones in a fast-paced, high-learning collaborative environment.</p>
          <p>I was doing a lot of different things prior to embarquing on my journey to become a professional developer. I worked as a tour gouide, an English teacher, a journalist, an online events manager...You name it.

I have always loved languages, however. And one day I realized that programming languages are languages, too!</p>
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
          <img data-aos='zoom-out-up' src={Bootstrap} alt="bootstrap" />
          <img data-aos='zoom-out-up' src={Jquery} alt="jQuery" />
          <img data-aos='zoom-out-up' src={Git} alt="git" />
          <img data-aos='zoom-out-up' src={Github} alt="github" />
        </div>
      </div>
      <div className="parallax"></div>
    </div>
  )
}
