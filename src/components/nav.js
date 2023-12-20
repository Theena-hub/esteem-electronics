import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import locationIcon from "../assets/img/location.svg";
import time from "../assets/img/clock.svg";
import phone from "../assets/img/phone.svg";

class Navigation extends React.Component {
    redirectToMailPage = () => {
        // Redirect to the mail page or any other route you want
        this.props.history.push('/mail');
        //
    };
    render() {        
        return (
            <>
                {/* header - start */}
                <div className="container-fluid header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 m-auto">
                                <img className="logo" src={logo} alt="logo" />
                            </div>
                            <div className="col-lg-3 m-auto" >
                                <div className="icon d-flex justify-content-end">
                                    <img src={locationIcon} alt='image' />
                                    <div class="ml-3">
                                        <p style={{ margin: '0px' }}>51 Goldhill Plaza, #07-10/11</p>
                                        <p style={{ margin: '0px' }}>Singapore 308900.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-auto" >
                                <div className="icon d-flex justify-content-end">
                                    <img src={time} alt='image' />
                                    <div class="ml-3">
                                        <p style={{ margin: '0px' }}>Mon – Fri 08.00 – 18.00</p>
                                        <p style={{ margin: '0px' }}>Sat | Sun Closed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-auto" >
                                <div className="icon d-flex justify-content-end">
                                    <img src={phone} alt='image' />
                                    <div class="ml-3">
                                        <a href='tel:+6584050093'><p style={{ margin: '0px' }}>+65 84050093</p></a>
                                        <a href='tel:+919845679678'><p style={{ margin: '0px' }}>+91 9845679678</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header - end */}
                {/* navbar - start */}
                <div className="container-fluid" style={{ boxShadow: '0 4px 2px -2px rgba(0,0,0,.2)' }}>
                    <Navbar className="container" expand="lg">
                        <Navbar.Brand href="/">
                            <img src={logo} alt="esteem" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <a className="nav-link fw-600"  href="/" >Home</a>
                                <NavLink className="nav-link fw-600" to="/about" >About Us</NavLink>
                                <NavLink className="nav-link fw-600" to="/linecard" >Products & Linecard</NavLink>
                                <NavLink className="nav-link fw-600" to="/industry" >Industries Served</NavLink>
                                <NavLink className="nav-link fw-600" to="/service" >Services</NavLink>
                                <NavLink className="nav-link fw-600" to="/contact" >Contact Us</NavLink>
                            </Nav>
                            <Form inline>
                                {/* <Button to='mailto:info@esteemelectronics.com' variant="outline-success">GET QUOTE</Button> */}
                                {/* <button onClick={this.redirectToMailPage}>Redirect to Mail</button> */}
                                <NavLink className="btn fw-600" to="mailto:info@esteemelectronics.com" variant="outline-success">GET QUOTE</NavLink>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                {/* navbar - end */}
            </>
        )
    }
}
export default Navigation;