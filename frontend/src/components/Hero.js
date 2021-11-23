import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container } from "react-bootstrap";
import MyLogo from "../assets/MyIcon.png"
const Hero = () => {
  return (
    <Container>
    <div fluid className="container-hero">
      <video className="video" src={HeroVideo} autoPlay loop muted />
      <div className="container-fluid hero">
      <img src={MyLogo} alt="Logo Img" className="myLogo" />  
      <h1 className="text-center text-white texth1">MyTinerary</h1>
      <h2 className="mt-5 text-white text-center">Find your perfect trip, designed by insiders who knows and <span>Love</span> their cities!</h2>
      <div className="mt-5">
        <button className="button button--bestia mt-5">
          <div className="button__bg"></div>
          <span className="fs-3">Search Cities</span>
        </button>
      </div>
      </div>
    </div>
    </Container>
  );
};

export default Hero;
