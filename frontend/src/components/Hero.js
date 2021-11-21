import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container } from "react-bootstrap";
const Hero = () => {
  return (
    <Container>
    <div fluid className="container-hero">
      <video className="video" src={HeroVideo} autoPlay loop muted />
      <div className="container-fluid">
      <h1 className="text-center text-white texth1">MyTinerary</h1>
      <h2 className="mt-5 text-white text-center">Find your perfect trip, designed by insiders who knows and love their cities!</h2>
      </div>
    </div>
    </Container>
  );
};

export default Hero;
