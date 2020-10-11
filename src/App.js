import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";


export default function App() {
  return (
   <React.Fragment>
    <Navbar></Navbar> 
    <LandingPage></LandingPage> 
   </React.Fragment>
  );
}
