import "./App.css";
import Home from "./pages/Home.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CityPageSinProps from "./pages/City";
import { withRouter } from "./utils/withRouter";
import userActions from "./redux/actions/userActions";
import { connect } from "react-redux";
import { useEffect } from "react";
const City = withRouter(CityPageSinProps);

function App(props) {
  useEffect(() => {
    async function fetchData() {
      const user = await props.isAuth();
      // user.error && 'error unauntorized'
      user.response &&
        props.addUser(
          user.response.email,
          user.response.password,
          user.response.google
        );
    }
    localStorage.getItem("token") && fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {props.user && console.log(props.user)}
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/City/:id" element={<City />}></Route>
        {props.user === ''  && (
          <>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
          </>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.userI,
  };
};

const mapDispatchToProps = {
  addUser: userActions.addUser,
  isAuth: userActions.isAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
