import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tektronix1730Uimg from "../../assets/images/Tektronix1730.jpeg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Tektronix1730 = () => {
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
                <img src={Tektronix1730Uimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Tektronix 1730</h3>
                <p className="para">
                Tektronix 1730 Waveform Monitor and 1720 Vectorscope As-Is CG00NYH



 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Vectorscope</strong>
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
               <p className="para">The Tektronix 1730 Series Waveform Monitors and 1720 Series Vectorscopes provide comprehensive television signal monitoring for both NTSC and PAL applications. These versatile instruments are lightweight, half-rack width, and have bright CRTs for video signal monitoring. Both instruments exceed normal monitoring capabilities, and their unique features make them even more powerful when operated in tandem. Each monitor has its own advanced feature set and the proven 1700 Series family performance to provide more monitor for the money. These monitors do the job faster, better, and easier at an economical price.



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

export default Tektronix1730