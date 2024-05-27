import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicBTLH1710img from "../../assets/images/Panasonic-BT-LH1710.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicBTLH1710 = () => {
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
                <img src={PanasonicBTLH1710img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic BT-LH1710</h3>
                <p className="para">
                The Panasonic BT-LH1710 is a professional-grade LCD monitor</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Monitor</strong>
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
                The BT-LH1710 features a 17-inch LCD display. LCD technology provides high-quality image reproduction with accurate color rendering and brightness levels. The monitor typically supports high-resolution formats, including Full HD (1920 x 1080 pixels). It supports standard aspect ratios such as 16:9, suitable for broadcast and cinematic content. </p>
                
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
                <h3 className="sec-head">KEY FEATURES</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot/>Rugged aluminium frame</li>
<li><FaRegCircleDot/>31 type (787.4 mm) IPS LCD Panel</li>
<li><FaRegCircleDot/>4096 x 2160 resolution</li>
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

export default PanasonicBTLH1710