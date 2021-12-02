import React from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";


class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
    console.log(this.props.params);
    axios
      .get(`http://localhost:4000/api/cities/` + this.props.params.id)

      .then((res) => this.setState({ city: res.data.response }));
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      
      <div className="d-flex flex-column">
        <NavBar/>
        <div className="flex-grow-1">
        {this.state.city && ( //Cuando encuentra el valor lo renderiza 
          <div key={this.state.city.name}>
            {/* <h2 className="text-white text-center">{this.state.city.name}</h2>
            <img src={`${this.state.city.src}`} alt="Img City" />             */}
            <Card className="m-4 border border-2 border-white bg-dark text-white  text-center">
                <Card.Body>
                  <Card.Title className="cardCity fs-4">{this.state.city.name}</Card.Title>
                </Card.Body>
                <Card.Img
                  className="cardImg rounded-0 border border-2 border-white"
                  variant="top"
                  src={`${this.state.city.src}`} alt="Img Card City"/>
              </Card>   
              <div className="underBotton">                                 
            <h3 className="m-2 inSearch text-center text-danger bg-warning">Under Construction</h3>
            <div className="d-flex justify-content-center ">
              <Link
                className="text-center text-black p-2 border border-dark bottonBack m-2 "
                to={"/cities"}
              >
                Back to Cities
              </Link>
              </div>
            </div>
          </div>
        )}
        </div>
        <Footer/>  
      </div>
    );
  }
}

export default City;
