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
class SalesTermsandCondition extends React.Component {
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
                                    <NavLink to="/" className="heroHeading primaryColorTwo fw-400">Home</NavLink> - Sales Terms & Conditions</h1>
                                <h1 className="heroSubHeading blackColor fw-700">Sales Terms & Conditions</h1>
                                {/* <a href='tel:+919845679678'><input type="button" value="Contact Us" class="btn" /></a> */}
                            </div>
                            <div className="col-lg-4 col-md-4 right">
                                <div className="text-left inner">
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
                    <p className="description fw-400 lightBlackThree mb-3">Seller is not liable for its failure to perform any of its obligations hereunder during any period in which performance is delayed by Buyer or circumstances beyond Seller’s reasonable control, including, without limitation, an act of God, war, civil disturbance, court order, labour dispute, third party non-performance, carrier delays, acts of third parties, or failures, fluctuations or non-availability of materials, components, electrical power, heat, light, air conditioning, computing or information systems or telecommunications.</p>
                    <h1 className="titleSix fw-700 blackColor mb-3">Price & Payment</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer shall pay all taxes, duty, freight charges and all other similar fees, such as forwarding agent’s and broker’s fees, consular fees, document fees and import duties.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer agrees to indemnify and hold Seller harmless for any liability for tax in connection with the sale, as well as the collection or withholding thereof, including penalties and interest thereon.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All payments shall be made by wire transfer to Seller’s account which will be designated by Seller in accordance with the terms specified in the Sale Document without abatement, set-off, or deduction of any amount whatsoever and despite any defense or counterclaim Buyer may have against Seller.</li>
                        <li className="description fw-400 lightBlackThree mb-3">A late charge of 1.5% per month will be assessed on all outstanding amounts not paid within the terms specified in the Sale Document. Buyer shall be liable for costs of collection, including reasonable attorneys’ fees and court costs, in any action to collect past due amounts.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller reserves the right to establish and or change credit and payment terms extended to Buyer. Seller shall not be obligated to continue performance under any agreement with Buyer.</li>
                        <li className="description fw-400 lightBlackThree mb-3">If Buyer fail to pay any invoice when due, Seller may suspend delivery of any order or any remaining balance thereof until such payment is made or cancel any order or any remaining balance thereof, and Buyer shall remain liable to pay for any Products already shipped.</li>
                    </ol>
                    <h1 className="titleSix fw-700 blackColor mb-3">Delivery</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">All shipments of Products shall be Ex Works, unless otherwise specified in the Sale Document.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Risk of loss and damage shall passed to Buyer upon delivery of Products to a carrier at Seller’s facility.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Delivery dates quoted by Seller are estimates only and are subject to various delays, whether in the control or beyond the control of Seller.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer acknowledges that any delay in delivery shall not give rise to any liability on the part of Seller whatsoever.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Transportation and Insurance shall be at Buyer’s sole risk and expense, and any claim for loss or damage in transit shall be against the carrier only.</li>
                        <li className="description fw-400 lightBlackThree mb-3">In the absence of specific shipping instructions from Buyer, Seller will select the carrier and method of shipment.</li>
                    </ol>
                    <h1 className="titleSix fw-700 blackColor mb-3">Acceptance / Returns</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">Shipments will be deemed to have been accepted by Buyer upon delivery to Buyer unless rejected upon receipt.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer shall perform whatever inspection or tests Buyer deems necessary as promptly as possible but in no event later than 7 days (Seven Days) after delivery, after which time Buyer will be deemed to have irrevocably accepted the products.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Any discrepancy in shipment quantity must be reported within 3 days (Three Days) of receipt of the Products.</li>
                        <li className="description fw-400 lightBlackThree mb-3">In the event of an over shipment, Buyer shall have the option to either return the products to Seller at Seller’s expense or retain the Products – Subject to adjustment of the invoice or the issuance of another invoice to account for such additional items.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Any Product returns shall be subject to compliance with Seller’s Return Merchandise Authorization policies and procedures, which are available upon request.</li>
                    </ol>
                    <h1 className="titleSix fw-700 blackColor mb-3">Warranty</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">All products are sold, and all services are performed, “AS IS” and “with all faults and defects</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller’s only warranties are that the products conform to the manufacturer’s published specifications for the products in all material respects.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Seller warrants to Buyer that for a period of 30 days following the delivery of product to Buyer, the Products will be free from defects in material and workmanship and will function in substantial compliance with the manufacturer’s written specifications.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer should give Seller written notice of the failure of the Products to confirm the Products warranty in this within 30 days of receipt of the Products.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Any service should be performed in a professional manner in accordance with any services specifications that are agreed to by both parties in writing.</li>
                        <li className="description fw-400 lightBlackThree mb-3">If the Seller confirms that the Products are non-conforming, Seller will either refund amounts paid by Buyer for the Products (or) repair or replace the Products at free of charge.</li>
                        <li className="description fw-400 lightBlackThree mb-3">The non-conforming Products are returned to Seller (at Buyer’s expense), no later than one year from the date of receipt of the Products.</li>
                        <li className="description fw-400 lightBlackThree mb-3">All sales of conforming Products, unless otherwise agreed in writing by Seller are Non-Cancellable, Non-returnable and non-reschedulable.</li>
                    </ol>
                    <h1 className="titleSix fw-700 blackColor mb-3">Liability</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer agrees that, regardless of the claim or any legal action brought by Buyer against Seller, none of the Seller Parties shall be liable for any indirect, special, incidental, consequential, exemplary or punitive damages, including, without limitation, loss of profits, revenue, promotional expenses, injury to reputation, or loss of customers.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Buyer’s recovery from the Seller shall not in the aggregate exceed the amount actually paid to Seller by Buyer for the Products or Services irrespective of the nature of the claim.</li>
                        <li className="description fw-400 lightBlackThree mb-3">Products sold by Seller are not designed, intended or authorized for use in life support, life sustaining, nuclear, or other applications in which the failure of such Products could reasonably be expected to result in personal injury, loss of life or catastrophic property damage.</li>
                        <li className="description fw-400 lightBlackThree mb-2">If Buyer uses or sells the Products for use in any such applications :</li>
                        <ol>
                            <p className="description fw-400 lightBlackThree mb-1">a. Buyer acknowledges that such use or sale is at Buyer’s sole risk.</p>
                            <p className="description fw-400 lightBlackThree mb-1">b. Buyer agrees that Seller and the manufacturer of the Products are not liable, in whole or in part, for any claim or damage arising from such use.</p>
                            <p className="description fw-400 lightBlackThree mb-1">c. Buyer agrees to indemnify, defend and hold Seller and the manufacturer of the Products harmless from and against any and all claims, damages, losses, costs, expenses and liabilities arising out of or in connection with such use or sale.</p>
                        </ol>
                    </ol>
                    <h1 className="titleSix fw-700 blackColor mb-3">Export Control</h1>
                    <ol>
                        <li className="description fw-400 lightBlackThree mb-1">Buyer acknowledges that the Products bought from Seller are subject to the export or import control laws and regulations of various countries. Buyer shall be responsible for obtaining all licenses, permits and other approvals required under, all applicable foreign, national, state and local laws and regulations relating to the purchase or use of the Products or Services</li>
                        <li className="description fw-400 lightBlackThree mb-1">Buyer certifies that it will be the recipient of Products to be delivered by Seller.</li>
                        <li className="description fw-400 lightBlackThree mb-1">Buyer agrees to comply strictly with export laws and assume sole responsibility for obtaining licenses to export or re-export any Products to any country to which such export or transmission is restricted or prohibited.</li>
                        <li className="description fw-400 lightBlackThree mb-1">Products sold by Seller cannot be transferred, sold or re-exported to any party on the Entity List or Restricted Person List of the U.S. Department of Commerce, Bureau of Industry and Security (BIS), any party designated by the U.S. Treasury Department’s Office of Foreign Assets Control, and any party debarred or sanctioned for proliferation or terrorism reasons by the U.S. State Department.</li>
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
export default SalesTermsandCondition;