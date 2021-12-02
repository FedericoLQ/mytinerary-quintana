import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Filter from "./Filter";


const CardCities = ({getCities, cities, filter, auxiliary}) => {

  useEffect(() => {
    getCities();    
  },[getCities]);
     
 
  return (
    <div>
      <h1 className="text-white text-center">Cities</h1>
      <div className="inputSearch">
       <Filter cities={auxiliary} filter={filter}/> 
      </div>
      <Container>
        
        {cities && cities.map((city) => (
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
        ) )
        // : <h2 className="text-center text-info m-2">Upss... we can't find what you are looking for</h2>
      }
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliary: state.citiesReducer.auxiliary,
  };
}
const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  filter: citiesActions.filter,
}
 export default connect(mapStateToProps, mapDispatchToProps) (CardCities);

// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Filter from './Filter'
// import citiesActions from '../redux/actions/citiesActions'
// import { connect } from 'react-redux'


// const CardCities = ({ rdxfilter, rdxauxiliar, rdxcities, rdxrequest }) => {

//     useEffect(() => {
//         rdxrequest()
//     }, [rdxrequest])
//     return (
//         <div>
//             <Filter filter={rdxfilter} cities={rdxauxiliar} />
//             {rdxcities && rdxcities.map(element => (
//                 // <Link key={element._id} to={/city/${element.name}}>
//                     <h2>{element.name}</h2>
//                 // </Link>
//             ))}
//         </div>
//     )
// }

// const mapStateToProps = ({ citiesReducer }) => {

//     return {
//         rdxcities: citiesReducer.cities,
//         rdxauxiliar: citiesReducer.auxiliary
//     }
// }

// const mapDispatchToProps = {
//     rdxrequest: citiesActions.getCities,
//     rdxfilter: citiesActions.filter
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CardCities)

