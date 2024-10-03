import { useState } from 'react';
import React from 'react';
import Slider from 'react-slick';

// file imports
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jgLogo from '/jg-logo-reverse.svg';
//import Nav from './routes/nav.jsx';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        background: "transparent", 
        right: "6px", 
        width: "40px", 
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        background: "transparent", 
        left: "20px",
        width: "40px", 
        height: "40px"
      }}
      onClick={onClick}
    />
  );
}

function Root() {

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          padding: "10px"
        }}
      >
        <ul style={{ margin: "32px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "25px",
          color: "white",
          border: "1px white solid",
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <>
      <nav className='header'>
            <div className='mx-auto container flex'>
            <div className='logo'><img src={jgLogo}></img></div>
            <div className='logo-text'>Joey Groh</div>
            <div className='flex content-center'><button className='btn-primary' src='emailto:joey@homegrohn.com'>Contact Me</button></div>
            </div>
        </nav>
      <div>
      <Slider {...settings}>
        <div>
          <div className='carousel-slide carousel-chop'>
            <div className='carousel-content'>
              <h1 className='carousel-heading'>Children's Hospital of Philadelphia</h1>
              <div className='carousel-body'>
              My role on this project was to reimagine the visual brand, and design a comprehensive and robust design system to be used across the digital experience. Since launch, this new site has helped thousands of people find care and continue their wellness journey. 
              </div>
              <div><a href='https://www.chop.edu/' className='carousel-link' target='_blank'>View Site</a></div>
            </div>
          </div>
        </div>
        <div>
          <div className='carousel-slide carousel-well'>
            <div className='carousel-content'>
              <h1 className='carousel-heading'>The Well, by Northwell Health</h1>
              <div className='carousel-body'>
              My role as a UI Designer on this project was to craft a clean, intuitive interface to enhance user engagement and reflect the brand’s focus on holistic well-being. In addition to design, I was part of the development team who built a living design system in the browser. 
              </div>
              <div><a href='https://thewell.northwell.edu/' className='carousel-link' target='_blank'>View Site</a></div>
            </div>
          </div>
        </div>
        <div>
          <div className='carousel-slide carousel-aps'>
            <div className='carousel-content'>
              <h1 className='carousel-heading'>American Physical Society</h1>
              <div className='carousel-body'>
              My role as a UI Designer on this project was to design an interface to support their mission of advancing physics within a global community. The design prioritized usability and a modern aesthetic to serve APS’s 50,000 members across academia, industry, and national labs.
              </div>
              <div><a href='https://www.aps.org/' className='carousel-link' target='_blank'>View Site</a></div>
            </div>
          </div>
        </div>
      </Slider>
      </div>
      <div className='narrative-section'>
        <div className='narrative-body'>
          Hello! I'm a creative designer with a development background (this site is built with React), blending visual brand design and technical know-how to create user-centered experiences that are both beautiful and intuitive. I love turning ideas into thoughtful digital solutions that connect with people.
        </div>
        <div className='narrative-cta'>
          <a href='emailto:joey@homegrohn.com' className='primary-link'>Let's connect!</a>
        </div>
      </div>
    </>
  )
}

export default Root
