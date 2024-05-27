import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bryston3BAmplifierimg from "../../assets/images/Bryston3BAmplifier.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const Bryston3BAmplifier = () => {
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
                <img src={Bryston3BAmplifierimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Bryston 3B Amplifier</h3>
                <p className="para">
                The Bryston 3B3 is dual-channel (stereo) amplifier designed for a wide range of medium to high …</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Audio</strong>
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
                <p className="para">The Bryston 3B3 is dual-channel (stereo) amplifier designed for a wide range of medium to high power audio/video systems. It serves up medium to high amounts of power without sacrificing sonic accuracy and long-term reliability.

</p>
                <p className="para">
                <ul>
<li><FaRegCircleDot />Active extremely low distortion input buffer</li>
<li><FaRegCircleDot />Balanced and Single Ended audio inputs</li>
<li><FaRegCircleDot />Selectable gain at 23 or 29dB</li>
<li><FaRegCircleDot />Regulated power supplies to all voltage gain stages</li>
<li><FaRegCircleDot />Independent power supplies for each channel</li>
<li><FaRegCircleDot />Convection cooled and housed in a fully aluminum chassis</li>
<li><FaRegCircleDot />No fans or other moving parts</li>
<li><FaRegCircleDot />Bridging switch configures amplifier into a single 400W Channel</li>
<li><FaRegCircleDot />Harmonic Distortion: ≥.005% from 20Hz to 20kHz at 200W</li>
<li><FaRegCircleDot />Noise below full output: -110dB single ended, -113dB balanced</li>
<li><FaRegCircleDot />Slew Rate: 60V/μS</li>
<li><FaRegCircleDot />Power Bandwidth: .5Hz to 100kHz</li>
<li><FaRegCircleDot />Damping Factor: 500 at 20Hz (8Ω)</li>
<li><FaRegCircleDot />Switchable Gain: 23dB or 29dB</li>
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

export default Bryston3BAmplifier