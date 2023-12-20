import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import lineBg from './assets/img/bgLines.svg';
import instagramBlack from './assets/img/instagramBlack.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import serviceOne from './assets/img/serviceOne.svg';
import serviceTwo from './assets/img/serviceTwo.svg';
import serviceThree from './assets/img/serviceThree.svg';
import serviceFour from './assets/img/serviceFour.svg';
import serviceFive from './assets/img/serviceFive.svg';
import serviceSix from './assets/img/serviceSix.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import logoRound from "./assets/img/logoRound.svg";
class Service extends React.Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render(){
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
                                            <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home </NavLink> - Services</h1>
                                    <h1 className="heroSubHeading blackColor fw-700">Services We Offer</h1>
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
                {/* service section - one - start */}
                <div className="container-fluid serviceSecOne">
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-12">
                                <div className="row rowGap mar">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card left">
                                            <img className="serviceImg" src={serviceOne} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Global Sourcing Solutions</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem has strong relationship with regional suppliers across the globe which includes manufacturers, franchised distributors and independent distributors</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card right">
                                            <img className="serviceImg" src={serviceTwo} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Cost Saving Solutions</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem's professionally trained procurement team have capabilities to match buyers and sellers of electronic components to achieve cost saving initiatives.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowGap mar">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card right">
                                            <img className="serviceImg" src={serviceThree} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Shortage Sourcing Solutions</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem's highly trained procurement team can keep your line running by procuring the electronic components you need from the network of qualified vendor base worldwide.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card left">
                                            <img className="serviceImg" src={serviceFour} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Excess Inventory Solutions</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem can turn your excess inventory to revenue, Buy / Sell contract arrangement can be designed which can maximize returns to your investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowGap mar">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card left">
                                            <img className="serviceImg" src={serviceFive} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Supplier Consolidation</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem can help lowering your total cost of procurement by reducing your number of suppliers, which in turn reduces your transactional and logistics costs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card left">
                                            <img className="serviceImg" src={serviceSix} alt='esteem' />
                                            <h1 className="titleSix black fw-600">Vendor Managed Inventory</h1>
                                            <p className="description text-center lightBlackThree fw-400">Esteem offers customized vendor managed inventory programs that can reduce your inventory ownership, warehouse personal costs and space.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service section - one - end */}
                {/* service section - two - start */}
                <div className="container serviceSecTwo">
                    {/* <img className="bullet img-fluid" src={bullets} alt='esteem' /> */}
                    <h1 className="titleOne primaryColor fw-600">Value Added Services:</h1>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cntBox">
                                <p className="titleSix line black fw-400"><span>BOM Analysis</span></p>
                                <p className="titleSix line black fw-400"><span>Logistical Analysis</span></p>
                                <p className="titleSix line black fw-400"><span>Decapsulation</span></p>
                                <p className="titleSix line black fw-400"><span>Product Cross Reference</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cntBox">
                                <p className="titleSix line black fw-400"><span>Inventory Optimization</span></p>
                                <p className="titleSix line black fw-400"><span>Authenticity Testing</span></p>
                                <p className="titleSix line black fw-400"><span>Baking and Dry Packing</span></p>
                                <p className="titleSix line black fw-400"><span>Part Cross Reference</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cntBox">
                                <p className="titleSix line black fw-400"><span>Last Time Buy (LTB)</span></p>
                                <p className="titleSix line black fw-400"><span>Solderability Testing</span></p>
                                <p className="titleSix line black fw-400"><span>Recertification of Leeds</span></p>
                                <p className="titleSix line black fw-400"><span>Tape and Reeling</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cntBox">
                                <p className="titleSix line black fw-400"><span>End of Life (EOL)</span></p>
                                <p className="titleSix line black fw-400"><span>Electrical Testing</span></p>
                                <p className="titleSix line black fw-400"><span>Product Programming</span></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="inner"> */}
                        {/* <div className="cntBox">
                            <p className="titleSix line black fw-400"><span>BOM Analysis</span></p>
                            <p className="titleSix line black fw-400"><span>Inventory Optimization</span></p>
                            <p className="titleSix line black fw-400"><span>Last Time Buy (LTB)</span></p>
                            <p className="titleSix line black fw-400"><span>End of Life (EOL)</span></p>
                            <p className="titleSix line black fw-400"><span>Logistical Analysis</span></p>
                        </div> */}
                        {/* <div className="cntBox">
                            <p className="titleSix line black fw-400"><span>Authenticity Testing</span></p>
                            <p className="titleSix line black fw-400"><span>Solderability Testing</span></p>
                            <p className="titleSix line black fw-400"><span>Electrical Testing</span></p>
                            <p className="titleSix line black fw-400"><span>Decapsulation</span></p>
                            <p className="titleSix line black fw-400"><span>Baking and Dry Packing</span></p>
                        </div> */}
                        {/* <div className="cntBox">
                            <p className="titleSix line black fw-400"><span>Recertification of Leeds</span></p>
                            <p className="titleSix line black fw-400"><span>Product Programming</span></p>
                            <p className="titleSix line black fw-400"><span>Product Cross Reference</span></p>
                            <p className="titleSix line black fw-400"><span>Part Cross Reference</span></p>
                            <p className="titleSix line black fw-400"><span>Tape and Reeling</span></p>
                        </div> */}
                    {/* </div> */}
                </div>
                {/* service section - two - end */}
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
export default Service;