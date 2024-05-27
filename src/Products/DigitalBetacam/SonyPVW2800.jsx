
import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPVW2800img from "../../assets/images/SonyPVW2800.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPVW2800 = () => {

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
                <img src={SonyPVW2800img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PVW2800</h3>
                <p className="para">
                Sony PVW-2800P Betacam SP Editing Recorder PAL

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
<li><FaRegCircleDot />Superior picture quality, inherent in the Betacam SP format</li>
<li><FaRegCircleDot />More than 100 minutes of recording/playback time using L-size Metal (for both recording and playback) or Oxide (for playback only) cassettes</li>
<li><FaRegCircleDot />High speed picture search provides recognizable colour pictures at up to 10 times normal speed in forward and reverse (24 times in monochrome)</li>
<li><FaRegCircleDot />Two longitudinal audio channels with Dolby C-type NR (Noise Reduction) system</li>
<li><FaRegCircleDot />RS-422A 9-pin interface with other RS-422A equipped Sony machines (ex. Betacam/Betacam SP VTRs, DVCAM VTRs)</li>
<li><FaRegCircleDot />Built-in comprehensive editing facilities *Dynamic Motion Control with memory provides slow-motion editing capability (when used with a player VTR equipped with DT function)</li>
<li><FaRegCircleDot />Built-in Time Base Corrector with advanced high quality digital dropout compensator *TBC remote control from an optional UVR-60P</li>
<li><FaRegCircleDot />Built-in LTC/VITC/User Bits generator and reader</li>
<li><FaRegCircleDot />Built-in character generator</li>
<li><FaRegCircleDot />Enhanced serviceability with built-in self-diagnostics</li>
<li><FaRegCircleDot />User friendly dial menu operation</li>
<li><FaRegCircleDot />Y/R-Y/B-Y component signal inputs and outputs via BNC or 12-pin Betacam DUB connectors</li>
<li><FaRegCircleDot />S-video (Y/C separate) input/output connectors</li>
<li><FaRegCircleDot />7-pin U-matic DUB output capability (option)</li>
<li><FaRegCircleDot />Compact and lightweight (5 unit high, 19-inch rack mountable, approx. 25 kg/55 lb 2 oz)</li>
<li><FaRegCircleDot />Low power consumption (150W)</li>
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

export default SonyPVW2800