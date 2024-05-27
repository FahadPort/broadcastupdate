import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import VintenVector90img from "../../assets/images/VintenVector90.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const VintenVector90 = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);
}, [])
  return (
    <Grid>
    <div id="product">
      <Container>
        <div className="pro-inner">
          <Row>
            <Col xs="6">
              <div className="image">
                <img src={VintenVector90img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Vinten Vector 90 </h3>
                <p className="para">
                The Vinten Vector 90 pan/tilt head supports oversized camera payloads up to 198.4 lbs (90.0 kg) with perfect sinusoidal counterbalance</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Monitor with SDI</strong>
                  </div>
                  <div className="rating">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
                <Button className="theme-btn">
                  <Link to="/Enquiry" >Send Enquiry</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="pro-text">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Model Details</h3>
                <p className="para">
                The Vinten Vector 90 pan/tilt head supports oversized camera payloads up to 198.4 lbs (90.0 kg) with perfect sinusoidal counterbalance. Once balanced, heavy cameras, such as the IMAX IW5A with a 2500' magazine, may controlled with the fingertips and move with fluid-like ease thanks, to the Lubricated Friction (LF) drag control system. </p>
                <p className="para">True caliper disk brakes arrest movement during operation, and the center lock button firmly fixes the head in a horizontal position for safely mounting and dismounting camera payloads.</p>
                <p className="para">Operation is assisted with the brightly illuminated rear-facing status LCD and bubble level, and dual pan arm rosettes allow left- or two-handed configurations.</p>
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default VintenVector90