
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import  useOnlineStatus  from '../utils/useOnlineStatus';

const Header = () => {

const [stauts, setStatus] = useState("Login");
console.log("Header rendered");

  return(
    <div className="flex justify-between bg-blue-200 m-2 font-bold text-lg">
      <div className="logo-container">
        <a href="/">  <img className='w-32 rounded-full' src= {`${LOGO_URL}`} alt="no internet" /> </a>
      </div>
  
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
            <li className="px-4">Online Status : {useOnlineStatus ? "🟢" : "❌" }</li>
            <li className="px-4"> <Link to="/"> Home </Link></li>
            <li className="px-4"> <Link to="/contact"> Contact Us </Link></li>
            <li className="px-4"> <Link to="/about"> About Us</Link></li>
            <li className="px-4"> <Link to="/grocery"> Grocery </Link></li>
            <li className="px-4"> <Link to="/cart"> Cart </Link></li>
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