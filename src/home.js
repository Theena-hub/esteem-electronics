import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import dotMarkLeft from "./assets/img/dotMarkLeft.svg";
import dotMarkRight from "./assets/img/dotMarkRight.svg";
import chooseUsOne from './assets/img/chooseUsOne.svg';
import chooseUsTwo from './assets/img/chooseUsTwo.svg';
import chooseUsThree from './assets/img/chooseUsThree.svg';
import chooseUsFour from './assets/img/chooseUsFour.svg';
import country from './assets/img/country.svg';
import shipping from './assets/img/shipping.svg';
import revenue from './assets/img/revenue.svg';
import manufactures from './assets/img/manufactures.svg';
import since from './assets/img/since.svg';
import electron from './assets/img/electron.svg';
import electronLight from './assets/img/electronLight.svg';
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
import one from './assets/img/one.svg';
import two from './assets/img/two.svg';
import three from './assets/img/three.svg';
import four from './assets/img/four.svg';
import five from './assets/img/five.svg';
import six from './assets/img/six.svg';
import clientOne from './assets/img/clientOne.png';
import clientTwo from './assets/img/clientTwo.png';
import clientThree from './assets/img/clientThree.png';
import clientFour from './assets/img/clientFour.png';
import clientFive from './assets/img/clientFive.png';
import clientSix from './assets/img/clientSix.png';
import clientSeven from './assets/img/clientSeven.png';
import clientEight from './assets/img/clientEight.png'
import clientNine from './assets/img/clientNine.png';
import clientTen from './assets/img/clientTen.png';
import client11 from './assets/img/client11.png';
import client12 from './assets/img/client12.png'
import instagramBlack from './assets/img/instagramBlack.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Examples from "./Examples";
import homeVideo from "./assets/img/homeAni.mp4";
import certificate from "./assets/Certificate.pdf";
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            target: props.target,
            isCounting: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { target, isCounting } = this.state;

        if (!isCounting) {
            const elementTop = this.counterRef.getBoundingClientRect().top;
            const windowBottom = window.innerHeight;

            if (elementTop < windowBottom) {
                this.startCounting();
            }
        }
    }

    startCounting() {
        this.setState({ isCounting: true });

        const interval = setInterval(() => {
            if (this.state.count < this.state.target) {
                this.setState((prevState) => ({
                    count: prevState.count + 1,
                }));
            } else {
                clearInterval(interval);
            }
        }, 60); // Adjust the interval duration for animation speed
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        return (
            <div className="counter" ref={(el) => (this.counterRef = el)}>
                {this.state.count}
            </div>
        );
    }
}
class Home extends React.Component {
    componentDidMount() {
        // Access the video element and remove the controls attribute
        const videoElement = this.videoRef.current;
        if (videoElement) {
            videoElement.removeAttribute('controls');
        }
    }
    videoRef = React.createRef();
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        const settings2 = {
            className: "center",
            centerMode: true,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            speed: 1000,
            rows: 2,
            cssEase: "linear",
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesPerRow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesPerRow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesPerRow: 2,
                    }
                }
            ]
        };

        return (
            <>
                {/* navigation start */}
                <Navigation />
                {/* navigation end */}
                {/* hero Section - start */}
                <div className="container-fluid home">
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-6 col-md-6 col-12" style={{ margin: 'auto', textAlign: 'left' }}>
                                <h1 class="heroHeading primaryColor fw-700">Welcome to Esteem</h1>
                                <h1 class="heroSubHeading blackColor fw-700">Discover the</h1>
                                <h1 class="heroSubHeading blackColor fw-700">Future of Electronic</h1>
                                <h1 class="heroSubHeading blackColor fw-700">Component Sourcing</h1>
                                {/* <p class="description lightBlack fw-400">Join us in shaping the future, where innovation knows no bounds.</p> */}
                                <a href="/service"><input type="button" value="Learn More" class="btn" /></a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12" style={{ margin: 'auto' }}>
                                <div className="video-container">
                                    <video ref={this.videoRef} id="myVideo" width="100%" height="auto" loop controls="false" autoPlay muted>
                                        <source src={homeVideo} type="video/mp4" />
                                    </video>
                                </div>                                
                                {/* <div>
                                    <img className='img-fluid' src={esteemGif} alt='esteem' />
                                </div> */}
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
                {/* hero Section - end */}
                {/* about us section - start */}
                <div className="container-fluid about">
                    <div className="container overlay">
                        <div className="row rowGap">
                            <div className="col-lg-4">
                                <div className="card">
                                    <h1 className="titleFour text-center fw-600 blackTwo">Active Components</h1>
                                    <p className="description text-center fw-400 blackThree">Integrated Circuits, Microcontrollers, Memory, Diodes, Transistors, Displays, LED / Optoelectronics, RF, Wireless Sensors, Transducers, Vacuum Tubes</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <h1 className="titleFour text-center fw-600 blackTwo">Passive Components</h1>
                                    <p className="description text-center fw-400 blackThree">Capacitors, Resistors, Crystals, Oscillators, Inductors, Coils, Chokes, Potentiometers, Thermal Management</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <h1 className="titleFour text-center fw-600 blackTwo">Electromechanicals</h1>
                                    <p className="description text-center fw-400 blackThree">Connectors, Fans, Relays, Switches, Terminals, Resonators, Industrial Control Motors, Solenoids, Driver Protection Devices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="dotMarkLeft" src={dotMarkLeft} alt="image" />
                    <img className="dotMarkRight" src={dotMarkRight} alt="image" />
                    <div className="container two">
                        <div className="row rowGap">
                            <div className="col-lg-5" style={{ margin: 'auto' }}>
                                <div>
                                    {/* <h1 className="titleTwo line primaryColor fw-600"><span>About Esteem</span></h1> */}
                                    {/* <h1 className="titleThree black fw-600">Industry veteran with over 5 Years of experience</h1> */}
                                    <h1 className="titleTwo text-center primaryColor fw-600">Trusted Source for Quality Electronic Components</h1>
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ margin: 'auto' }}>
                                <div>
                                    <ul>
                                        <li className="markPoint description mb-1 black">Esteem was incorporated in Singapore during the year 2017 under the guidance of an industry veteran with over 25 Years of experience and expertise in the independent distribution of electronic components domain.</li>
                                        <li className="markPoint description mb-1 black">Esteem understands the changing market conditions in the competitive business environment and have adopted a business strategy that enables to deliver quality electronic components consistently in a timely manner.</li>
                                        <li className="markPoint description mb-1 black">Our solid relationships with trusted suppliers around the globe and sound knowledge in understanding the cost saving PPV sourcing requirements will get you the required parts within a specified price range. <a style={{ color: 'var(--primaryColor)' }} href='/about'>Read More</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Examples />
                </div>
                {/* about us sectio - end */}
                {/* why choose us - start */}
                <div className="container whyChooseUs">
                    <img className="electron top topLeft" src={electronLight} alt="esteem" />
                    <h1 className="titleOne primaryColor fw-600 text-center">Why Choose Us ?</h1>
                    <img className="electron top topRight" src={electronLight} alt="esteem" />
                    <div className="row rowGap mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card sideLine">
                                <img className="chooseUs one" src={chooseUsOne} alt='image' />
                                <div className="">
                                    <h1 className="titleFive text-center fw-700 blackColor">Factory Sealed Packing</h1>
                                    <p className="description text-center fw-400 blackThree">Brand New and Unused Parts with Manufacturer’s Factory Sealed Packing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card sideLine">
                                <img className="chooseUs two" src={chooseUsTwo} alt='image' />
                                <div className="">
                                    <h1 className="titleFive text-center fw-700 blackColor">Full Label / Lot Codes</h1>
                                    <p className="description text-center fw-400 blackThree">Full Manufacturer’s Labels with clear Date Codes and Lot Codes information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card">
                                <img className="chooseUs three" src={chooseUsThree} alt='image' />
                                <div className="">
                                    <h1 className="titleFive text-center fw-700 blackColor">100% Traceability</h1>
                                    <p className="description text-center fw-400 blackThree">Traceable documents will be provided along with shipment on request.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card">
                                <img className="chooseUs four" src={chooseUsFour} alt='image' />
                                <div className="">
                                    <h1 className="titleFive text-center fw-700 blackColor">ISO 9001 Certified</h1>
                                    <p className="description text-center fw-400 blackThree mb-0">Products and Services at highest industry standards</p>
                                    <a className='certificate' target="_blank" href={certificate} style={{ width: 'fit-content' }}><p className="description text-center fw-400 primaryColor">View Certificate</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="electron bottom bottomLeft" src={electronLight} alt="esteem" />
                    <img className="electron bottom bottomRight" src={electronLight} alt="esteem" />
                </div>
                {/* why choose us - end */}
                {/* experience - start */}
                <div className="container-fluid experience">
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-4">
                                <div>
                                    {/* <h1 className="titleThree fw-600 underLine primaryColorTwo">More than 5 Years of Experience</h1> */}
                                    <h1 className="titleThree fw-600 underLine primaryColorTwo">Over 3 Decades of Combined Experience</h1>
                                    <p className="description fw-400 blackTwo">We strive to build and strengthen our relationship with every business partner. Esteem's goal is not just to meet expectations, but to exceed them with a quality service in the electronic component industry.</p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row rowGap">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <img className="experienceIcon" src={country} alt='image' />
                                            {/* <h1 className="number">25+</h1> */}
                                            <h1 className="number d-flex"><Count target={25} />+</h1>
                                            <h1 className="content">Countries Served</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <img className="experienceIcon" src={shipping} alt='image' />
                                            <h1 className="number d-flex"><Count target={2} />M+</h1>
                                            <h1 className="content">Parts Shipped</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row rowGap">
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="experienceIcon" src={revenue} alt='image' />
                                    <h1 className="number d-flex">$<Count target={30} />M+</h1>
                                    <h1 className="content">Revenue</h1>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="experienceIcon" src={manufactures} alt='image' />
                                    <h1 className="number d-flex"><Count target={100} />+</h1>
                                    <h1 className="content">Manufacturers</h1>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="experienceIcon" src={since} alt='image' />
                                    <h1 className="number">2017</h1>
                                    <h1 className="content">Since</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* experience - end*/}
                {/* brand section - start */}
                <div className="container-fluid brand">
                    <div className="container mt-5 mb-5">
                        <img className="electron bg" src={electron} alt='image' />
                        <div className="row rowGap">
                            <div className="col-lg-4" style={{ margin: 'auto' }}>
                                <div>
                                    <h1 className="titleOne fw-600 primaryColor">Focused Brands </h1>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div>
                                    {/* <h2> Single Item</h2> */}
                                    <Slider {...settings}>
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
                    </div>
                </div>
                {/* brand section - end */}
                {/* achievements - start */}
                <div className="container-fluid achievements">
                    <div className="lineBg"></div>
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-5" style={{ margin: 'auto' }}>
                                <h1 className="titleOne fw-600 white" style={{ paddingBottom: '20px' }} >Electronic Component Supply Chain Partners with Zero Defects</h1>
                            </div>
                            <div className="col-lg-7">
                                <div className="card">
                                    <ul>
                                        <li className="description blackFirst">Esteem has achieved Zero DPPM</li>
                                        <li className="description blackFirst">Not even a single defective part shipped in the history of Esteem since incorporation.</li>
                                        <li className="description blackFirst">A trusted electronic component supply chain partner you can rely on, in most cases we operate as an extension to your own organization.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* achievements - end */}
                {/* industries - start */}
                <div className="container industries">
                    <h1 className="titleOne fw-600 text-center primaryColor">Industries Served</h1>
                    <div className="row rowGap mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={one} alt='image' />
                                <h1 className="titleFour fw-600 black">Aerospace &</h1>
                                <h1 className="titleFour fw-600 black">Defense</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={two} alt='image' />
                                <h1 className="titleFour fw-600 black">Automotive &</h1>
                                <h1 className="titleFour fw-600 black">Transportation</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={three} alt='image' />
                                <h1 className="titleFour fw-600 black">Home & Industrial</h1>
                                <h1 className="titleFour fw-600 black">Automation</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={four} alt='image' />
                                <h1 className="titleFour fw-600 black">Medical</h1>
                                <h1 className="titleFour fw-600 black">Electronics</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={five} alt='image' />
                                <h1 className="titleFour fw-600 black">Network &</h1>
                                <h1 className="titleFour fw-600 black">Communications</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-3 text-center">
                            <div>
                                <img class='img-fluid' src={six} alt='image' />
                                <h1 className="titleFour fw-600 black">Personal Electronics</h1>
                                <h1 className="titleFour fw-600 black">& Gaming</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* industries - end */}
                {/* weWork - start */}
                <div className="container-fluid weWork">
                    <div className="container">
                        <div className="row rowGap">
                            <div className="col-lg-4" style={{ margin: 'auto' }}>
                                <div>
                                    <h1 className="titleOne primaryColor fw-600">Customers</h1>
                                    <h1 className="titleOne blackThree fw-600" >We Work With</h1>
                                    {/* <p className="description lightBlack fw-400">Lorem ipsum dolor sit amet consectetur. Vitae morbi justo neque consequat vitae suspendisse.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div>
                                    <Slider {...settings2}>
                                        <div>
                                            <img src={clientOne} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientTwo} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientThree} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientFour} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientFive} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientSix} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientSeven} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientEight} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientNine} alt='image' />
                                        </div>
                                        <div>
                                            <img src={clientTen} alt='image' />
                                        </div>
                                        <div>
                                            <img src={client11} alt='image' />
                                        </div>
                                        <div>
                                            <img src={client12} alt='image' />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* weWork - end */}

                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default Home