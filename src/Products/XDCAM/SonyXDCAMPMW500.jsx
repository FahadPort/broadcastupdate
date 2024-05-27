import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyXDCAMPMW500img from "../../assets/images/SonyXDCAM-PMW-500.jpeg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyXDCAMPMW500 = () => {
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
                <img src={SonyXDCAMPMW500img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony XDCAM PMW-500</h3>
                <p className="para">
                The Sony XDCAM PMW-500 is a high-definition camcorder designed for professional broadcast and video production applications.</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>XDCAM</strong>
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
                  The PMW-500 utilizes the XDCAM HD422 format, offering high-quality recording in Full HD (1920 x 1080) resolution at various frame rates. XDCAM HD422 is a widely accepted format in the broadcast industry due to its high image quality and efficient compression. The camcorder is equipped with three advanced 2/3-inch Exmor CMOS sensors, enabling it to capture clear, detailed images with low noise even in low-light conditions. The sensors provide excellent color reproduction and dynamic range for professional-quality footage.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyXDCAMPMW500