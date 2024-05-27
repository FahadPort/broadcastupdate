import React, { useEffect } from "react";
import { Grid, Typography, Container, Button } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import repair from "../assets/images/Repair.jpg";
import store from "../assets/images/store.jpg";
import { SlCallOut } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";

const Financing = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
      }, []);
  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent">
          <h1 className="heading">Financing</h1>
        </div>
      </Container>
    </div>

    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent" data-aos="fade-right">
                <h3 className="sec-head">Repair & Service</h3>
                <p className="para">
                Broadcast Store has teamed up with Southern California Leasing,
to serve you better. A business Leasing offers you the following advantages:
                </p>
                <p className="para">
                  <ul>
                    <li>
                      <FaRegCircleDot />
                      Tax, Delivery & Installation can be included

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Conventional banking lines are left open

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Conservation of working capital

                    </li>
                    <li>
                      <FaRegCircleDot />
                      No down payment

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Tax advantages

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Fixed monthly payments -- guaranteed


                    </li>
                    <li>
                      <FaRegCircleDot />
                      Gets needed equipment Now


                    </li>
                    <li>
                      <FaRegCircleDot />
                      Convenient and flexible

                    </li>
                  </ul>
                </p>
                <p className="para">
                Purchasing on a lease is easy: <br/>
Select the equipment you want and negotiate a final price with one of our sales engineers. Fill out the Lease application and fax it to Southern California Leasing. Once your lease is approved and your lease documents are signed, Southern California Leasing will issue a purchase order to BroadcastStore.co and your equipment will be shipped to you.
                </p>
                
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={repair} alt="" data-aos="zoom-out-up" />
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
                <img src={store} alt="" data-aos="zoom-out-up" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" data-aos="fade-right">
                <h3 className="sec-head">BroadcastStore.co Form Library</h3>
                <p className="para">
                For your convenience we have included many of our most used forms and applications in PDF format. Please feel free download or print any forms you may need. Once you have filled out the necessary items, please fax them back to our sales department at 818-998-9106.
                </p>
                <p className="para">
                  <ul>
                    <li>
                      <FaRegCircleDot />
                      Credit Card Authorization

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Exemption Certicate

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Lease Application

                    </li>
                    <li>
                      <FaRegCircleDot />
                      Resale Certificate

                    </li>
                    
                  </ul>
                </p>
                
              </div>
            </Col>
            
          </Row>
        </div>
      </Container>
    </div>
   
  </Grid>
  )
}

export default Financing