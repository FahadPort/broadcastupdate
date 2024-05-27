import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JVCAVImage from "../assets/images/JVCAV.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";
const Jvcav = () => {
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
                <img src={JVCAVImage} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">JVC AV-P1000U</h3>
                <p className="para">
                SXGA DIGITAL PRESENTER  </p>
               
                <p className="price">$5,152.10</p>
                <p className="del">
                  <del>$5,252.10</del>
                </p>

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
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
                The DV115 is a light weight pan & tilt head especially optimized for the JVC GY-DV300REM camcorder. The digital design of the DV115 allows the adapability necessary for special requirements. DIP Switches located at the base of the unit make special functions and configuration changes easily implemented. The DV180 digital controller was specifically designed to get the most from a DV115. You may use up to four DV115's with each DV180 controller.
                </p>
               

                <p>
                  <strong>Features:</strong>
                </p>
                <p className="para">
                <ul>
<li> <FaRegCircleDot />SXGA (1280x960)</li>
<li> <FaRegCircleDot />Freeze and recall up to 3 images</li>
<li> <FaRegCircleDot />20x zoom (5x optical + 4x digital)</li>
<li> <FaRegCircleDot />PC/video out</li>
<li> <FaRegCircleDot />Camera/PC input</li>
<li> <FaRegCircleDot />flip type lens</li>
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

export default Jvcav