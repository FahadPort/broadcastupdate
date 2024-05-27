import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonySRW58002img from "../../assets/images/SonySRW-58002.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonySRW58002 = () => {
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
                <img src={SonySRW58002img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony/SRW-5800/2</h3>
                <p className="para">
                The SRW-5800/2 HDCAM-SR Studio Recorder is Sony's top-of-the-line full-bandwidth VTR. The deck is used in conjunction with the company's CineAlta line of cameras, to deliver the pinnacle in high-definition program ingest and transfer.  </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HD Cam SR</strong>
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
                The SRW-5800/2 HDCAM-SR Studio Recorder is Sony's top-of-the-line full-bandwidth VTR. The deck is used in conjunction with the company's CineAlta line of cameras, to deliver the pinnacle in high-definition program ingest and transfer. The HDCAM-SR format has been widely accepted by top professionals as the HD format of choice due to Sony's commitment to providing the highest quality solutions for the most demanding cinematographers and HD broadcasters.
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
                <p className="para">
                <ul>
<li><FaRegCircleDot/>4:4:4 Mode</li>
<li><FaRegCircleDot/>2K Real-time Record & Playback</li>
<li><FaRegCircleDot/>Network Capability</li>
<li><FaRegCircleDot/>Multiple Frame Rates</li>
<li><FaRegCircleDot/>880Mbps Maximum Bandwidth Rate</li>
<li><FaRegCircleDot/>3D RGB & Double-speed Playback</li>
<li><FaRegCircleDot/>Internal Format Conversion</li>
<li><FaRegCircleDot/>1080 50/60p (422) Support</li>
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

export default SonySRW58002