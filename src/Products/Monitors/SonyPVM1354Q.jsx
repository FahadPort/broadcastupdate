import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPVM1354Qimg from "../../assets/images/Sony-PVM-1354Q.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPVM1354Q = () => {
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
                <img src={SonyPVM1354Qimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PVM 1354Q</h3>
                <p className="para">
                The Sony PVM-1354Q is a professional-grade CRT (Cathode Ray Tube) </p>
               
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
                The PVM-1354Q features a 13-inch flat-screen CRT display. It utilizes Sony's Trinitron technology, known for its high-quality image reproduction, color accuracy, and excellent contrast. The monitor typically supports resolutions up to 600 TV lines, providing detailed and sharp images. It is capable of displaying both standard definition (SD) and high definition (HD) content.  </p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
   
  




  </Grid>
  )
}

export default SonyPVM1354Q