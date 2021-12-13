import React from "react";
import HeroVideo from "../components/Hero"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider"

class Home extends React.Component {
  render() {
    return (
      <div>        
        <NavBar/>
        
        <HeroVideo/>
        <SimpleSlider/>
        
        <Footer/>           
      </div>
    );
  }
}

export default Home;
