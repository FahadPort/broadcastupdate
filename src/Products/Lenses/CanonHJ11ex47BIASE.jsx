import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CanonHJ11ex47BIASEimg from "../../assets/images/Canon-HJ11ex4.7BIASE.jpeg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const CanonHJ11ex47BIASE = () => {
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
                <img src={CanonHJ11ex47BIASEimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Canon HJ11ex4.7BIASE</h3>
                <p className="para">
                The Canon HJ11ex4.7BIASE is a high-end broadcast lens designed for professional video production, particularly in the realm of television broadcasting, sports coverage, and live events. </p>


               
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
               The HJ11ex4.7BIASE offers an impressive zoom range of 11x, allowing operators to capture a wide range of shots without needing to change lenses. This versatility makes it suitable for various shooting scenarios, from wide-angle shots to tight close-ups. The lens has a focal length range of 4.7mm to 52mm (or equivalent focal length in 35mm film format), providing flexibility in framing shots and achieving different perspectives. </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  






  </Grid>
  )
}

export default CanonHJ11ex47BIASE