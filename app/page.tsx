import React from "react";
import Header from "./components/header";
import Hero from "./home/hero";
import TrustedPartner from "./home/steps";
import MovingLogos from "./home/MovingLogos";
import ServicesSection from "./home/services";



export default function Home(){
  return(
    <>
<Header/> 
<Hero/>   
<MovingLogos/>

<TrustedPartner/> 

<ServicesSection/>
    </>
  )
}

