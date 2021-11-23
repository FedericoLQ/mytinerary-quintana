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
        <div>
            <footer >
      <div>
        <div class=" container-body">
          <div class="colum2">
            
            <div class="d-flex redes">
              <div class="iconos">
                <div class="roww">                
                  <Link to="/"><img src={Facebook} alt="Logo Facebook"/></Link>
                  <Link to="/"><img src={Instagram} alt="Logo Instagram"/></Link>
                  <Link to="/"><img src={Youtube} alt="Logo Youtube"/></Link>
                  <Link to="/"><img src={Twitter} alt="Logo Twitter"/></Link>
                </div>
              </div>
            </div>
          </div>
                    
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;