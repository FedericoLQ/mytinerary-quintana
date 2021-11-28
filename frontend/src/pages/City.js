import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
      
    console.log(this.props.params);
    axios
      .get(`http://localhost:4000/api/cities/`+ this.props.params.id)

      .then((res) => this.setState({city:res.data.response }));
    
  }
    componentDidUpdate(){
        console.log(this.state);
    }
  render() {
    return (
      <div>
          
          {this.state.city &&  <div key={this.state.city.name}>
          <h2 className="text-white text-center">{this.state.city.name}</h2>
            <img src={`${this.state.city.src}`} alt="Img City" />
                <h3 className="text-center text-white">Under Construction</h3>
            <div className="d-flex justify-content-center ">
            <Link className="text-center text-black p-2 border border-dark bottonBack m-2 " to={'/cities'}>Back to the Cities</Link>
            </div> 
          </div>}
               
      </div>
    );
  }
}

export default City;
