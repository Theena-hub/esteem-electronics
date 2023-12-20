import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import lineBg from './assets/img/bgLines.svg';
import instagramBlack from './assets/img/instagramBlack.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import logoRound from "./assets/img/logoRound.svg";

class Industry extends React.Component {
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
                                        <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home</NavLink> - Industries Served</h1>
                                    <h1 className="heroSubHeading blackColor fw-700">Industries We Serve</h1>
                                    {/* <a href='tel:+919845679678'><input type="button" value="Contact Us" class="btn" /></a> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 right">
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
                        <p className="titleFive text-center black fw-400">Esteem is a trusted partner for several blue-chip companies with whom we have worked for many years, in most cases we operate as an extension to their own organization. We take complete ownership for design, material procurement, test and delivery direct to the end user. Our multiple form factors, high reliability, long life cycle products with firm BOM control are key items desired by specific OEM markets we serve.</p>
                        {/* <img className="quote right text-right" src={rightQuote} alt='esteem' /> */}
                    </div>
                </div>
                {/* linecard - section Two - End*/}
                {/* industry - section Three - start */}
                <div className="container-fluid industrySecThree" style={{ padding: '0' }}>
                    <div className="outer d-flex justify-content-between">
                        <div className="card frameOne d-flex justify-content-center" >
                            <h1 className="titleFour">Aerospace & Defense</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Avionics</li>
                                <li>Command & Control Station</li>
                                <li>Digital Frequency Synthesizer</li>
                                <li>Face Recognition System</li>
                                <li>High Speed Analog & Data Digitizing</li>
                                <li>PDA & SDR</li>
                                <li>Portable & In Vehicle Computers</li>
                                <li>Radar & Sonar</li>
                                <li>Satellite Earth Station </li>
                                <li>Target Detection Recognition</li>
                                <li>Unmanned vehicles</li>
                            </ul>
                        </div>
                        <div className="card frameTwo d-flex justify-content-center text-white">
                            <h1 className="titleFour">Medical Electronics</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Clinical Informatics</li>
                                <li>Computed Tomography</li>
                                <li>Electro Cardio Graphy (ECG)</li>
                                <li>Fluoroscopy</li>
                                <li>Home & Hospital Respiratory Care</li>
                                <li>Magnetic Resonance Imaging (MRI)</li>
                                <li>Mammography</li>
                                <li>Medical Telemetry</li>
                                <li>Patient Monitoring</li>
                                <li>Radiography</li>
                                <li>Ultrasound</li>
                            </ul>
                        </div>
                        <div className="card frameThree d-flex justify-content-center">
                            <h1 className="titleFour">Automotive &  Transportation</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Body Control Module</li>
                                <li>Coach Invertors & Data Logger</li>
                                <li>Display & Destination Boards</li>
                                <li>Electronic Interlocking System</li>
                                <li>Electronic Power Steering</li>
                                <li>Infotainment & Lamps</li>
                                <li>Instrument Clusters</li>
                                <li>Locomotive Control System</li>
                                <li>Signal Lamps & Interface</li>
                                <li>Speed Governor</li>
                                <li>Traction Equipment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="outer d-flex justify-content-between mt-5">
                        <div className="card frameFour d-flex justify-content-center text-white">
                            <h1 className="titleFour">Networking & Communications</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Audio & Video Conferencing</li>
                                <li>Carrier Ethernet</li>
                                <li>Dense Wave Division Multiplexing</li>
                                <li>Digital Transmission</li>
                                <li>DSLAM & IVR</li>
                                <li>Mobile Switching Center</li>
                                <li>Optical Networks, Routers & Switches</li>
                                <li>Storage Area Network (SAN)</li>
                                <li>VOIP & VOBB</li>
                                <li>WiMAX / LTE</li>
                                <li>Wireless Base Station</li>
                            </ul>
                        </div>
                        <div className="card frameFive d-flex justify-content-center ">
                            <h1 className="titleFour">Home & Industrial Automation</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Analog Video Router</li>
                                <li>Automatic Meter Reading</li>
                                <li>Building Automation</li>
                                <li>Energy Metering</li>
                                <li>Lighting Modules</li>
                                <li>Point of Sale</li>
                                <li>Power Tools</li>
                                <li>Process Control</li>
                                <li>Security & Surveillance</li>
                                <li>Smart Metering</li>
                                <li>Solid State Lighting</li>
                            </ul>
                        </div>
                        <div className="card frameSix d-flex justify-content-center text-white" >
                            <h1 className="titleFour">Personal Electronics</h1>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li>Audio & Video Gaming</li>
                                <li>Camera & Camcorders</li>
                                <li>Computers & Notebooks</li>
                                <li>Home Theatre & Entertainment</li>
                                <li>Mobile Phones</li>
                                <li>Personal Navigation Device (GPS)</li>
                                <li>Printers & Peripherals</li>
                                <li>Tablets</li>
                                <li>Television</li>
                                <li>Wearables</li>
                                <li>Wireless Connectivity & Interface</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* industry - section Three - end */}
                {/* lineCard - section Four - Start */}
                <div className="container-fluid abtSecFour">
                    <div className="container">
                        <div className="card" style={{ background: 'var(--primaryColorTwo)', padding: '40px' }}>
                            <img style={{ position: 'absolute', width: '100%', left: '0px', top: '0px', transform: 'translate(0%, -33%)', height: '300px' }} src={lineBg} alt='esteem' />
                            {/* <div className="inner d-flex justify-content-between align-items-center">
                                <h1 className="titleOne white fw-400" style={{width:'60%'}}>Looking for Quality Electronic Components ?</h1>
                                <input type='button' className='btn' value='Get Quote'/>
                            </div> */}
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
export default Industry