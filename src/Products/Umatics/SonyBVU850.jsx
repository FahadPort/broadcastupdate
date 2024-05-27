import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVU850img from "../../assets/images/bvu850.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyBVU850 = () => {
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
                <img src={SonyBVU850img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony BVU850</h3>
                <p className="para">
                The BVU-850 incorporates Sony's Superior Performance (SP) technology, to offer higher picture quality and dubbing capability.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Umatics</strong>
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
                  The BVU-850 incorporates Sony's Superior Performance (SP) technology, to offer higher picture quality and dubbing capability. Dolby C noise reduction and a new audio head block improves audio quality.

                 </p>
                 <p className="para">Many of these benefits can only be obtained when recording and playback in SP mode using Sony's KSP series tapes. Provision is also made for conventional cassettes.
</p>
                 <p className="para">In this way the BVU-850 embodies the performance characteristics to extend the application range of high band U-matic equipment and make a better companion to the Betacam in the studio environment.
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

export default SonyBVU850