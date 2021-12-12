import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container } from "react-bootstrap";
import SignInU from "../components/SignIn";
import { connect } from "react-redux";
import userAction from "../redux/actions/userActions";

class SignIn extends React.Component {

  signIn = async(email, password) => {
    console.log(email, password);
   const userName = await this.props.signIn(email, password);
   console.log(userName);
  }

  render() {
    return (
      <Container>
        <div fluid className="container-hero">
          <video className="video" src={HeroVideo} autoPlay loop muted />
        <SignInU signIn={this.signIn}/>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  signIn: userAction.signIn
  
};

export default connect(null, mapDispatchToProps)(SignIn);

