import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDIR1000Mimg from "../../assets/images/Sony-DIR-1000M.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyDIR1000M = () => {
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
                <img src={SonyDIR1000Mimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DIR-1000M Digital Instrumentation Recorder</h3>
                <p className="para">
                The Sony DIR-1000M Digital Instrumentation Recorder is a sophisticated device tailored for professionals in fields like engineering, scientific research, and industrial monitoring.</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>ID-1 Digital Instrumentation</strong>
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
               The SONY BVH-3100 is a professional-grade video tape recorder designed for broadcast and studio environments. With its robust features and reliable performance, it has been a staple in the industry for many years. </p>
                
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyDIR1000M