import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDSR20img from "../../assets/images/Sony-DSR20.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"
import SnellWilcoxCVR45DTVStandardsconverterimg from "../../assets/images/Snell-Wilcox-CVR45D-TV-Standards-converter.jpg"

const SnellWilcoxCVR45DTVStandardsconverter = () => {
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
                <img src={SnellWilcoxCVR45DTVStandardsconverterimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Snell Wilcox CVR45D-TV Standards converter </h3>
                <p className="para">
                The Snell Wilcox CVR45D-TV is a professional video standards converter </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Frame Synchronizer</strong>
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
                  The CVR45D-TV is capable of converting video signals between different television standards, allowing for seamless integration of video equipment operating in different regions or formats. It supports conversion between PAL, NTSC, and SECAM standards. The CVR45D-TV ensures high-quality conversion of video signals, preserving the integrity of the original image quality and minimizing artifacts or degradation introduced during the conversion process. It utilizes advanced processing algorithms to maintain optimal picture quality.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SnellWilcoxCVR45DTVStandardsconverter