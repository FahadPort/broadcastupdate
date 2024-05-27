import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SONYPCM7040img from "../../assets/images/SONYPCM7040.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SONYPCM7040 = () => {
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
                <img src={SONYPCM7040img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">SONY PCM-7040</h3>
                <p className="para">
                PCM DAT 1996-2000
Professional </p>
               
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
               
<p className="para">
<ul>
<li><FaRegCircleDot />Type: digital audio tape deck</li>
<li><FaRegCircleDot />Track System: 2-channel stereo</li>
<li><FaRegCircleDot />Tape Speed: 8.15 mm/s</li>
<li><FaRegCircleDot />Recording Time: 120 minutes</li>
<li><FaRegCircleDot />Heads: 2000rpm, rotary 4 head</li>
<li><FaRegCircleDot />D/A Converter: 16-bit linear</li>
<li><FaRegCircleDot />A/D Converter: 16 bit linear</li>
<li><FaRegCircleDot />Sampling Frequency: 48, 44.1kHz</li>
<li><FaRegCircleDot />Frequency Response: 20Hz to 20kHz</li>
<li><FaRegCircleDot />Signal to Noise Ratio: 90dB</li>
<li><FaRegCircleDot />Total Harmonic Distortion: 0.05%</li>
<li><FaRegCircleDot />Digital Inputs: AES</li>
<li><FaRegCircleDot />Digital Outputs: AES</li>
<li><FaRegCircleDot />Dimensions: 424 x 132 x 360mm</li>
<li><FaRegCircleDot />Weight: 10kg</li>
<li><FaRegCircleDot />Accessories: RM-D7100 remote control</li>
<li><FaRegCircleDot />Year: 1996</li>
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

export default SONYPCM7040