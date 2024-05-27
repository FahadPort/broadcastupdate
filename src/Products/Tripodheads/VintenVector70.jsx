import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";
import VintenVector70img from "../../assets/images/VintenVector70.jpg"
const VintenVector70 = () => {
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
                <img src={VintenVector70img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Vinten Vector 70  </h3>
                <p className="para">
                Introducing the Used Vinten VECTOR 70 Tripod Head (SKU: VECTOR 70 (used_1)), a reliable and heavy-duty tripod fluid head perfect for professional videographers and photographers. </p>
               
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
                Introducing the Used Vinten VECTOR 70 Tripod Head (SKU: VECTOR 70 (used_1)), a reliable and heavy-duty tripod fluid head perfect for professional videographers and photographers.  </p>
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">CONDITION</h3>
                <p className="para">
                This tripod head has been heavily used, but it is still in good working condition. It may show signs of wear and tear, but rest assured, it is fully functional and ready to support your camera equipment. </p>
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">ACCESSORIES</h3>
                <p className="para">
                Included with this tripod head are the HDT2 legs, providing stability and support for your camera setup. These legs are designed to withstand heavy loads and ensure smooth movements during your shoots.  </p>
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">WARRANTY</h3>
                <p className="para">
                To give you peace of mind, this used Vinten VECTOR 70 Tripod Head comes with a 1-month warranty. In case of any issues, you can rely on our support team to assist you. Invest in this second-hand Vinten Heavy-Duty Tripod Fluid Head and elevate your photography and videography game. Capture stunning shots with stability and precision, even in challenging environments. Don't miss out on this opportunity to own a high-quality tripod head at a more affordable price.  </p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default VintenVector70