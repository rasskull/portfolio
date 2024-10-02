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
      style={{ ...style, display: "block", background: "transparent", right: "20px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", left: "20px" }}
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
          width: "30px",
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
      <nav className='header py-8'>
            <div className='mx-auto container flex'>
            <div className='flex-none content-center w-10'><img src={jgLogo}></img></div>
            <div className='flex-1 content-center px-4 font-thin text-2xl'>Joey Groh</div>
            <div className='flex content-center'><button className='btn-primary' src='emailto:joey@homegrohn.com'>Contact Me</button></div>
            </div>
        </nav>
      <div>
      <Slider {...settings}>
      <div>
        <div className='carousel-slide bg-carousel-1 flex'>
          <div className='carousel-content'>
            <h1 className='carousel-heading'>The Well, by Northwell Health</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='carousel-slide bg-carousel-2 flex'>
          <div className='carousel-content'>
            <h1 className='carousel-heading'>Children's Hospital of Philadelphia</h1>
          </div>
        </div>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      </div>
    </>
  )
}

export default Root
