import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MWAFlashscanFilmscannerimg from "../../assets/images/MWA-Flashscan-8-8mm-Filmscanner.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const MWAFlashscanFilmscanner = () => {
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
                <img src={MWAFlashscanFilmscannerimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">MWA Flashscan 8-8mm Film scanner</h3>
                <p className="para">
                The MWA Flash scan 8 is a film scanner specifically designed for digitizing 8mm film.</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Film</strong>
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
                  The MWA Flash scan 8 is optimized for scanning 8mm film formats, including Standard 8 (Regular 8) and Super 8. It can handle both silent and sound film formats, offering versatility for various film archives and projects.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default MWAFlashscanFilmscanner