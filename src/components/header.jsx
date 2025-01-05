
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {

const [stauts, setStatus] = useState("Login");
console.log("Header rendered");

  return(
    <div className="header">
      <div className="logo-container">
        <a href="">  <img className="logo" src= {`${LOGO_URL}`} alt="no internet" /> </a>
      </div>
  
      <div className="nav-bar">
        <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/contact"> Contact Us </Link></li>
            <li> <Link to="/about"> About Us</Link></li>
            <li> <Link to="/cart"> Cart </Link></li>
            <button className="login" onClick={() => {
              console.log("status button clicked");
              stauts === "Login" ? setStatus("Logout"): setStatus("Login"); ;  
            }}>{stauts}</button>
        </ul>
      </div>
      
    </div>
  )
};

  export default Header;