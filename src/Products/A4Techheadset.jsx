import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headset from "../assets/images/headset.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const A4Techheadset = () => {
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
                <img src={headset} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">A4Tech HS-8i Stereo Headset</h3>
                <p className="para">
                The soft ear-pad covers comfortably on the ear to provide absolute sound quality as if you're in your own world.
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
<li><FaRegCircleDot />40mm Speaker Unit: High-precision 40mm speaker unit provides crystal clear sound.</li>
<li><FaRegCircleDot />Optimum Fit Headband: Constructed with an adjustable headband for a comfortable experience.</li>
<li><FaRegCircleDot />Soft Leather Ear Pads: Soft and lightweight leather ear pads ensure comfortable wearing for hours of use.</li>
<li><FaRegCircleDot />Rotatable Omni-Directional Mic: The omni-directional microphone offers clear communication.</li>
<li><FaRegCircleDot />Adjustable Volume Control Knob: The volume knob on the headphone housing for convenient control.</li>
</ul></p>
                  
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default A4Techheadset