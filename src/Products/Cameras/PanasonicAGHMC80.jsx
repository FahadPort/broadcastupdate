import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAGHMC80img from "../../assets/images/PanasonicAG-HMC80.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicAGHMC80 = () => {
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
                <img src={PanasonicAGHMC80img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AG-HMC80</h3>
                <p className="para">
                The Panasonic AG-HMC80 3MOS AVCCAM HD Shoulder-Mount Camcorder adds solid-state DV recording, XLR inputs
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
                The Panasonic AG-HMC80 3MOS AVCCAM HD Shoulder-Mount Camcorder adds solid-state DV recording, XLR inputs, and an ENG form factor to the high-definition imaging capability of the popular AG-HMC40. At the same time, it maintains the smaller camera's bang-for-the-buck affordability by offering a laundry list of professional features unmatched in its class. Utilizing a highly efficient AVCHD codec to record stunning images to SD and SDHC memory cards, the AG-HMC80 gives you a wealth of shooting options, formats, and frame rates to give you exactly the look your application needs--whether that means weddings, events, educational, or even indie filmmaking. With this rock-solid unit perched on your shoulder, you'll have the professional stability--and versatility--every working videographer hopes for.
</p>
<p className="para"><ul>
<li><FaRegCircleDot/>HD and SD Capture</li>
<li><FaRegCircleDot/>1080i/p, 720p, 480i/p</li>
<li><FaRegCircleDot/>24p, 30p, 60i</li>
<li><FaRegCircleDot/>12x HD Lens</li>
<li><FaRegCircleDot/>Records to SDHC Cards</li>
<li><FaRegCircleDot/>Waveform Monitor</li>
<li><FaRegCircleDot/>Dual XLR Input</li>
<li><FaRegCircleDot/>Multipurpose Focus Ring</li>
<li><FaRegCircleDot/>Cine-Like Gamma Curves</li>
<li><FaRegCircleDot/>10.6MP Stills</li>
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

export default PanasonicAGHMC80