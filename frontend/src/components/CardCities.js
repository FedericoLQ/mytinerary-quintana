import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const CardCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:4000/api/cities")
    // .then((res) => res.json())
    // .then((data) => setCities(data.response))
    // .catch((err) => console.error(err.message));
    axios.get('http://localhost:4000/api/cities')
      .then((res) => setCities(res.data.response))
  }, []);
  console.log(cities);
  return (
    <div>
      {cities.map((city) => (
        <>
          
          <h2 className="text-white text-center">{city.name}</h2>           
          <Link to={`/city/${city.id}`}><img src={city.src}/></Link>

          </>
      ))}
        </div>


      );
};

      export default CardCities;
