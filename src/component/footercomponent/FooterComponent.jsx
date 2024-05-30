import { Container, Grid, List } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typography, Button, TabPanel } from "@mui/material";
import { PiWechatLogoLight } from "react-icons/pi";
import ftimage1 from "../../assets/images/ftimg1.png";
import ftimage2 from "../../assets/images/ftimg2.png";
import ftimage3 from "../../assets/images/ftimg3.png";

import delivery from "../../assets/images/delivery.png";
import payment from "../../assets/images/payment.png";
import support from "../../assets/images/support.png";
import trust from "../../assets/images/trust.png";
import paymentmethod from "../../assets/images/paymentmethod.png";
import mailicon from "../../assets/images/mail.png";

 
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <Grid>
      <Grid id="footer">
        <Grid id="footer-top">
          <Container>
            <div className="features">
              <Row>
                <Col xs={3}>
                  <div className="feat-inner">
                    <img src={delivery} alt="" />
                    <h4>Fast Delivery</h4>
                    <p>Delivery order within 24 hours</p>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="feat-inner">
                    <img src={payment} alt="" />
                    <h4>Secure Payment</h4>
                    <p>Payment protected by SSL </p>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="feat-inner">
                    <img src={support} alt="" />
                    <h4>24*7 Support</h4>
                    <p>Customer service active 24*7 all-over</p>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="feat-inner">
                    <img src={trust} alt="" />
                    <h4>Trustworthy Service</h4>
                    <p>Trustworthy & reliable service provider</p>
                  </div>
                </Col>
              </Row>
            </div>

            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Grid id="ft-clm">
                <h3>Contact Us</h3>
                   <ul>
                    <li>
                      <Link to={"#"}><img src={mailicon} alt="" />suzy@thebroadcaststore.co</Link>
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
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm" className="ft-clm-2">
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
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm">
                  
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
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm">
          
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <Link to={"/"}>Shop BroadcastStore.co</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Monthly Specials</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <div className="copyright">
              <Row>
                <Col xs={6}>
               <p><b>© 2024, Broadcast Store</b></p>
                </Col>
                <Col xs={6}>
                <img src={paymentmethod} alt="" />
                </Col>
              </Row>
            </div>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
