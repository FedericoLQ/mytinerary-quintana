import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Image from "./Img";
import { Card } from "react-bootstrap";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      slidesToShow: 1,
      rows: 2,
      centerPadding: "5px",
      slidesPerRow: 2,
      infinite: true,
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 2,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 2,
            dots: false,
            arrows: false,
          },
        },
      ],
    };
    return (
      <Container fluid>
        <div className="carrusell">
          <Container className="containerCarrousel">
            <h2 className="text-center p-2 border border-5 border-white pb-2 mt-3 rounded-pill text-white">Fulfill Your Traveling <span>Dreams</span></h2>
            <Slider {...settings}>
              {Image.map((img, index) => {
                return (
                  <div key={index}>
                    <Card className="m-2 border border-2 border-white bg-dark text-white  text-center">
                    <Card.Body>
                        <Card.Title className="fs-4">{`${img.name}`}</Card.Title>
                      </Card.Body>
                      <Card.Img
                        className="cardImg rounded-0 border border-2 border-white"
                        variant="top"
                        src={`${img.src}`}
                      />
                     
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
      </Container>
    );
  }
}
