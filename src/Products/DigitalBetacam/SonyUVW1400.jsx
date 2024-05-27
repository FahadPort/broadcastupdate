import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyUVW1400img from "../../assets/images/SonyUVW1400.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyUVW1400 = () => {
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
                <img src={SonyUVW1400img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony UVW1400</h3>
                <p className="para">
                Sony UVW-1400AP Betacam SP Recorder PAL

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Betacamp</strong>
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
<li><FaRegCircleDot />Outstanding picture quality, thanks to Betacam SP format</li>
<li><FaRegCircleDot />More than 100 minutes of recording/playback time using L-size metal Betacam SP cassettes</li>
<li><FaRegCircleDot />Two longitudinal audio channel with the Dolby C-type Noise Reduction system shown in unique bargraph indicators</li>
<li><FaRegCircleDot />Dedicated longitudinal time code track</li>
<li><FaRegCircleDot />Built-in Time Base Stabilizer with advanced high quality digital dropout compensation</li>
<li><FaRegCircleDot />Built-in EBU time code (LTC/User-bit) generator and reader</li>
<li><FaRegCircleDot />25-pin remote control interface complied with RS-232C interface for external computer operation</li>
<li><FaRegCircleDot />Y/R-Y/B-Y component signal inputs and outputs via BNCconnectors are switchable to RGB input/output connector</li>
<li><FaRegCircleDot />S-video (Y/C separate) input/output connectors</li>
<li><FaRegCircleDot />Foot switch control capability</li>
<li><FaRegCircleDot />Trigger remote out for video printers (stereo mini jack)</li>
<li><FaRegCircleDot />Back space editing for smooth transitions between scenes with optional remote controller</li>
<li><FaRegCircleDot />High speed picture search provides recognizable colour picture at up to 5 times normal speed in forward and reverse (16 times in monochrome)</li>
<li><FaRegCircleDot />Built-in character generator to monitor display information such as VTR status, time code, self-diagnostic messages, setup menu,and so on</li>
<li><FaRegCircleDot />Auto repeat function</li>
<li><FaRegCircleDot />Initial setup menu to preset various detailed operational parameters</li>
<li><FaRegCircleDot />Digitalhours meter</li>
<li><FaRegCircleDot />Built-in self diagnostics with detailedwarning messages</li>
<li><FaRegCircleDot />Compact and lightweight (4 unitshigh, approx. 19 kg/41 lb 14 oz), 19-inch rack mountable and low power consumption (85W)</li>
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

export default SonyUVW1400