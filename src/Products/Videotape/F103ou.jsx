import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import F1030U from "../../assets/images/F1030U.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const F103ou = () => {

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
                <img src={F1030U} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">JVC KY-F1030U
</h3>
                <p className="para">
                SXGA DIGITAL IMAGE CAPTURE CAMERA


 </p>
               
                <p className="price">$3,744.35</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Other Cameras
</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    
    <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
            <Col xs="12">
                <div className="innerContent" data-aos="fade-right" >
                  <h3 className="sec-head">
                  Model Details
                  </h3>
                  <p className="para">The KY-F1030U is a new generation imaging camera with innovative features like live, 7.5 fps, full-size SXGA preview and an IEEE 1394 Single Cable Solution. It's ideal for medical or materials analysis microscope applications, and a wide range of other imaging applications. The KY-LINK software provided with the optional PFW-41 EEE1394 board offers a variety of image enhancement, processing and camera calibration tools.
</p>
                  <p className="para">
        
<ul>
<li><FaRegCircleDot />1.45 million Pixel 1/2" CCD with</li>
<li><FaRegCircleDot />Progressive Scanning</li>
<li><FaRegCircleDot />1360 x 1024/1280 x 960 Switchable Resolution</li>
<li><FaRegCircleDot />Dual Output: IEEE1394 and RGB Analog</li>
<li><FaRegCircleDot />C-mount</li>
<li><FaRegCircleDot />Long Integration Shutter</li>
<li><FaRegCircleDot />Dual Power Supply: IEEE1394 and AC Power</li>
<li><FaRegCircleDot />IEC601-1 and UL-2601 Medical Approval</li>
<li><FaRegCircleDot />JVC's Proprietary "KY-LINK" Image Acquisition Software Available</li>
<li><FaRegCircleDot />Motorized Zoom Lens Control Capability</li>
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

export default F103ou