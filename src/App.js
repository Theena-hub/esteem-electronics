// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from "./home";
import About from "./about";
import ContactUs from "./contact";
import Linecard from "./linecard";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Industry from './industry';
import Service from './service';
import PurchaseTermsandCondition from './purchase_tc';
import SalesTermsandCondition from './sales_tc';
import InvoiceTermsandCondition from './invoice_tc';
import Examples from './Examples';
import Preloader from './Preloader';


const App = () => {
   const [showPreloader, setShowPreloader] = useState(true);

   useEffect(() => {
      // Simulate a delay (e.g., loading data or resources)
      const delay = setTimeout(() => {
         setShowPreloader(false); // Hide the preloader after the delay
      }, 2000); // Adjust the delay time as needed

      return () => clearTimeout(delay);
   }, []);
   return (
      <div className="App">
         {showPreloader && <Preloader />}
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/linecard" element={<Linecard />} />
            <Route exact path="/industry" element={<Industry />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/purchase_tc" element={<PurchaseTermsandCondition />} />
            <Route exact path="/sales_tc" element={<SalesTermsandCondition />} />
            <Route exact path="/invoice_tc" element={<InvoiceTermsandCondition />} />
            <Route exact path="/Examples" element={<Examples />} />
            <Route exact path="/Preloader" element={<Preloader />} />
         </Routes>
      </div>
   );
};

export default App;

