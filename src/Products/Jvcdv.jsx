import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JVCDVImage from "../assets/images/JVCDV.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";
const Jvcdv = () => {
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
                <img src={JVCDVImage} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">JVC DV115</h3>
                <p className="para">
                The DV115 is a light weight pan & tilt head especially optimized for the JVC GY-DV300REM camcorder. The digital design of the DV115 allows the adapability necessary for special requirements. DIP Switches located at the base of the unit make special functions and configuration changes easily implemented.
                </p>
               
                <p className="price">$3,544.90</p>
                <p className="del">
                  <del>$3,644.90</del>
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
<li> <FaRegCircleDot />City Council Chambers</li>
<li> <FaRegCircleDot />County Commission Meetings</li>
<li> <FaRegCircleDot />Auditoriums and Classrooms</li>
<li> <FaRegCircleDot />Teleconferencing Rooms</li>
<li> <FaRegCircleDot />Meeting Rooms and Boardrooms</li>
<li> <FaRegCircleDot />Church santuaries</li>
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

export default Jvcdv