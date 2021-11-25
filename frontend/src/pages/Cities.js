import React from "react";
import CardCities from "../components/CardCities";
import NavBar from "../components/NavBar"



 class Cities extends React.Component {
   render() {
    
     return(
      <div>
      <NavBar/>  
      <h1 className="text-white text-center">Ciudades</h1>   
      <CardCities/>
     </div>
     )
   }
 }

export default Cities;
