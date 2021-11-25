import React, { useEffect, useState } from "react";

const CardCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((err) => console.error(err.message));
  }, []);
  console.log(cities);
  return (
    <div>
      {cities.map((city) => (
        <h2 className="text-white text-center">
          {" "}
          {city.name} - <img src={city.src}/>
        </h2>
      ))}
    </div>
  );
};

export default CardCities;
