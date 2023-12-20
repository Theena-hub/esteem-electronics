import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import locationTwo from './assets/img/locationTwo.svg';
import mobileIcon from './assets/img/mobileIcon.svg';
import emailIcon from './assets/img/emailIcon.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
function ContactUs() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    // Email Sending
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setMessageSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setCompany('');
        setPhone('');
        emailjs.sendForm('service_6sfar1b', 'template_ahx2nxb', form.current, 'x9c8f8_MEgf0oFVjF')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
                console.log('message not send');
            });
    };
    // const [isScrollUp, setIsScrollUp] = useState(false);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        }else if (name === 'email') {
            setEmail(value);
        }else if (name === 'company') {
            setCompany(value);
        }else if (name === 'phone') {
            setPhone(value);
        }else if (name === 'message') {
            setMessage(value);
        }
    }
   
    return (
        <>
            {/* navigation start */}
            <Navigation />
            {/* navigation end */}
            {/* contactSecOne - Start */}
            <div className="container-fluid contactSecOne">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 tc contBg" style={{ margin: 'auto' }}>
                            <div className="" >
                                <p className="bigText black fw-700">Let's</p>
                                <p className="bigText fw-700 primaryColor">Connect</p>
                            </div>                          
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div>
                                <p className="titleFive blackFirst fw-600">Please do not hesitate to contact us, kindly leave a message and we will get back to you shortly.</p>
                                <form className="form-group" ref={form} onSubmit={sendEmail}>
                                    <div className="d-flex" style={{ padding: '8px 0' }}>
                                        <input className="placeHold form-control fw-600 description mr-2" name="name" type="text" placeholder="NAME"  value={name} onChange={handleInputChange}  required />
                                        <input className="placeHold form-control fw-600 description ml-2" name="company" type="text" placeholder="COMPANY" value={company} onChange={handleInputChange} required />
                                    </div>
                                    <div className="d-flex" style={{ padding: '8px 0' }}>
                                        <input className="placeHold form-control fw-600 description mr-2" name="phone" type="number" placeholder="PHONE" required value={phone} onChange={handleInputChange} />
                                        <input className="placeHold form-control fw-600 description ml-2" name="email" type="email" placeholder="EMAIL" required value={email} onChange={handleInputChange} />
                                    </div>
                                    <div style={{ padding: '8px 0' }}>
                                        <textarea className="placeHold form-control fw-600 description" name="message" rows="4" cols="50" placeholder="Message Here..." required value={message} onChange={handleInputChange}></textarea>
                                    </div>
                                    <button className="btn d-flex">Send</button>
                                </form>
                                {messageSent && <p className="titleFive fw-600 primaryColor">Your Message sent successfully!</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid contactSecTwo">
                <div className="container">
                    <div className="" style={{ height: '100%' }}>
                        <iframe title="location" width="100%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.2976581891195!2d103.84270916710462!3d1.3181331406671843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e7b8f29f9b%3A0x8bc57d7ad5eeeecb!2sEsteem%20Microelectronics%20Pte.%20Ltd!5e0!3m2!1sen!2sus!4v1693375163941!5m2!1sen!2sus" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="container-fluid contactSecThree">
                <div className=" container">
                    <div className="row innerRow rowGap d-flex justify-content-around" style={{ overflowX: "hidden" }}>
                        <div className="col-lg-4 col-md-4">
                            <h4 className="titleFour primaryColor fw-600">Registered Office</h4>
                            <div className="d-flex align-items-start mt-2">
                                <img src={locationTwo} alt='esteem' />
                                <p className="description lightBlackFive fw-400">Esteem Microelectronics Pte. Ltd.,<br />51 Goldhill Plaza, #07 – 10/11,<br />Singapore 308900.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <h4 className="titleFour primaryColor fw-600">Logistics & Distribution Centre</h4>
                            <div className="d-flex align-items-start mt-2">
                                <img src={locationTwo} alt='esteem' />
                                <p className="description lightBlackFive fw-400">Esteem Microelectronics Pte. Ltd.,<br />C/O DNKH Logistics Pte. Ltd.,<br />27 Penjuru Lane, Phase 2,<br />#02-02,Singapore 609195.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h4 className="titleFour primaryColor fw-600">Contact Us</h4>
                            <div className="d-flex align-items-start mb-2">
                                <img src={mobileIcon} alt='esteem' />
                                <p className="description lightBlackFive fw-400">+65 84050093</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={mobileIcon} alt='esteem' />
                                <p className="description lightBlackFive fw-400">+91 9845679678</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={emailIcon} alt='esteem' />
                                <p className="description lightBlackFive fw-400">info@esteemelectronics.com</p>
                            </div>
                            <div className="d-flex align-items-start mb-2">
                                <img src={emailIcon} alt='esteem' />
                                <p className="description lightBlackFive fw-400">durai@esteemelectronics.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contactSecOne - End */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default ContactUs;