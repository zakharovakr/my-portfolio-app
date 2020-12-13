import React from 'react';
import '../css/contact.css';
import Github from '../images/github.png';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Resume from '../images/resume.png';


export default function Footer() {
  return (
    <div>
        <div data-aos='fade-down' className="contact">
          <div className="channel">
            <a target='_blank' href="https://github.com/zakharovakr">
              <img src={Github} alt="github" />
              <h4>Github</h4>
            </a>
          </div>
          <div className="channel">
            <a target='_blank' href="https://www.linkedin.com/in/kristina-zakharova-7b58065a/">
              <img src={Linkedin} alt="linkedin" />
              <h4>LinkedIn</h4>
            </a>
          </div>
          <div className="channel">
            <a href="#contact">
              <img src={Email} alt="email" />
              <h4>zakharova.kr@gmail.com</h4>
            </a>
          </div>
          <div className="channel">
            <a target='_blank' href="https://www.linkedin.com/in/kristina-zakharova-7b58065a/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAyT7PkBUnWvrRksozog8u6U6A3xmcWv9ho,1607837438668)/">
              <img src={Resume} alt="CV" />
              <h4>CV</h4>
            </a>
          </div>
        </div>
    </div>
  )
}
