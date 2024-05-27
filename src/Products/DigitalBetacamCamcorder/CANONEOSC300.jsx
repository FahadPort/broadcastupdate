import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CANONEOSC300img from "../../assets/images/CANONEOSC300.png";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const CANONEOSC300 = () => {

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
                <img src={CANONEOSC300img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Canon EOS C300</h3>
                <p className="para">
                A ground-breaking professional camera. Fuse Canon’s proven video and lens technology with EOS creativity.



 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Digital Betacam Camcorder</strong>
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
                A ground-breaking professional cine camera, EOS C300 fuses Canon’s proven video technology and lens heritage with EOS creativity. Interchangeable EF lenses give unprecedented freedom to tell every story.



</p>
<p className="para">
<ul>
<li><FaRegCircleDot/>8.3MP Super 35mm CMOS sensor; Full HD</li>
<li><FaRegCircleDot/>Interchangeable lens (EF mount)</li>
<li><FaRegCircleDot/>Dual pixel CMOS AF for accurate and reliable focusing*</li>
<li><FaRegCircleDot/>Compact, modular, lightweight</li>
<li><FaRegCircleDot/>50Mbps MPEG-2 MXF to CF card</li>
<li><FaRegCircleDot/>High sensitivity, low noise</li>
<li><FaRegCircleDot/>Canon Log Gamma</li>
<li><FaRegCircleDot/>24.00p for movie production</li>
<li><FaRegCircleDot/>Wi-Fi remote control</li>
<li><FaRegCircleDot/>Seamless workflow integration</li>
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

export default CANONEOSC300