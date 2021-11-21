import React from "react";
import HeroVideo from "../components/Hero"
import NavBar from "../components/NavBar";
import SimpleSlider from "../components/SimpleSlider"

class Home extends React.Component {
  render() {
    return (
      <div>        
        <NavBar />
        <HeroVideo/>
        <SimpleSlider/>
           
      </div>
    );
  }
}

export default Home;
