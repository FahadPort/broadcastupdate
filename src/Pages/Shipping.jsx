import React, { useEffect } from "react";
import { Grid, Typography, Container, Button } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SlCallOut } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import store from "../assets/images/store.jpg";
import repair from "../assets/images/Repair.jpg";
import usa from '../assets/images/usa.webp'
import customer from '../assets/images/inter-customer.jpg'
import shipping from '../assets/images/Shipping.jpg'
import ups from '../assets/images/ups.jpg'
import fedex from '../assets/images/FedEx.png'
import usportal from '../assets/images/ups-portal.webp'
import air from '../assets/images/air.jpg'


const Shipping = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent">
            <h1 className="heading">Where We Ship</h1>
          </div>
        </Container>
      </div>

      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">US Customers</h3>
                  <p className="para">We ship to:</p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Residential address
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Your place of business
                      </li>
                      <li>
                        <FaRegCircleDot />
                        APO addresses
                      </li>
                      <li>
                        <FaRegCircleDot />
                        US territories and possessions
                      </li>
                      <li>
                        <FaRegCircleDot />
                        We do not ship to hotels, motels or resorts.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={usa} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={customer} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">International Customers</h3>
                  <p className="para">We ship to: </p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Your home address
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Any US address
                      </li>
                      <li>
                        <FaRegCircleDot />
                        We do not ship to your place of business, hotels,
                        motels, or resorts.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        We reserve the right to block certain products from
                        being shipped outside of the US, based on manufacturer
                        restrictions.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        P.O. Boxes can only be delivered to via the US Postal
                        Service.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        You can save and edit your billing address in the
                        section.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">Shipping Fees</h3>
                  <p className="para">
                    Shipping fees are based on the destination, size and weight
                    of your item(s) and include a small fee for insuring the
                    full value of your item(s) against possible theft or damage
                    while in transit.
                  </p>
                  <h3 className="sec-head">Shipping Options</h3>
                  <p className="para">
                    We work with multiple carriers to offer you different
                    shipping options. UPS is our preferred carrier, but you may
                    also choose FedEx, US Mail to name a few. Expedited shipping
                    options are also available for rush deliveries.{" "}
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={shipping} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={ups} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">UPS</h3>
                  <p className="para">We ship to: </p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Guaranteed delivery time.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Signature required upon delivery.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        If you have a UPS account you can enter your account
                        number on our Shipping Method page during Checkout.
                        Account numbers will be verified with UPS. You will pay
                        only a handling fee to Broadcaststore.co and UPS will
                        bill you for the shipping.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">FedEx</h3>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Signature required upon delivery.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        If you have a FedEx account you can enter your account
                        number on our Shipping Method page during Checkout.
                        Account numbers will be verified with FedEx. You will
                        pay only a handling fee to broadcaststore.co and FedEx
                        will bill you for the shipping.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={fedex} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={repair} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">US Postal Service</h3>
                  <p className="para">
                    Shipments sent via US Postal Service can take significantly
                    longer than with UPS or FedEx to reach their destination and
                    cannot be tracked.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">Truck/Air Freight (US only)</h3>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Overweight and/or oversized items (example TVs) can only
                        be shipped by common carrier.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Please allow 5-8 business days for delivery to the 48
                        contiguous states and 10-14 days for Alaska, Hawaii and
                        Puerto Rico.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={air} alt="" data-aos="zoom-out-up" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
             
              <Col xs="12">
                <div className="innerContent" data-aos="fade-right">
                  <h3 className="sec-head">Delivery Times</h3>
                  <p className="para">
                    If your order is being shipped from Broadcaststore.co (not
                    drop-shipped) to a US shipping address, please allow a
                    minimum of 3 days from the date of payment for processing in
                    addition to shipping time. (Expected delivery dates are
                    estimates. Orders can be delayed due to verification or time
                    of order being placed. Items that are not regularly stocked
                    cannot be held to the expected delivery dates.){" "}
                  </p>

                  <p className="para">
                    All used equipment is subject to an internal QC process.
                    Used items will be shipped 3-5 days after purchase.
                  </p>
                  <p className="para">
                    Orders may be delivered in separate shipments.
                  </p>
                  <p className="para">
                    Order cutoff times for 1-Day and 2-Day Shipping Options are:
                  </p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Monday - Thursday: 3:30pm PST
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Friday: 10:30am EST or 11:30am PST{" "}
                      </li>
                    </ul>
                  </p>

                  <p className="para">
                    Some items on our website are not regularly stocked at
                    Broadcaststore.co.
                  </p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        Drop Ship: These items will be shipped to you directly from the manufacturer. These items generally take about 7-10 days to arrive to U.S. destinations.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        Accepting Orders and Special Order: If one of the items in your order include one of these non-regularly stocked items, we will ask you during checkout to choose whether you'd like us to ship your full order when all items are in stock or if you would like to a split shipment (this will not cost you more). The estimated delivery shown reflects the shipping time once Broadcaststore.co gets the item in stock. (International customers: If you choose to have a non-regularly stocked item priced below $500 shipped separately, it will be shipped to via USPS when it arrives at Broadcaststore.co.)
                      </li>
                    </ul>
                  </p>

                  <p className="para">
                    Broadcaststore.co generally packs orders Sunday - Friday.
                    However, orders packed by Broadcaststore.co on Sundays or
                    Legal Holidays are not shipped until the following day.
                  </p>
                  <p className="para">
                    Business days' are defined as Monday through Friday, except
                    holidays.
                  </p>
                  <p className="para">
                    Please note: All orders are subject to approval by our
                    verification and QC department. We will notify you by phone
                    or email should your order be delayed or your equipment is
                    no longer available.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default Shipping;
