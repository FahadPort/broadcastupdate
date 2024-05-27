import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPMWEX1img from "../../assets/images/SonyPMW-EX1.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPMWEX1 = () => {
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
                <img src={SonyPMWEX1img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PMW-EX1</h3>
                <p className="para">
                The Sony EX1 is popular among independent filmmakers due to the 1/2" TrueHD sensors, better depth of field control, and better low light capabilities.

</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
                <p className="para">
                The PMW-EX1 utilizes Sony's three 1/2-inch type "Exmor" CMOS sensors, each with an effective pixel count of 1920 x 1080. Coupled with signal processing LSI, the PMW-EX1 produces images in 1080p (30 and 24 frame/s), 720p (up to 60 frame/s) and 1080i (up to 60 frame/s) HD.
</p>
<p className="para">The Sony EX1 records internally to SxS (S by S) cards and does not internally record to tape (an external tape device would be required). The SxS-1 card was introduced in December 2009 as a more affordable option with a shorter operational life than SxS Pro cards.
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

export default SonyPMWEX1