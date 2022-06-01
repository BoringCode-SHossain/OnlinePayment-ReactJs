import React from 'react'
import Navbar from "./navbar";
import Header from './Header';
import HowItWorks from './HowItWorks';
import Aboutus from "./components/Aboutus";
import Services from "./components/Services"
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <HowItWorks />
    <Aboutus />
    <Services />
    <Contact />
    </>
  ); 
};

export default App;