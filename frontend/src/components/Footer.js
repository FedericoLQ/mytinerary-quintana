import React from 'react'
import {Link} from "react-router-dom"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Youtube from "../assets/youtubeee.png"
import Twitter from "../assets/Twitter_Logo.png"
import Phone from "../assets/smartphone.png"
import Contact from "../assets/contact.png"


const Footer = () => {
    return (
       
            <footer >                   
            <div className="m-5 container-footer">
            <div className="footL">
                 <Link as={Link} to="/" className="active footLinks">Home</Link>
                 <Link eventKey={2} as={Link} to="/Cities" className="footLinks">Cities</Link>
           
                </div>
                <div className="imgFoot">                
                  <Link to="/"><img src={Facebook} alt="Logo Facebook"/></Link>
                  <Link to="/"><img src={Instagram} alt="Logo Instagram"/></Link>
                  <Link to="/"><img src={Youtube} alt="Logo Youtube"/></Link>
                  <Link to="/"><img src={Twitter} alt="Logo Twitter"/></Link>
                </div>
               <h4 className="mt-4 text-center text-white">MyTinerary Proyect 2021 - All Rights Reserved</h4>
              
            </div>             
    </footer>
       
    )
}

export default Footer;