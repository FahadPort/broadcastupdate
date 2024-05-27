import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sony from "../assets/images/sony.png";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const Applemonitor = () => {
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
                <img src={sony} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony HDC-3500L</h3>
                <p className="para">
                Three 2/3-inch 4K CMOS sensors portable system camera for fiber operation 
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Devices</strong>
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
                  <p className="para">
          
<ul>
<li><FaRegCircleDot />1080p HD/SD Digital Triax Broadcast Camera</li>
<li><FaRegCircleDot />4K Output from CCU (optional)</li>
<li><FaRegCircleDot />Supports Triax Cable Runs Up to 5,900 ft</li>
<li><FaRegCircleDot />2/3" Type CMOS Sensor</li>
<li><FaRegCircleDot />F12 Sensitivity for 1080/59.94i, -62dB</li>
<li><FaRegCircleDot />Global Shutter eliminates “Jello effect” and banding noise</li>
<li><FaRegCircleDot />Large Lens Support via Optional Adapters</li>
<li><FaRegCircleDot />ND/CC Dual Optical Servo Filters</li>
<li><FaRegCircleDot />Records 1080p59.94/50, 720p, 1080PsF</li>
<li><FaRegCircleDot />16-Bit A/D Converter</li>
<li><FaRegCircleDot />Works with HDCU-3100 Fiber CCU</li>
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

export default Applemonitor