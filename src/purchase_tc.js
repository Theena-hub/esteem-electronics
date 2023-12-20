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
// function PurchaseTermsandCondition() {
class PurchaseTermsandCondition extends React.Component {
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
                                <h1 className="heroHeading primaryColorTwo fw-400">
                                    <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home</NavLink> - Purchase Terms & Conditions</h1>
                                <h1 className="heroSubHeading blackColor fw-700">Purchase Terms & Conditions</h1>
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
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">Purchase order confirmations are not effective until Buyer receives a signed copy executed by an authorized representative of Seller acknowledging the following terms and conditions:</li>
                        <li className="description fw-400 lightBlackThree mb-3">Purchase order number must appear on all correspondence, invoices, packages, and shipping documents.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer must be notified prior to shipment of all orders weighing 25 Kg or greater.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All goods purchased and delivered must include a minimum of 1 year warranty.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Date codes must be within one year, unless specified otherwise.</li>
                        <li className="description fw-400 lightBlackThree mb-3">By accepting purchase order, Seller agrees to supply only new and authentic products.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller agrees to purchase parts directly from the Original Component Manufacturer (OCM), OCM Authorized Distributors, or Authorized Aftermarket Manufacturers or from Suppliers who obtain such parts exclusively from the OCM or their Authorized Suppliers with OCM traceability when possible.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller must not make substitutions or changes for this order without prior written approval from the Buyer. Seller must notify the Buyer of changes to the Seller’s processes, products, or services and the Seller must notify the Buyer if the Seller becomes aware of changes in product definition.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Unless expressly provided otherwise in this contract, all products furnished by the Seller to the Buyer pursuant to this contract are guaranteed by the Seller to be authentic, new, in good condition and in original manufacturer’s packaging. Products not meeting these requirements will be rejected by the Buyer.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Unless expressly provided otherwise in this contract; programmed products, packages containing mixed date codes, products on cut-tape, products not packaged in accordance with ANSI/ESD S20.20, and products with bent leads, formed leads, oxidized leads, or test markings will be rejected by the Buyer. and must pass QC inspection conducted Buyer’s customers</li>
                        <li className="description fw-400 lightBlackThree mb-3">Parts will undergo additional testing if required. If any questionable or suspect details identified in the testing process, Buyer reserves the right to return parts.</li>
                        <li className="description fw-400 lightBlackThree mb-3">If parts are found to be non-conforming by the Seller prior to shipment, Buyer must be notified of the non-conforming product and the supplier must obtain approval from Buyer regarding non-conforming product disposition.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Parts not complying with these requirements are subject to cancellation or return by Buyer.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer reserves the right to return defective parts within 30 days, for any reason unless Seller designates the order as NCNR special order, or non-returnable at the time of sale. Seller waives the right to cure a non-conforming delivery. All products will be returned under the same terms under which it was purchased.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller is responsible for all damages caused by its failure to deliver by the delivery date mentioned in the Purchase Order.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer will not pay any additional charges for special packaging or boxing unless specified herein.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Damage to goods not packed to insure proper protection in transit or excess transportation charges caused by shipment not being made in accordance with this purchase order confirmation, will be deducted from Seller’s current or future payments.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Please do not declare value for carriage through carriers, all shipments are covered by Buyer’s insurance.</li>
                        <li className="description fw-400 lightBlackThree mb-3">It is the Seller’s sole responsibility to ensure the accuracy of all Invoices and customs documentation including declared values. Buyer will not accept under-valued invoices.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller is required to retain records of all transactions and product information for a minimum of 5 years (Five Years) or as required by applicable statutory and regulatory requirements.</li>
                        <li className="description fw-400 lightBlackThree mb-3">By accepting the purchase order, the seller agrees to give Buyer, Buyer’s customer and Regulatory authorities, right of access to applicable areas of all facilities involved in the order and to all applicable documented information.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller must promptly replace suspected counterfeit product with product acceptable to the Buyer and the Seller will be liable for all costs relating to impoundment, removal, and replacement of the suspected counterfeit product.</li>
                        <li className="description fw-400 lightBlackThree mb-3">NO WARRANTY TIME LIMIT for product found to be counterfeit.  If the products do not meet the manufacturer’s specifications for form, fit, and function, the Seller agrees to allow the Buyer to return the products, the Seller agrees it will issue a full refund to the Buyer and Seller agrees it will be liable for all costs relating to impoundment, removal, and replacement of the faulty product.</li>
                        <li className="description fw-400 lightBlackThree mb-3">In the event of a return caused by the supplier, it is agreed and confirmed that supplier will accept the same terms and also liable to all incoming and outgoing related costs.</li>
                    </ol>
                </div>
                {/* end */}
                {/* footer - start */}
                <Footer />
                {/* footer - end */}
            </>
        )
    }
}
export default PurchaseTermsandCondition;