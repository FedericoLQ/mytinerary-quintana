
import './App.css';
import Home from './pages/Home.js'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cities from './pages/Cities';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import CityPageSinProps from './pages/City'
import { withRouter } from './utils/withRouter'  
const City = withRouter(CityPageSinProps)


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cities" element={<Cities/>}></Route>
      <Route path="/City/:id" element={<City/>}></Route>  
      <Route path="/SignIn" element={<SignIn/>}></Route> 
      <Route path="/SignUp" element={<SignUp/>}></Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
