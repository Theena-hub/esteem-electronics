import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import button from "react-bootstrap";
import logo from './assets/img/logo.png';
import headerBgImg from './assets/img/headerBg.svg';
import location from "./assets/img/location.svg";
import time from "./assets/img/clock.svg";
import phone from "./assets/img/phone.svg";
import dotMarkLeft from "./assets/img/dotMarkLeft.svg";
import dotMarkRight from "./assets/img/dotMarkRight.svg";
import homeHeroRight from './assets/img/homeHeroRightImage.svg';
import accordBtn from './assets/img/accordBtn.svg';
import chooseUsOne from './assets/img/chooseUsOne.svg';
import chooseUsTwo from './assets/img/chooseUsTwo.svg';
import chooseUsThree from './assets/img/chooseUsThree.svg';
import country from './assets/img/country.svg';
import shipping from './assets/img/shipping.svg';
import revenue from './assets/img/revenue.svg';
import manufactures from './assets/img/manufactures.svg';
import leftBg from './assets/img/leftBg.svg';
import rightBg from './assets/img/rightBg.svg';
import electron from './assets/img/electron.svg';
import brandOne from './assets/img/brandOne.jpg';
import brandTwo from './assets/img/brandTwo.jpg';
import brandThree from './assets/img/brandThree.jpg';
import brandFour from './assets/img/brandFour.jpg';
import brandFive from './assets/img/brandFive.jpg';
import brandSix from './assets/img/brandSix.jpg';
import brandSeven from './assets/img/brandSeven.jpg';
import brandEight from './assets/img/brandEight.jpg';
import brandNine from './assets/img/brandNine.jpg';
import brandTen from './assets/img/brandTen.jpg';
import brandEleven from './assets/img/brandEleven.jpg';
import brand12 from './assets/img/brand12.jpg';
import brand13 from './assets/img/brand13.png';
import brand14 from './assets/img/brand14.png';
import lineBg from './assets/img/bgLines.svg';
import curveLine from './assets/img/curveLine.svg';
import one from './assets/img/one.svg';
import two from './assets/img/two.svg';
import three from './assets/img/three.svg';
import four from './assets/img/four.svg';
import five from './assets/img/five.svg';
import six from './assets/img/six.svg';
import instagram from './assets/img/instagram.svg';
import instagramBlack from './assets/img/instagramBlack.svg';
import twitter from './assets/img/twitter.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import verticalLine from './assets/img/verticalLine.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoRound from "./assets/img/logoRound.svg";

class About extends React.Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        const settings3 = {
            dots: false,
            // infinite: true,                        
            autoplay: true,
            speed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        };
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
                                <h1 className="heroHeading primaryColorTwo fw-400">
                                    <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home</NavLink> - About Us</h1>
                                <h1 className="heroSubHeading blackColor fw-700">About Esteem</h1>
                                {/* <h1 className="heroSubHeading blackColor fw-700">We Do Not Make Deals, We Build Relationships</h1> */}
                                {/* <a href='tel:+919845679678'><input type="button" value="Contact Us" class="btn" /></a> */}
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
                {/* Section Three - Start */}
                <div className="container-fluid abtSecThree">
                    <div className="container two">
                        <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    {/* <h1 className="titleTwo line primaryColor fw-600"><span>AboutUs</span></h1> */}
                                    {/* <h1 className="titleThree blackTwo fw-600">Industry veteran with over 25 Years of experience</h1> */}
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="titleOne whiteThree fw-600">01</h1>
                                    <p className="description blackFirst fw-400" style={{ marginLeft: '22px' }}>Esteem was incorporated in Singapore in the year 2017 under the guidance of an industry veteran with over 25 Years of experience and expertise in the independent distribution of electronic components domain.</p>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="titleOne whiteThree fw-600">02</h1>
                                    <p className="description blackFirst fw-400">Esteem understands the changing market conditions in the competitive business environment and have adopted a business strategy that enables to deliver quality electronic components consistently in a timely manner.</p>
                                </div>
                                {/* </div> */}
                                {/* <div className="col-lg-7"> */}
                                <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="titleOne whiteThree fw-600">03</h1>
                                    <p className="description blackFirst fw-400">Our solid relationships with trusted suppliers around the globe and sound knowledge in understanding the cost saving PPV sourcing requirements will get you the required parts within a specified price range.</p>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="titleOne whiteThree fw-600">04</h1>
                                    <p className="description blackFirst fw-400">Esteem’s strong data analytic skills offer expertise in commodity supply sources & market Intelligence, including semiconductors, memory, storage, integrated circuits and more. We use our global capabilities to provide a wide range of products and services to meet the needs of our customers.</p>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="titleOne whiteThree fw-600">05</h1>
                                    <p className="description blackFirst fw-400">Esteem combines tech expertise and business intelligence to catalyze, change and deliver results. We believe our responsibilities extend beyond business and never let challenges prevent us from trying.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section Three - End */}
                {/* start */}
                <div className="container-fluid abtSecOne">
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img src={country} alt="esteem" />
                                    <h1 className="titleOne fw-600 primaryColorTwo text-center">25+</h1>
                                    <h1 className="titleFour fw-600 blackFirst text-center">Countries Served</h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 marginTop" >
                                <div className="card">
                                    <img src={shipping} alt="esteem" />
                                    <h1 className="titleOne fw-600 primaryColorTwo text-center">2M+</h1>
                                    <h1 className="titleFour fw-600 blackFirst text-center">Parts Shipped</h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img src={revenue} alt="esteem" />
                                    <h1 className="titleOne fw-600 primaryColorTwo text-center">$30M+</h1>
                                    <h1 className="titleFour fw-600 blackFirst text-center">Revenue</h1>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 marginTop" >
                                <div className="card">
                                    <img src={manufactures} alt="esteem" />
                                    <h1 className="titleOne fw-600 primaryColorTwo text-center">100+</h1>
                                    <h1 className="titleFour fw-600 blackFirst text-center">Manufacturers</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}
                {/* Section Two - Start */}
                <div className="container-fluid abtSecTwo">
                    <img className="dotMarkLeft" src={dotMarkLeft} alt="esteem" />
                    <img className="dotMarkRight" src={dotMarkRight} alt="esteem" />
                    <img className="curveLine" src={curveLine} alt='esteem' />
                    <div className="container">
                        <div className="row rowGap" >
                            <img className="verticalLine" src={verticalLine} alt='esteem' />
                            <div className='col-lg-6 col-md-6' style={{ margin: 'auto' }}>
                                <div className="leftCont">
                                    {/* <img className="d-flex leftQuote" src={leftQuote} alt='esteem' /> */}
                                    <h1 className="titleOne fw-700 primaryColor">Trusted Source for Quality Electronic Components</h1>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className="d-flex">
                                    <div className="innerRight">
                                        <div>
                                            <div className="triangleRight"></div>
                                            <h1 className="titleFour mb-0 fw-600 blackFirst">Global Sourcing Solutions</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem’s has strong relationship with regional suppliers across the globe which includes manufacturers, franchised distributors and independent distributors.</p>
                                        </div>
                                        <div>
                                            <h1 className="titleFour mb-0 fw-600 blackFirst">Cost Saving Solutions</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem’s professionally trained procurement team have capabilities to match buyers and sellers of electronic components to achieve cost saving initiatives.</p>
                                        </div>
                                        <div>
                                            <h1 className="titleFour mb-0 fw-600 blackFirst">Shortage Sourcing Solutions</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem’s highly trained procurement team can keep your line running by procuring the electronic components you need from the network of qualified vendor base worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className="d-flex">
                                    <div className="innerLeft">
                                        <div>
                                            <h1 className="titleFour mb-0 arwRot fw-600 blackFirst">Excess Inventory Solutions</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem can turn your excess inventory to revenue, Buy / Sell contract arrangement can be designed which can maximize returns to your investment.</p>
                                        </div>
                                        <div>
                                            <h1 className="titleFour mb-0 arwRot fw-600 blackFirst">Supplier Consolidation</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem can help lowering your total cost of procurement by reducing your number of suppliers, which in turn reduces your transactional and logistics costs.</p>
                                        </div>
                                        <div>
                                            <h1 className="titleFour mb-0 arwRot fw-600 blackFirst">Vendor Managed Inventory</h1>
                                            <p className="description fw-400 lightBlackThree">Esteem offers customized vendor managed inventory programs that can reduce your inventory ownership, warehouse personal costs and space.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6' style={{ margin: 'auto' }}>
                                <div className="rightCont">
                                    {/* <img className="d-flex leftQuote" src={leftQuote} alt='esteem' /> */}
                                    <h1 className="titleOne fw-700 primaryColor" >We do not make deals,</h1>
                                    <h1 className="titleOne fw-700 primaryColor" >We build relationships</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section Two - End */}
                {/* Section Caro - Start */}
                <div className="container-fluid abtSecCaro">
                    <div className="container">
                        <div className="card">
                            <Slider {...settings3}>
                                <div><img className="brandImg" src={brandOne} alt='image' /></div>
                                <div><img className="brandImg" src={brandTwo} alt='image' /></div>
                                <div><img className="brandImg" src={brandThree} alt='image' /></div>
                                <div><img className="brandImg" src={brandFour} alt='image' /></div>
                                <div><img className="brandImg" src={brandFive} alt='image' /></div>
                                <div><img className="brandImg" src={brandSix} alt='image' /></div>
                                <div><img className="brandImg" src={brandSeven} alt='image' /></div>
                                <div><img className="brandImg" src={brandEight} alt='image' /></div>
                                <div><img className="brandImg" src={brandNine} alt='image' /></div>
                                <div><img className="brandImg" src={brandTen} alt='image' /></div>
                                <div><img className="brandImg" src={brandEleven} alt='image' /></div>
                                <div><img className="brandImg" src={brand12} alt='image' /></div>
                                <div><img className="brandImg" src={brand13} alt='image' /></div>
                                <div><img className="brandImg" src={brand14} alt='image' /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* Section Three - End */}
                {/* Section Four - Start */}
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
                {/* Section Four - End */}
                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default About