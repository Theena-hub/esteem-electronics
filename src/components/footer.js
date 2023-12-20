import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import instagram from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import fb from '../assets/img/fb.svg';

class Footer extends React.Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        return (
            <>
                {/* footertop - start */}
                <div className="container-fluid footerTop">
                    <div className="container">
                        <div className="inner d-flex justify-content-between">
                            <img className="logo" src={logo} alt='logo' />
                            <div className="socialMedias d-flex align-items-center">
                                <div className="inner d-flex">
                                    <a href="https://www.instagram.com/esteem_sg/" target="_blank"><img src={instagram} alt='image' /></a>
                                </div>
                                <div className="inner d-flex">
                                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Festeempte" target="_blank"><img src={twitter} alt='image' /></a>
                                </div>
                                <div className="inner d-flex">
                                    <a href="https://www.facebook.com/people/Esteem-Microelectronics-Pte-Ltd/100087643544407/" target="_blank"><img src={fb} alt='image' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footertop - end */}
                {/* footer - start */}
                <div className='container-fluid footer footerBorder'>
                    <div className="container" style={{ paddingBottom: '10px' }}>
                        <div className="row rowGap">
                            <div className="col-lg-3 col-md-4 firstCol">
                                <div className="inner">
                                    <h1 className="titleFive fw-600">INFORMATION</h1>
                                    <NavLink to="/" onClick={this.scrollToTop} ><p className="description fw-300 ul">Home</p></NavLink>
                                    <NavLink to="/about" onClick={this.scrollToTop} ><p className="description fw-300 ul">About us</p></NavLink>
                                    <NavLink to="/industry" onClick={this.scrollToTop} ><p className="description fw-300 ul">Industries Served</p></NavLink>
                                    <NavLink to="/service" onClick={this.scrollToTop} ><p className="description fw-300 ul">Services</p></NavLink>
                                    <NavLink to="/linecard" onClick={this.scrollToTop} ><p className="description fw-300 ul">Linecard</p></NavLink>
                                    <NavLink to="/contact" onClick={this.scrollToTop} ><p className="description fw-300 ul">Contact Us</p></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="inner">
                                    <h1 className="titleFive fw-600">QUICK LINKS</h1>
                                    <NavLink to="/purchase_tc" onClick={this.scrollToTop}><p className="description fw-300">Purchase Terms & Conditions</p></NavLink>
                                    <NavLink to="/sales_tc" onClick={this.scrollToTop}><p className="description fw-300">Sales Terms & Condition</p></NavLink>
                                    <NavLink to="/invoice_tc" onClick={this.scrollToTop}><p className="description fw-300">Invoice Terms & Conditions</p></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 thirdCol">
                                <div className="inner">
                                    <h1 className="titleFive fw-600">CONTACT INFO</h1>
                                    <a href='tel:+6584050093' className="phone icon"><p className="description fw-300">+65 8405 0093</p></a>
                                    <a href='tel:+919845679678' className="phone icon"><p className="description fw-300">+91 98456 79678</p></a>
                                    <a href='mailto:info@esteemelectronics.com' className="email icon"><p className="description fw-300">info@esteemelectronics.com</p></a>
                                    <a href='mailto:durai@esteemelectronics.com' className="email icon"><p className="description fw-300">durai@esteemelectronics.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 fourthCol">
                                <div className="inner">
                                    <h1 className="titleFive fw-600">REGISTERED OFFICE</h1>
                                    <a className="locationIcon">
                                        <div style={{ marginLeft: '25px' }}>
                                            <p className="description fw-500">Esteem Microelectronics Pte. Ltd.,</p>
                                            <p className="description fw-300">51 Goldhill Plaza, #07 – 10/11,</p>
                                            <p className="description fw-300">Singapore 308900.</p>
                                        </div>
                                    </a>
                                    <h1 className="titleFive fw-600">LOGISTICS & DISTRIBUTION CENTRE</h1>
                                    <a className="locationIcon">
                                        <div style={{ marginLeft: '25px' }}>
                                            <p className="description fw-500" >Esteem Microelectronics Pte. Ltd.,</p>
                                            <p className="description fw-300">C/O DNKH Logistics Pte. Ltd.,</p>
                                            <p className="description fw-300">27 Penjuru Lane, Phase 2, #02-02,</p>
                                            <p className="description fw-300">Singapore 609195.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer">
                    <div className="container">
                        <h1 className="mt-1 mb-0 descriptionTwo fw-400 text-center whiteThree">Esteem Microelectronics Pte. Ltd. is not affiliated with any of the manufacturers and the products they manufacture, rather we only sell the finished products of the stated manufacturers.</h1>
                        <h1 className="mt-0 mb-0  descriptionTwo fw-400 text-center whiteThree">All trademark rights including logo, emblem, symbol, and design associated with the manufacturer’s / distributor's name are exclusively owned by the respective manufacturers/distributors.</h1>
                        <h1 className="descriptionTwo fw-400 text-center whiteThree">Copyright @ Esteem Microelectronics Pte. Ltd - All rights reserved</h1>
                        <h1 className="descriptionTwo fw-400 text-center whiteThree">Developed By KICKVY TECHNOLOGY</h1>
                    </div>
                </div>
                {/* footer - end */}
            </>
        )
    }
}
export default Footer;