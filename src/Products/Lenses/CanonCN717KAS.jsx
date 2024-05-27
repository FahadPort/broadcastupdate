import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CanonCN717KASimg from "../../assets/images/Canon-CN7x17KAS.webp"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const CanonCN717KAS = () => {
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
                <img src={CanonCN717KASimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Canon CN7x17 KAS </h3>
                <p className="para">
                The Canon CN7x17 KAS Cine-Servo lens is a high-end lens designed for professional video production, particularly in the realm of cinematography and broadcast. </p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Lenses</strong>
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
               The CN7x17 KAS lens offers an impressive zoom range of 7x, allowing cinematographers to capture a wide range of shots without needing to change lenses. This versatility makes it suitable for various shooting scenarios, from wide establishing shots to tight close-ups.  </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  






  </Grid>
  )
}

export default CanonCN717KAS