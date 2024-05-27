import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDSR2000img from "../../assets/images/SonyDSR2000.png";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyDSR2000 = () => {
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
                <img src={SonyDSR2000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DSR-2000 </h3>
                <p className="para">
                Sony DSR-2000 Digital Video Cassette Recorder DVCam Editor - Made in Japan
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DvCam</strong>
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
<li><FaRegCircleDot/> Condition: used</li>
<li><FaRegCircleDot/> Brand: Sony</li>
<li><FaRegCircleDot/> Film Format: DV: DVCAM</li>
<li><FaRegCircleDot/> Type: Editing Controller</li>
<li><FaRegCircleDot/> Model: Sony DSR-2000 Digital Video Cassette Recorder</li>
<li><FaRegCircleDot/> Compatible Mount: Rack Mount</li>
<li><FaRegCircleDot/> Media Format: MiniDV</li>
<li><FaRegCircleDot/> Functions: Digital Video Cassette Recorder</li>
<li><FaRegCircleDot/> MPN: DSR-2000</li>
<li><FaRegCircleDot/> Country/Region of Manufacture: Japan</li>
<li><FaRegCircleDot/> Product Line: Sony DVCam</li>
</ul>
      </p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Features
</h3>
               <p className="para">The DVCAM Digital Component Recording Format The DVCAM format is the professional extension of the consumer DV format. The DSR-2000 employs the DVCAM format which uses 8-bit digital component recording with 5:1 compression ratio and sampling at the rate of 4:1:1 to provide high picture quality and m</p>
               <p className="para">Playback Compatibility with All DV (25 Mbps) Format The DSR2000 is designed to support all DV (25Mbps) format recorded tapes, including DV tapes recorded in LP mode and DVCPRO tapes without an adapter.</p>
               <p className="para">Pre-Read Editing Capability Thanks to newly developed digital processing, the DSR2000 incorporates a preread editing capability never before offered in a 6.35 mm (1/4 inch) VTR. This feature allows the editor to execute a picture transition with effects between two VTRs as well as a</p>
               <p className="para">DMC (Dynamic Motion Control) Equipped with Sony's Dynamic Motion Control Editor function, the DSR-2000 provides noiseless slow-motion playback within the range of -1 to +1 times normal speed.</p>
               <p className="para">Functionally Designed Operating Panel Incorporating a front panel with a built-in Jog/Shuttle dial allows two-machine editing. An optional front panel (DSBK-200) enables the editor to perform the functions of the DSR-2000 from a distance of up to 10 m.</p>
               <p className="para">Excellent Editing Performance Quick, mechanical response time is an essential requirement for professional editing. To achieve this, the DSR-2000 uses a direct reel and drum monitor mechanism. The DSR-2000 has the industry standard RS-422A Sony 9-pin remote control interface. This all</p>
               <p className="para">Versatile Interfaces All conventional analog interfaces for video, audio and time code are supported by the DSR-2000. In addition, it has digital interfaces such as the SDI, SDTI(QSDIâ„¢), AES/EBU as standards, and i.LINK (DV In/Out), and SDTI (MPEG Out) as options.</p>
               <p className="para">ClipLinkâ„¢ The DSR-2000's ClipLink function allows for quick and easy editing with other DVCAM camcorders featuring ClipLink or the ES-7 EditStationâ„¢.</p>
               <p className="para">4-Channel Audio Editing The DSR-2000 is capable of 4-Channel independent audio editing.</p>
             
                
         
            
                
                
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyDSR2000