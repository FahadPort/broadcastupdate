import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAGW1PMultisystemVHSimg from "../../assets/images/PanasonicAG-W1-P-MultisystemVHS.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicAGW1PMultisystemVHS = () => {
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
                <img src={PanasonicAGW1PMultisystemVHSimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AG-W1-P Multisystem VHS</h3>
                <p className="para">
                The Panasonic AG-W1-P Multisystem VHS is a VHS video cassette recorder designed to accommodate multiple video standards, making it suitable for use in various regions with different television systems. Here are some key features and details about this product:
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>SVHS</strong>
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
               <p className="para"> The AG-W1-P is capable of playing and recording VHS tapes in multiple video standards, including NTSC, PAL, and SECAM. This versatility allows users to playback and record VHS tapes from different regions without compatibility issues. The AG-W1-P works with the VHS format, which was a widely used consumer video recording standard popular from the late 1970s through the 1990s. VHS tapes can record analog video and audio signals.</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
   
      </Container>
    </div>
  




  </Grid>
  )
}

export default PanasonicAGW1PMultisystemVHS