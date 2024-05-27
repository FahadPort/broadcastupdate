import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SonyDVWM2000img from "../../assets/images/Sony-DVWM2000.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyDVWM2000 = () => {
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
                <img src={SonyDVWM2000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DVWM2000</h3>
                <p className="para">
                Sony DVW-M2000 Studio Editing Digital Videocassette Recorder ERR-06 PARTS</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Digibeta</strong>
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
         The DVW-M2000 records in the DigitBeta  format, offering superior video and audio quality compared to analog formats. It utilizes 1/2-inch digital tape cassettes. Supports recording and playback in both standard definition (SD) formats: NTSC (525/60) and PAL (625/50). This makes it versatile for use in different regions with different broadcasting standards.</p>
                
                
              </div>
            </Col>
          </Row>
        </div>
     
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyDVWM2000