import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyUVW1200img  from "../../assets/images/SonyUVW1200.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyUVW1200 = () => {
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
                <img src={SonyUVW1200img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony UVW1200</h3>
                <p className="para">
                UVW1200 is a Betacam SP Player that features built-in time base stabilizer, built-in time code reader, 90 minute playback, 

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
<li><FaRegCircleDot />Long Operating Time Accepts both S-size and L-size cassettes, offering operating times of up to 30 minutes and over 90 minutes respectively.</li>
<li><FaRegCircleDot />High Quality Audio Two longitudinal audio channels are provided. The high tape speed (118.6 mm/s) of the format and the adoption of the proven Dolby C-type Noise Reduction System provides the UVW1200 offers high quality audio with a wide dynamic range; even at high frequenc</li>
<li><FaRegCircleDot />High Speed Picture Search The high speed picture search provides a recognizable picture at various speeds over a range of up to five times normal speed in color, and up to 16 times normal speed in monochrome, both in forward and reverse.</li>
<li><FaRegCircleDot />Built-in Time Base Stabilizer Provides stable pictures without additional equipment. Advanced, high quality digital dropout compensation also ensures consistent picture performance.</li>
<li><FaRegCircleDot />Built-in Time Code Reader The Betacam SP format has an independent time code track; therefore, a longitudinal audio track does not have to be sacrificed for time code. A time code reader is built into the UVW1200. The time codes conform to the SMPTE standard, in which LTC and User</li>
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

export default SonyUVW1200