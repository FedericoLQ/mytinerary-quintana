import React from "react";
import HeroVideo from "../assets/videonubesOk.mp4";
import { Container } from "react-bootstrap";
import Form from "../components/SignUp";
import axios from "axios";
import { connect } from "react-redux";
import userAction from "../redux/actions/userActions";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Swal from 'sweetalert2'

class SignUp extends React.Component {
  state = {
    countries: [],
    errors:{}
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


  newUser = async (user) => {
    const userToats = await this.props.addUser(user);  
 
    if(userToats.success){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'The user registered successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      const msgError = {}
      if (userToats.issues.error === 'The email is already in use') return( Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'The email is already in use',
        showConfirmButton: false,
        timer: 1500
      }))
      userToats.issues.validate.forEach(error=>{
        	let key = error.context.key
          msgError[key] = error.message
      })

      this.setState({
        errors: msgError
      })

      console.log(this.state.errors);


    }
    
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <div fluid className="container-hero">
            <video className="video" src={HeroVideo} autoPlay loop muted />
            {/* <div className="container-fluid hero"> */}

            <Form errors={this.state.errors} country={this.state.countries} newU={this.newUser} />

            {/* </div> */}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUser: userAction.addUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
