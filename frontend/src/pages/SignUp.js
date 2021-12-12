import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "../components/SignUp";
import axios from "axios";
import { connect } from "react-redux";
import userAction from "../redux/actions/userActions";


class SignUp extends React.Component {
  state = {
    countries: [],
  };
  componentDidMount() { 
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  newUser = (user) => {
    
    this.props.addUser(user);
  }

  render() {
    return (
      <Container>
        <div fluid className="container-hero">
          <video className="video" src={HeroVideo} autoPlay loop muted />
          {/* <div className="container-fluid hero"> */}
         
            <Form country={this.state.countries} newU={this.newUser}/>
       
          {/* </div> */}
        </div>
      </Container>
    );
  }
}


const mapDispatchToProps = {
  addUser: userAction.addUser  
  
};

export default connect(null, mapDispatchToProps)(SignUp);
