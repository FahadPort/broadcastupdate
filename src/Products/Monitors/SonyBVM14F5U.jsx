import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVM14F5Uimg from "../../assets/images/Sony-BVM-14F5U.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyBVM14F5U = () => {
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
                <img src={SonyBVM14F5Uimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVM-14F5U</h3>
                <p className="para">
                The Sony BVM-14F5U is a professional-grade CRT (Cathode Ray Tube) monitor designed </p>
               
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
                The BVM-14F5U features a 14-inch flat-screen CRT display. It utilizes Sony's Trinitron technology, known for its high-quality image reproduction, color accuracy, and excellent contrast. The monitor typically supports resolutions up to 800 TV lines, providing detailed and sharp images. It is capable of displaying both standard definition (SD) and high definition (HD) content. The aspect ratio can be adjusted to accommodate different broadcast standards, including 4:3 and 16:9. </p>
                
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

export default SonyBVM14F5U