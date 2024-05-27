import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPXWFS7M2img from "../../assets/images/Sony-PXW-FS7-M2.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPXWFS7M2 = () => {
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
                <img src={SonyPXWFS7M2img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony PXW-FS7 M2 </h3>
                <p className="para">
                Sony PXW-FS7M2 XDCAM Super 35 Camera System
</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>4K XDCAM</strong>
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
                  Sony PXW FS7M2 XDCAM Super 35 Camera System is a flexible 4K camera system. Designed as a camera that is at home on productions as diverse as documentaries, reality TV, commercial, and corporate applications It features a Super 35mm sized sensor that allows you to capture images with cinematic depth of field. The camera incorporates a stronger locking E-mount that is fully compatible with E-Mount lenses, and supports all electronic connections. The locking mount reduces lens play, and allows you to use most 35mm lenses including PL, EF, Leica, and Nikon via optional adapters. This stronger E-mount is ideal for using heavier-long cine-zooms without the need for additional lens support.</p>    </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyPXWFS7M2