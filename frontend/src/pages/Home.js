import React from "react";
import HeroVideo from "../components/Hero"
import NavBar from "../components/NavBar";
import SimpleSlider from "../components/SimpleSlider"
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>        
        <NavBar />
        <HeroVideo/>
        <SimpleSlider/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Footer/>           
      </div>
    );
  }
}

export default Home;
