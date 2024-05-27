import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPXWZ150img from "../../assets/images/SonyPXWZ150.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPXWZ150 = () => {
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
                <img src={SonyPXWZ150img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PXWZ150</h3>
                <p className="para">
                Ready for any shooting scenario, Sony’s PXW-Z150 handy professional camcorder delivers stunning 4K image quality, 120fps HFR Full-HD slow-motion and built-in advanced networking for live streaming and wireless workflow.
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
                Ready for any shooting scenario, Sony’s PXW-Z150 handy professional camcorder delivers stunning 4K image quality, 120fps HFR Full-HD slow-motion and built-in advanced networking for live streaming and wireless workflow.
</p>
           <p className="para">
           <ul>
<li><FaRegCircleDot/>UHD 4K (3840 x 2160) up to 30p</li>
<li><FaRegCircleDot/>Sony G Lens with 12x Optical Zoom</li>
<li><FaRegCircleDot/>SDI Out: 1 x BNC (3G-SDI)</li>
<li><FaRegCircleDot/>HDMI Output: 1 x Type A</li>
<li><FaRegCircleDot/>Single 1" Exmor RS CMOS Sensor</li>
<li><FaRegCircleDot/>HD up to 120 fps</li>
<li><FaRegCircleDot/>18/24x Clear Image Zoom/48x Digital Zoom</li>
<li><FaRegCircleDot/>Discrete Manual Focus, Zoom, Iris Rings</li>
<li><FaRegCircleDot/>XAVC, AVC/H.264, AVCHD 2.0, MPEG-4</li>
<li><FaRegCircleDot/>Slow and Quick Motion Function</li>
<li><FaRegCircleDot/>Two SD Memory Card Slots, Wi-Fi</li>
<li><FaRegCircleDot/>2 x 3-Pin XLR Audio Inputs</li>
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

export default SonyPXWZ150