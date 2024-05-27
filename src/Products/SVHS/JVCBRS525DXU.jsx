import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JVCBRS525DXUimg from "../../assets/images/JVC-BR-S525DXU.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const JVCBRS525DXU = () => {
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
                <img src={JVCBRS525DXUimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">JVC BR-S822DXU</h3>
                <p className="para">
                The JVC BR-S525DXU is a professional-grade VHS video cassette recorder (VCR) designed for broadcast, production, and professional video editing applications. Here are some key details about the JVC BR-S525DXU:
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
               <p className="para"> The BR-S525DXU is designed to work with the VHS format, which was a widely used consumer video recording standard popular from the late 1970s through the 1990s. VHS tapes can record analog video and audio signals. This VCR includes features tailored to professional video applications, such as enhanced playback and recording quality, timecode support, precise shuttle control, and advanced editing capabilities. These features make it suitable for use in broadcast, production, and post-production environments</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
   
      </Container>
    </div>
  




  </Grid>
  )
}

export default JVCBRS525DXU