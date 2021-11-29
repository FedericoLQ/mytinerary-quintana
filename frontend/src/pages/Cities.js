import React from "react";
import CardCities from "../components/CardCities";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";


 class Cities extends React.Component {
   render() {
    
     return(
      <div>
     
      <NavBar/>
                 
      <CardCities/>
      <Footer/>  
     </div>
     )
   }
 }

export default Cities;
