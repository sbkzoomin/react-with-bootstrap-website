import React from "react";
import "./style.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import CountryCards from "./Components/CountryCards";
import InfoBox from "./Components/InfoBox";
import Contact from "./Components/Contact";


export default function App() {
  return (
   <React.Fragment>
    <Navbar></Navbar> 
    <LandingPage></LandingPage>
    <CountryCards></CountryCards>
    <InfoBox></InfoBox>
    <Contact></Contact>
   </React.Fragment>
  );
}
