import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Create this CSS file for styling
import logoRound from "./assets/img/logoRound.svg";

function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., loading data or resources)
    const delay = setTimeout(() => {
      setShow(false); // Hide the preloader after the delay
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`preloader ${show ? 'active' : ''}`}>
      <div className="logo">
        <img src={logoRound} alt="esteem" />
      </div>
    </div>
  );
}

export default Preloader;
