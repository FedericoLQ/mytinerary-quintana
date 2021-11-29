import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const CardCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(cities);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response));
  }, []);
  useEffect(() => {
    setLoading(cities);
  }, [cities]);
  const filter = useRef();
  const filtering = () => {
    let value = filter.current.value.trim().toLowerCase();

    let filtered = cities.filter((city) => {
      return city.name.toLowerCase().startsWith(value);
    });
    console.log(value);
    return setLoading(filtered);
  };
  console.log(cities);
  return (
    <div>
      <h1 className="text-white text-center">Cities</h1>
      <div className="inputSearch">
        <input className="text-center inSearch"
          type="text"
          ref={filter}
          placeholder=">>Search Your Destiny<<"
          onChange={filtering}
        />
      </div>
      <Container>
        
        {loading.length > 0 ? loading.map((city) => (
          <>
            <Link className="cardCity" to={`/city/${city._id}`}>
              <Card className="m-2 border border-2 border-white bg-dark text-white  text-center">
                <Card.Body>
                  <Card.Title className="cardCity fs-4">{`${city.name}`}</Card.Title>
                </Card.Body>
                <Card.Img
                  className="cardImg rounded-0 border border-2 border-white"
                  variant="top"
                  src={`${city.src}`}
                />
              </Card>
            </Link>
          </>
        ) ): <h2 className="text-center text-info m-2">Upss... we can't find what you are looking for</h2>}
      </Container>
    </div>
  );
};

export default CardCities;
