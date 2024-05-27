import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AMPEXAVR3img from "../../assets/images/Ampex-AVR3.jpeg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AMPEXAVR3 = () => {
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
                <img src={AMPEXAVR3img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Ampex AVR3 </h3>
                <p className="para">
                The Ampex AVR-3 is a professional-grade video tape recorder (VTR) designed for broadcast,</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>2 INCH QUAD</strong>
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
         The Ampex AVR-3 is compatible with various analog video formats, including NTSC and PAL standards. It supports both composite video and component video signals, providing versatility for different broadcasting systems. The AVR-3 offers high-quality recording capabilities, ensuring clear and crisp video footage suitable for broadcast standards. It utilizes advanced recording mechanisms to maintain excellent picture quality and fidelity during the recording process.
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

export default AMPEXAVR3