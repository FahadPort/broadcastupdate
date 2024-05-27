import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDVWM2000PPalimg from "../../assets/images/SonyDVW-M2000PPal.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyDVWM2000PPal = () => {
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
                <img src={SonyDVWM2000PPalimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony DVW-M2000P Pal</h3>
                <p className="para">
                Digital Betacam Studio Recorder, 1⁄2” tape transport, Betacam, Betacam SP, Betacam SX and MPEG IMX replay capability  </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>BETACAM/ BETACAM SP</strong>
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
                  The DVW-M2000P is the most fully featured VTR in the Digital Betacam line-up. It replaces the DVW-A500P, which for the last 10 years has been the de-facto tool for standard definition productions of the highest quality. The DVW- M2000P records and replays Digital Betacam component digital video. And for the first time in a Digital Betacam VTR, it also replays Betacam, Betacam SP, Betacam SX and MPEG IMX cassettes.
The DVW-M2000P packs high quality video performance, 4 channels of 20 bit digital audio and class-leading editing performance into a compact 4U chassis.
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

export default SonyDVWM2000PPal