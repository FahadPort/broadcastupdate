import { Container, div } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import delivery from "../../assets/images/delivery.png";
import payment from "../../assets/images/payment.png";
import support from "../../assets/images/support.png";
import trust from "../../assets/images/trust.png";
import paymentmethod from "../../assets/images/paymentmethod.png";
import mailicon from "../../assets/images/mail.png";
import { Link } from "react-router-dom";

export default function FooterComponent() {
	return (
		<>
			<div id="footer">
				<div
					id="footer-top"
					className="features">
					<div className="feature-flexbox">
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={delivery}
									alt=""
								/>
								<h4>Fast Delivery</h4>
								<p>Delivery order within 24 hours</p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={payment}
									alt=""
								/>
								<h4>Secure Payment</h4>
								<p>Payment protected by SSL </p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={support}
									alt=""
								/>
								<h4>24*7 Support</h4>
								<p>Customer service active 24*7 all-over</p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={trust}
									alt=""
								/>
								<h4>Trustworthy Service</h4>
								<p>Trustworthy & reliable service provider</p>
							</div>
						</div>
					</div>

					<div className="footer-links-container">
						<div>
							<div
								id="ft-clm"
								className="footer-links">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link to={"#"}>
											<img
												src={mailicon}
												alt=""
											/>
											suzy@thebroadcaststore.co
										</Link>
									</li>
									<li>
										<Link to={"/about"}>About BroadcastStore.co</Link>
									</li>
									<li>
										<Link to={"/locations"}>Locations</Link>
									</li>
									<li>
										<Link to={"/policies"}>BroadcastStore.co Policies</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div
								id="ft-clm"
								className="ft-clm-2">
								<h3>Site Links</h3>
								<ul>
									<li>
										<Link to={"/"}>Sell Equipment</Link>
									</li>
									<li>
										<Link to={"/"}>Request Equipment</Link>
									</li>
									<li>
										<Link to={"/repairservice"}>Repair & Service</Link>
									</li>
									<li>
										<Link to={"/"}>System Integration</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div id="ft-clm">
								<h3>Services</h3>
								<ul>
									<li>
										<Link to={"/"}>Customer Feedback</Link>
									</li>
									<li>
										<Link to={"/request-a-call"}>Request A Call</Link>
									</li>
									<li>
										<Link to={"/Financing"}>Financing</Link>
									</li>
									<li>
										<Link to={"/shipping"}>Shipping Information</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div id="ft-clm">
								<h3>Contact</h3>
								<ul>
									<li>
										<Link to={"/"}>Shop BroadcastStore.co</Link>
									</li>
									<li>
										<Link to={"/"}>Monthly Specials</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="copyright">
						<div className="copyright-flexbox">
							<div>
								<p>
									<b>© 2024, Broadcast Store</b>
								</p>
							</div>
							<div>
								<img
									src={paymentmethod}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
