import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import dotMarkLeft from "./assets/img/dotMarkLeft.svg";
import dotMarkRight from "./assets/img/dotMarkRight.svg";
import leftBg from './assets/img/leftBg.svg';
import lineBg from './assets/img/bgLines.svg';
import instagramBlack from './assets/img/instagramBlack.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import logoRound from "./assets/img/logoRound.svg";

class Linecard extends React.Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        return (
            <>
                {/* navigation start */}
                <Navigation />
                {/* navigation end */}
                {/* hero section - start */}
                <div className="container-fluid aboutUsHero" >
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-8 col-md-8 left">
                                <div className="inner">
                                    <h1 className="heroHeading primaryColorTwo fw-400">
                                        <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home </NavLink> - Products & Linecard</h1>
                                    <h1 className="heroSubHeading blackColor fw-700">Products & Linecard</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 right" >
                                <div className="inner text-left">
                                    <img className="logoRound" src={logoRound} alt="esteem" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroSM">
                        <div>
                            <a href="https://www.facebook.com/people/Esteem-Microelectronics-Pte-Ltd/100087643544407/" target="_blank"><img src={fbBlack} alt='esteem' /></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/esteem_sg/" target="_blank"><img src={instagramBlack} alt='esteem' /></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Festeempte" target="_blank"><img src={twitterBlack} alt='esteem' /></a>
                        </div>
                        <h1 className="flwTxt" style={{ transform: 'translate(rotate(90%))' }}>Follow us</h1>
                    </div>
                </div>
                {/* hero section - end */}
                {/* linecard - section One */}
                <div className="container linecardSecOne">
                    <div className="card">
                        {/* <img className="quote left" src={leftQuote} alt='esteem' /> */}
                        <p className="titleFive text-center black fw-400">Esteem offers a complete range of Active, Passive and Electromechanical components from the world’s top manufacturers. Our expertise is supplying complex, highly configurable, low-to-medium volume industrial electronic components across a range of markets.</p>
                        {/* <img className="quote right text-right" src={rightQuote} alt='esteem' /> */}
                    </div>
                </div>
                {/* linecard - section Two - End*/}
                {/* linecard - section Three - Start */}
                <div className="container-fluid linecardSecTwo">
                    <img className="dotMark left" src={dotMarkLeft} alt='esteem' />
                    <img className="dotMark right" src={dotMarkRight} alt='esteem' />
                    <div className="container">
                        <h1 className="line titleTwo fw-600 primaryColor"><span>Products</span></h1>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Amplifier</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Capacitors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Circuit Production</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Connectors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Crystal Oscillators</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Diodes</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Displays (LCD / TFT)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>LEDs</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Memory & Storage</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Microcontrollers</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Microprocessors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Power Supplies</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Programmable Device</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Relays</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Encoder</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Filters</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>FPGAs</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Fuses</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Heat Shrink</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Inductors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Integrated Circuits</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Resistors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Sensors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Switches</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Thermistors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Transceivers</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Transistors</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Voltage Regulators</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="leftBg" src={leftBg} alt='esteem' />
                    <div className="container mt-5">
                        <h1 className="line titleTwo fw-600 primaryColor"><span>Linecard</span></h1>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>3M</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Aaeon</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Aavid Thermalloy</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Abracon</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Adafruit</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ADDC</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ADLINK</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Advanced Interconnect</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Advantech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Aeroflex Metelics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AIC</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Aimtec</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AIS</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Allegro Microsystems</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Alliance Memory</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ALPS</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Altera</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AMD</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Amphenol</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Ampleon</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Analog Devices</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Anaren</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Applied Micro</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>APPNearMe</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Aras Power Tech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ARM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Artesyn Embedded Tech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ATP Electronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AU Optronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AVX</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Axiomtek</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>AZ Displays</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>BCM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>BEL</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Blue Pearl Software</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Boundary Devices</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Bourns</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Broadcom</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Brocade</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>C&K</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>CEL</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>CAO Group Inc</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Carling Technologies</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Chelsio Comm.</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Chenbro</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Cirrus Logic</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Conesys</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Congatec</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Cooler Master</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Cooljag</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Cree</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Critical Link</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Crossmatch</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>CTS</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Dataram</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>DATEL</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Dawar</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Delkin Devices</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>DellEMC</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Delta Group</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Dialight</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Dialog Semiconductor</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Digi International</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Digilent</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Digital View</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Diodes Incorporated</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Discera</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Display Logic</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Eaton</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ebm-papst</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ECS International</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Edgecore Networks</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Eizo Nanoa Tech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ELO Touch Solutions</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Endicott Research</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>EPCOS(TDK)</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Ericsson</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Esterline</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Eurotech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Eutech Microelectro</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Everlight</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>eVGA</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Finisar</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>FLIR Systems</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Fox</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Foxconn Interconnect</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Fujitsu</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Gateworks</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>GE Critical Power</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Glenair</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Grayhill</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Greenconn</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Greenliant</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>GSI Technology</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>HALO Electronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Hewlett Packard</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>HGST</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>House Of Batteries</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>HP, Inc.</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>IBM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>IEI Technologies</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Infineon</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>IDT</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Intel</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>InvenSense</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Inventek Systems</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ISSI</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ITT Interconnect</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Jetway</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>KEMET</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Keysight Technologies</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Kingston Technology</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Kontron</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Kyocera</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Laird</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Lansdale Semi</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Lantronix</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>LEDiL</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Legacy Electronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Lenovo OEM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Liteon Opto</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Logic PD</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Luminus Devices</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>M/A-Com Technology</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Solutions</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Macronix</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Marvell</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Maxim Integrated</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Rochester Electronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ROHM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Samsung</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SEM</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Samtec</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SanDisk</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Schneider Electric</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SCHURTER</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Seagate Technology</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Seiko Instruments</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <ul>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Semicoa</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Semtech</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Seoul Semiconductor</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Sharp</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Silego</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Silergy</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Silicon Labs</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SiTime Corporation</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SL Power</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Sliger Designs</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Smart Modular</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Song Chuan</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Spectrah Dynamics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Stackpole</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>ST Microelectronics</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Sumida</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>SUNON</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Supermicro</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Surge Components</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Systium Technologies</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Swissbit</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Taiyo Yuden</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Taoglas</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>TDK – Lambda</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>TE Connectivity</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>TechNexion</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Tekmos</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Teledyne Relays</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Texas Instruments</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Tianma NLT</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Toshiba</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Triad Semiconductor</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Tri-Star</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Tripp Lite</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Tyan</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>UbiquiOS</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Ushio Opto Semi</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Vishay</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Vishay Precision</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>WandBoard</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>WeEn Semi</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Weidmuller</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Western Digital</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>WNC (Winstron)</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Xilinx</span></li>
                                        <li className="markPoint fw-400 blackThree" style={{ fontSize: '16px', lineHeight: '28px' }}><span style={{ marginLeft: '10px' }}>Yageo</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* linecard - section Three - End */}
                {/* lineCard - section Four - Start */}
                <div className="container-fluid abtSecFour">
                    <div className="container">
                        <div className="card" style={{ background: 'var(--primaryColorTwo)', padding: '40px' }}>
                            <img style={{ position: 'absolute', width: '100%', left: '0px', top: '0px', transform: 'translate(0%, -33%)', height: '300px' }} src={lineBg} alt='esteem' />
                            <div className="row rowGap">
                                <div className="col-lg-8 col-md-9">
                                    <h1 className="titleOne white fw-400">Looking for Quality Electronic Components ?</h1>
                                </div>
                                <div className="col-lg-4 col-md-3" style={{ margin: 'auto', textAlign: 'center' }}>
                                    <a href="mailto:info@esteemelectronics.com"><input type='button' className='btn' value='Get Quote' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* lineCard - section Four - End */}
                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default Linecard