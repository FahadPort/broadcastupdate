import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TektronixWFM8200img from "../../assets/images/Tektronix-WFM8200.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const TektronixWFM8300 = () => {
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
                <img src={TektronixWFM8200img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Tektronix WFM8300</h3>
                <p className="para">
                Tektronix WFM8300 Advanced Analog/SD/HD/3G-SDIWaveform Monitor

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Waveform Monitor:</strong>
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
               The WFM8300 Advanced Analog/SD/HD/3G-SDIWaveform Monitor from Tektronix is designed to provide an array of measurement and monitoring capabilities for both video and audio signals. This model features the complete range of options of the product family and comes standard with HD/SD-SDI and dual-link video format support. The unit's performance can be enhanced with separate add-on options to include support for additional signal formats. It can provide monitoring and measurement for applications in a wide range of video formats, including composite analog, SD-SDI, HD-SDI, dual-link video formats, and 3G-SDI signals. It also offers support for a variety of audio formats, including analog, digital AES/EBU, digital embedded, Dolby Digital, and Dolby E.</p>
                
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default TektronixWFM8300