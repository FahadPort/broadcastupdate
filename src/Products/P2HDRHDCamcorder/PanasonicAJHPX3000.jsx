import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAJHPX3000img from "../../assets/images/PanasonicAJHPX3000.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const PanasonicAJHPX3000 = () => {

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
                <img src={PanasonicAJHPX3000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Panasonic AJ-HPX3000
</h3>
                <p className="para">
                New 2.2 Million Pixel CCDs and AVC-I team up to deliver Panasonic's first Native 1080p* capable camera, and full 10 bit 1920x1080 recording.


 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>P2 HDR HD Camcorder </strong>
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
                  Panasonic developed the AJ-HPX3000 with the goal of achieving the industry's best-ever HD recording quality in a one-piece camcorder. </p>
                  <p className="para">JVC branded KR-M545E, KR-M800E & KR-M860E and Panasonic AU-W33H & AU-W35H and AU-62HE.
</p>
                  <p className="para">This advanced memory card camera-recorder uses three high-density, 2.2-million-pixel CCDs to produce full-raster, 1920 x 1080 HD images. These highresolution 1080 images are then recorded using full sampling (10-bit/4:2:2) based on advanced AVCIntra intra-frame compression technology. The result is a camera-recorder that approaches stunning D-5 HD-level images. 
</p>
                  <p className="para">
                  The AJ-HPX3000 backs this performance with a host of features that support high-end program production. Picture-enhancing technologies include Chromatic Aberration Compensation and multigamma settings complete with Film-Rec mode. Its 60/50 Hz switching allows use anywhere in the world, and recording is possible in SD (DVCPRO 50, 480i/576i). It has five slots to accommodate 16GB P2 cards to provide you extended recording time, and HD/SD-SDI input is available as an option. 
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

export default PanasonicAJHPX3000