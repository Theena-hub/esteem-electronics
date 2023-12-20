import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import instagramBlack from './assets/img/instagramBlack.svg';
import twitterBlack from './assets/img/twitterBlack.svg';
import fbBlack from './assets/img/fbBlack.svg';
import Navigation from './components/nav';
import Footer from './components/footer';
import logoRound from "./assets/img/logoRound.svg";
class InvoiceTermsandCondition extends React.Component {
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
                            <h1 className="heroHeading primaryColorTwo fw-400">
                                    <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home</NavLink> - Invoice Terms & Conditions</h1>
                                <h1 className="heroSubHeading blackColor fw-700">Invoice Terms & Conditions</h1>
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
                {/* start */}
                <div className="container termsCondition" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                    <p className="description fw-400 lightBlackThree mb-3">This Invoice and the Terms and Conditions set forth herein constitute the entire Agreement between Seller and Buyer. If the terms and conditions of this Agreement differ in any way from the terms and conditions of Buyer’s purchase order or any other document submitted by Buyer, this Agreement shall govern and shall be not construed as a “counteroffer”. Buyer’s acceptance of the Products shall be a conclusive presumption that Buyer has accepted all of the terms and conditions of this Agreement. No addition to or modification of any of the terms of this Agreement will be effective unless made in writing and signed by the Seller and Buyer.</p>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">Seller warrants to Buyer that for a period of 30 days following the delivery of product to Buyer, the Products will be free from defects in material and workmanship and will function in substantial compliance with the manufacturer’s written specifications.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer’s exclusive remedy shall, in any case, be limited, at the Seller’s election, to:</li>
                        <ul>
                            <li className="description fw-400 lightBlackThree mb-2">Repair or replacement of the defective products;</li>
                            <li className="description fw-400 lightBlackThree mb-2">Refund of the purchase price thereof of to the Buyer</li>
                            <li className="description fw-400 lightBlackThree mb-2">Crediting of the same against future purchases by Buyer.</li>
                        </ul>
                        <li className="description fw-400 lightBlackThree mb-3">The foregoing warranty is the only warranty made by seller with respect to the products. There are no representations or warranties of any kind by the seller, express or implied, with respect to the condition or performance of the products, including, but not limited to, their merchantability or fitness for a particular purpose.</li>
                        <li className="description fw-400 lightBlackThree mb-3">In no event will seller be liable for any lost profits or any other incidental or consequential damages whatsoever, whether or not seller has been advised of the possibility of the same.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All products shall be deemed and presumed to be acceptable to Buyer and in full compliance with the warranties made herein unless, within 30 days from the date of delivery, Buyer shall have notified Seller in writing to the contrary. Any claims for shortages or in transit damage must be made to Seller in writing within 7 days from the date of this invoice.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All claims and returns must, moreover, be submitted to Seller’s facility using this invoice. All returns must be authorized in advance by Seller or on Seller’s Standard return authorization form.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All Products shall be shipped F.O.B. Seller’s facility and shall, except for any claim or lien, Seller returns for non- payment or other breach of terms, become the property of Buyer upon delivery to the carrier. Buyer shall assume all risk and liability for loss, damage or destruction after delivery to carrier.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Title to the Products shall pass to Buyer upon delivery to the carrier. Buyer agrees, however, that Seller shall retain a purchase money security interest in all Products and to any proceeds thereof, until the purchase price and any other charges due to Seller shall have been paid in full. Buyer agrees to execute any financing statement or other documents as Seller may request in order to perfect Seller’s security interest. Upon any default by Buyer hereunder, Seller shall have all rights and remedies of a secured party under the California Commercial Code, which rights and remedies shall be cumulative and not exclusive.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller makes no representation concerning patents, trademarks, trade names or service marks of any of its Products. Seller’s obligation for Patent infringement is expressly limited to any indemnification, which Seller’s vendor of the Products has agreed in writing to provide (or by operation of law has been deemed to provide) to Seller.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer shall be responsible for all reasonable costs and expenses incurred by Seller in the collection of any sums owing by Buyer or in Seller’s enforcement of any provision of this Agreement and Seller shall not be obligated to make any further deliveries to Buyer. Such reasonable costs and expenses shall include, but not be limited to, reasonable attorney’s fees.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller shall not be liable for any failure or delay in the performance of order or contracts or in the delivery or shipment of Products or for any damages suffered by Buyer by reason of such failure or delay, when such failure or delay is, directly or indirectly, caused by, or in any manner arises from fires, floods, accidents, riots, acts of God, war, governmental interference of embargoes, strikes, labour difficulties, shortage of labour, fuel, power, material or supplies, transportation delays, delays in deliveries by Seller’s vendors or any other causes beyond Seller’s control.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Enforcement of this Agreement shall be governed by the laws of Singapore. Any court action or proceeding of any nature whatsoever, in law or equity, for damages otherwise, related thereto shall be instituted only in the courts of Singapore jurisdiction.</li>
                        <li className="description fw-400 lightBlackThree mb-3">By acceptance of the Products which are the subject of this Agreement, Buyer irrevocably consents to the personal jurisdiction of Singapore courts in connection with any such action or proceeding and agrees that Singapore Jurisdiction is the proper venue for such disputes.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Before any court action or any proceeding is filed by either party involved in this transaction, the parties will participate in a mandatory mediation, which will last a minimum of four hours.</li>
                        <li className="description fw-400 lightBlackThree mb-3">If any dispute arises between the buyer and Esteem Microelectronics Pte. Ltd. and a lawsuit is filed, the prevailing party will be entitled to recover their reasonable attorney’s fees and costs, in addition to any other relief afforded.</li>                    
                    </ol>
                    <p className="titleSix fw-500 blackColor">ANY LEGAL ACTION BROUGHT BY BUYER AGAINST ESTEEM MICROELECTRONICS PTE LTD MUST BE BROUGHT WITHIN ONE YEAR, AFTER SUCH CAUSE OF ACTION ACCRUES REGARDLESS OF WHETHER THE CLAIM IS BASED IN CONTRACT OR TORT AND THEREAFTER, ALL SUCH CLAIMS SHALL BE BARRED.</p>
                </div>
                {/* end */}
                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default InvoiceTermsandCondition;