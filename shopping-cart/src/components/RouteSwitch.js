import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import Products from "./products";
import Contact from "./contact";
import NavBar from './navBar';

const RouteSwitch = (props) => {
  return (
    <HashRouter basename='/' >
      <NavBar number = {props.number}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products cart={props.cart} setCart={props.setCart}/>} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;