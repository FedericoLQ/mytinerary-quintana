
import './App.css';
import Home from './pages/Home.js'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
     

     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
