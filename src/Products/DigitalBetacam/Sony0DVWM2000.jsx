import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDVWM2000img from "../../assets/images/Sony-DVW-M2000.png"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Sony0DVWM2000 = () => {
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
                <h3 className="sec-head">Sony DVW-M2000</h3>
                <p className="para">
                Digital Betacam Play and Record Betacam, Beta SP, Beta SX, and MPEG IMX Playback Only
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Digital Betacamp</strong>
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
<li><FaRegCircleDot/>Signal System: NTSC</li>
<li><FaRegCircleDot/>Tape Format:  Digital Betacam Play and Record Betacam, Beta SP, Beta SX, and MPEG IMX Playback Only</li>
<li><FaRegCircleDot/>Tape Speed: Digital Betacam-96.7mm/sec.</li>
<li><FaRegCircleDot/>Signal-to-Noise Ratio: Not Specified by Manufacturer</li>
<li><FaRegCircleDot/>Maximum Recording Time: 124 Minute Digital Beta Cassette</li>
<li><FaRegCircleDot/>Audio Signal Format: 20 Bit / 48kHz</li>
<li><FaRegCircleDot/>Frequency Response: 20 Hz to 20kHz</li>
<li><FaRegCircleDot/>Signal to Noise Ratio: Not Specified by Manufacturer</li>
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

export default Sony0DVWM2000