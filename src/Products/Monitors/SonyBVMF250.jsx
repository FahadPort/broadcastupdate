import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVMF250img from "../../assets/images/Sony-BVM-F250.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyBVMF250 = () => {
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
                <img src={SonyBVMF250img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVM-F250 </h3>
                <p className="para">
                The Sony BVM-F250 is a professional-grade OLED (Organic Light Emitting Diode) monitor  </p>
               
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
                The Sony BVM-F250 is a professional-grade OLED (Organic Light Emitting Diode) monitor designed for critical monitoring applications in broadcast, post-production, and professional video editing. </p>
                <p className="para">The BVM-F250 features a 25-inch OLED display. OLED technology provides superior image quality compared to traditional LCD displays, offering deeper blacks, wider viewing angles, and faster response times. The monitor typically supports high-resolution formats, including Full HD (1920 x 1080 pixels) and even higher resolutions depending on the model and configuration.</p>
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  
  




  </Grid>
  )
}

export default SonyBVMF250