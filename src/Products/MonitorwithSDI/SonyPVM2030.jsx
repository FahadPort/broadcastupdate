import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPVM2030img from "../../assets/images/SonyPVM2030.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPVM2030 = () => {
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
                <img src={SonyPVM2030img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PVM-2030 </h3>
                <p className="para"> Accepts Analog and Digital RGB via 25-pin D-Sub, S-Video, VTR, and Composite.
Condition
 </p>
               
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
                <ul>
<li><FaRegCircleDot/>Accepts Analog and Digital RGB via 25-pin D-Sub, S-Video, VTR, and Composite.</li>
<li><FaRegCircleDot/>Condition</li>
<li><FaRegCircleDot/>Used, normal wear. Some geometry issues near the corners of the screen. Missing 25-pin RGB cable - the purple tint in the photos is due to not having the proper cable to test with.</li>
<li><FaRegCircleDot/>30 Day Return Policy</li>
<li><FaRegCircleDot/>30 Day Warranty</li>
<li><FaRegCircleDot/>Refer to the pictures</li>
</ul> </p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyPVM2030