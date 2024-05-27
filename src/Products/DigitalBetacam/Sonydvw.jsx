import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDVW500Pimg from "../../assets/images/SonyDVW500P.jpg" 

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Sonydvw = () => {

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
                <img src={SonyDVW500Pimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DVW500</h3>
                <p className="para">
                Digibeta Editing Recorder (PAL)

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
               <ul>
<li><FaRegCircleDot />Component digital recording</li>
<li><FaRegCircleDot />Four channels of 20-bit dynamic digital audio (18-bit A/D and D/A conversion)</li>
<li><FaRegCircleDot />Recording time of up to 124 minutes on a large cassette and 40 minutes on a Small cassette</li>
<li><FaRegCircleDot />Identical dimensions with BVW BETACAM SP VTRs</li>
<li><FaRegCircleDot />Can be installed in LMS and Flexicart multi-cassette systems</li>
<li><FaRegCircleDot />SDI (Serial Digital Interface) input/output capability</li>
<li><FaRegCircleDot />Digital Jog Sound provides full recovery of digital audio in jog mode</li>
<li><FaRegCircleDot />Color picture search of up to 50 times normal playback speed</li>
<li><FaRegCircleDot />Dynamic Tracking (DT) playback within the range of -1 to +3 times normal playback speed</li>
<li><FaRegCircleDot />Program play within the range of 15% normal speed (audio program play is also available with the optional BKDW-507 audio program play board)</li>
<li><FaRegCircleDot />Preread editing capability *Digital audio crossfade</li>
<li><FaRegCircleDot />Automatic equalizer and auto edit tracking allows adjustment-free operation</li>
<li><FaRegCircleDot />Multi-loop test facility</li>
<li><FaRegCircleDot />Built-in signal generator</li>
<li><FaRegCircleDot />Versatile system interface;</li>
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

export default Sonydvw