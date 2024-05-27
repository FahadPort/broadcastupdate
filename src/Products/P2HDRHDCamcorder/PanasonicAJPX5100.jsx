import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAJPX5100img from "../../assets/images/PanasonicAJPX5100.png"



import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const PanasonicAJPX5100 = () => {

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
                <img src={PanasonicAJPX5100img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Panasonic AJ-PX5100
</h3>
                <p className="para">
                High-End ENG Camera Recorder with HDR Acquisition and RTSP/RTMP Streaming/Transmission.


 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>P2 HDR HD Camcorder</strong>
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
                  In addition to high sensitivity 2/3 type 3MOS image sensors and FHD/60p/50p AVC-ULTRA codec, the AJ-PX5100GJ newly supports HDR (HLG) recording and RTMP on-air streaming.
This high-end ENG camera recorder fits the multiple usage of the broadcast workflow.
 </p>
                 
                 
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
                  High Picture Quality                  </h3>
                  <p className="para">
                  <ul>
<li><FaRegCircleDot />High Sensitivity, Low Noise 2/3 type 3MOS Image Sensors</li>
<li><FaRegCircleDot />HDR Compliant (HLG “Hybrid Log-Gamma”)</li>
<li><FaRegCircleDot />FHD Image Acquisition by High-Quality AVC-ULTRA Codecs</li>
<li><FaRegCircleDot />HD/SD Multi-Image Format</li>
<li><FaRegCircleDot />Reliable Recording Media: P2 Card/microP2 Card</li>
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

export default PanasonicAJPX5100