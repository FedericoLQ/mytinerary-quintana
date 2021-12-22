import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Card, Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BasicModal from "../components/Modal";
import Comment from '../components/Comment'
class City extends React.Component {
  componentDidMount() {
    this.props.getCity(this.props.params.id);
    this.props.getItinerary(this.props.params.id);
  }
  likeHandler = async (idI) => {
    const res = await this.props.likeI(idI);
    res.error && alert(res.error);
  };
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <div className="flex-grow-1">
          {this.props.city && ( //Cuando encuentra el valor lo renderiza
            <div key={this.props.city.name}>
              {/* <h2 className="text-white text-center">{this.state.city.name}</h2>
            <img src={`${this.state.city.src}`} alt="Img City" />             */}
              <Card className="m-4 border border-2 border-white bg-dark text-white  text-center">
                <Card.Body>
                  <Card.Title className="cardCity fs-4">
                    {this.props.city.name}
                  </Card.Title>
                </Card.Body>
                <Card.Img
                  className="cardImg rounded-0 border border-2 border-white"
                  variant="top"
                  src={`${this.props.city.src}`}
                  alt="Img Card City"
                />
              </Card>

              <div className="CardContainerFlex">
                <div className="CityCardContainer">
                  {/* {this.props.itinerary.length > 0  ? this.props.itinerary.map(itinerary => { */}
                  {this.props.itinerary &&
                    this.props.itinerary.map((itinerary) => {
                      return (
                        <div key="city" className="CardPositionRelative mb-5">
                          <div className="CardPositionAbsoluteBack">
                            <img src={itinerary.imgCity} alt="Img City"></img>
                          </div>
                          <div className="CardPositionAbsoluteWhite"></div>
                          <div className="CardPositionFlex">
                            <div className="CardProfilImage">
                              <img src={itinerary.imgUser} alt="Img User"></img>
                            </div>
                            <div className="CardTextArray">
                              <h1>{itinerary.userName}</h1>
                              <div className="ContenedorTextoTotal">
                                <p className="Strong">
                                  Description: {itinerary.description}
                                </p>
                                <p className="Strong">
                                  Duration: {"⏱".repeat(itinerary.duration)}
                                </p>
                                <p className="Strong">
                                  Price: {"💸".repeat(itinerary.price)}
                                </p>
                                <div className="DisplayIcons">
                                  <button className="bLikes"
                                    onClick={() =>
                                      this.likeHandler(itinerary._id)
                                    }
                                  >
                                    {localStorage.getItem('token') ? (itinerary.likes.includes(this.props.idU) ? <FavoriteIcon sx={{ fontSize: 30 }}/> : <FavoriteBorderIcon sx={{ fontSize: 30 }}/>): <FavoriteBorderIcon sx={{ fontSize: 30 }} />}
                                    
                                  </button>{itinerary.likes.length}
                                  <p>{itinerary.hashtag}</p>
                                </div>
                              </div>
                              {/* <div className="IconsTextCard">
                          <BasicModal />                          
                        </div> */}
                              <div className="mt-4">
                                <Accordion defaultActiveKey="1">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header className="acorIt">
                                      View More
                                    </Accordion.Header>
                                    <Accordion.Body>
                                     <Comment itineraryID={itinerary._id}/>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* : <p>No hay intinerarios</p>} */}
                </div>
              </div>

              <div className="underBotton">
                <div className="d-flex justify-content-center ">
                  <Link
                    className="text-center text-black p-2 border border-dark bottonBack m-2 "
                    to={"/cities"}
                  >
                    Back to Cities
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
    itinerary: state.citiesReducer.itinerary,
    idU: state.userReducer.userId,
  };
};

const mapDispatchToProps = {
  getCity: citiesActions.getCity,
  getItinerary: citiesActions.getItineraries,
  likeI: citiesActions.like,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
