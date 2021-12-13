import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container } from "react-bootstrap";
import SignInU from "../components/SignIn";
import { connect } from "react-redux";
import userAction from "../redux/actions/userActions";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class SignIn extends React.Component {

  signIn = async(email, password,google) => {
    // console.log(email, password);
   const userName = await this.props.signIn(email, password,google);
   console.log(userName);
  }

  render() {
    return (
      <div>
        <NavBar/>
      <Container>
        
        <div fluid className="container-hero">
          <video className="video" src={HeroVideo} autoPlay loop muted />
        <SignInU signIn={this.signIn}/>
        </div>
        
      </Container>
      <Footer/>   
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn: userAction.signIn
  
};

export default connect(null, mapDispatchToProps)(SignIn);

