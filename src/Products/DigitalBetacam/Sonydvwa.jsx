import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDVWA500img from "../../assets/images/SonyDVWA500.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Sonydvwa = () => {

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
                <img src={SonyDVWA500img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DVWA500     </h3>
                <p className="para">
                Digibeta Editing Recorder with Analog & SP Betacam playback capability. Optional BKDW-505

</p>


               
                <p className="price">Call Now</p>
               

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
                Digibeta Editing Recorder with Analog & SP Betacam playback capability. Optional BKDW-505</p>
            
                <p className="para">
                Digital Betacam Editing Recorder. The DVW-A500features Betacam andBetacam SP playback capability, pre-read capability for video and audio, serial digital V/A interface (SMPTE 259M) along with built-in Component analog video and audio interfaces, and an optional Composite analog input (BKDW-505).Built-in A/D and D/A converters for both audio and video signals allow for direct interfacing with analog equipment.Delivers picture in shuttle mode up to speeds of approx. 50 times normal playback. The DVW-A500 also has a Program Play mode which allows video recordings to be reproduced over a range of15% normal speed, in increments of 0.1%.
                </p>
                <p className="para">
                <ul>
<li><FaRegCircleDot />Superb Picture Quality</li>
<li><FaRegCircleDot />High Quality Audio</li>
<li><FaRegCircleDot />Betacam and Betacam SP® Playback Capability</li>
<li><FaRegCircleDot />Versatile Integration into Current Analog Systems</li>
<li><FaRegCircleDot />Digital Jog Sound</li>
<li><FaRegCircleDot />High Speed Picture Search</li>
<li><FaRegCircleDot />Dynamic Tracking Playback</li>
<li><FaRegCircleDot />Program Play</li>
<li><FaRegCircleDot />Reliable Tape Transport</li>
<li><FaRegCircleDot />Channel Condition Monitoring</li>
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

export default Sonydvwa