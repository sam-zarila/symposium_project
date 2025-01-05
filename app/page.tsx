import React from "react";
import Header from "./components/header";
import Hero from "./home/hero";
import TrustedPartner from "./home/steps";
import Services from "./home/services";
import MovingLogos from "./home/MovingLogos";



export default function Home(){
  return(
    <>
<Header/> 
<Hero/>   
<MovingLogos/>
{/* <Services/>  */}
<TrustedPartner/> 
    </>
  )
}