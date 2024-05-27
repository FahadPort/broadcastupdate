import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tvlogicsimg  from "../../assets/images/TVLogic_XVM-245W.png"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const TVLogic = () => {
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
                <img src={tvlogicsimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">TVLogic_XVM-245W</h3>
                <p className="para">
                High-Purity Precision RGB Matrix LED Backlight Array
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Monitor</strong>
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
<li><FaRegCircleDot />1920 x 1080 Native HD Resolution (Panel Resolution 1920 x 1200)</li>
<li><FaRegCircleDot />10 bit - 1.07 Billion Colors Support</li>
<li><FaRegCircleDot />High-Purity Precision RGB Matrix LED Backlight Array</li>
<li><FaRegCircleDot />2 x HD/SD SDI inputs</li>
<li><FaRegCircleDot />1 x DVI-I input (W/HDCP) and 1 x HDMI input (W/HDCP)</li>
<li><FaRegCircleDot />Analog Component/Composite/S-Video/RGB Inputs</li>
<li><FaRegCircleDot />1:1 Pixel Mapping Modes for SD/HD</li>
<li><FaRegCircleDot />Audio Disembedder & Speakers</li>
<li><FaRegCircleDot />Optional 19" Rack Mount Kit available (also VESA compatible)</li>
<li><FaRegCircleDot />Supports TVLogic Color Calibration Utility for proper color alignment</li>
<li><FaRegCircleDot />Dual-Link/3G Mode - 4:4:4/1080p/60 compatible</li>
<li><FaRegCircleDot />Matte Finish Panel</li>
<li><FaRegCircleDot />Waveform/Vector Scope (Line selectable)</li>
<li><FaRegCircleDot />Supports External Sync input</li>
<li><FaRegCircleDot />Supports 3D LUT & Adjustable Gamma (1.0 to 3.0) and user defined</li>
<li><FaRegCircleDot />Supports 3rd party 3D LUT formats for import and export</li>
<li><FaRegCircleDot />Supports Multi-point Calibration for RGB and White uniformity correction</li>
<li><FaRegCircleDot />Timecode Display (VITC/VTC), Dynamic UMD Display</li>
<li><FaRegCircleDot />Closed Caption: CEA-608/708</li>
<li><FaRegCircleDot />Embedded Audio Level Meter (16 Ch)</li>
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

export default TVLogic