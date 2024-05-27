import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import VintenOspreyEliteimg  from "../../assets/images/Vinten-Osprey-Elite.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const VintenOspreyElite = () => {
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
                <img src={VintenOspreyEliteimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">*Vinten Osprey Elite</h3>
                <p className="para">
                Fully steerable pedestal with perfect balance of its entire extended stroke. Perfect for complete ‘on shot’ tracking in studios. Payload up to 80kg / 176lb. </p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Waveform Monitor</strong>
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
               The Osprey Elite S is a Portable, fully functioning studio pedestal for large payloads up to 80kg / 177lb. It the most versitile pedestal, capable of supporting large Vinten Vector Heads and the lastest range of portable or full facility digital cameras and teleprompters. It can track talent eyelines from a seated to standing position ‘on shot’ with its extended fully balanced range. It has an inlet valve for any air source, making Perfect Balance easy to achieve. There is a storage area for the camera operator. In addition, the Osprey Elite S pedestal includes a pressure gauge for clear and reliable set-up and the detachable skid allows the pedestal to be simply broken down into two sections for easy storage and transportation. It has a selector for both single wheel and all wheel crab steering for working in tight spaces and on shot direction changes. It comes with 12.5cm / 5 inch wheels and adjustable cable guards for studio use. </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  






  </Grid>
  )
}

export default VintenOspreyElite