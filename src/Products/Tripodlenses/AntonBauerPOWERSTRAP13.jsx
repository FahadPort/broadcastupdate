import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerPOWERSTRAP13img from "../../assets/images/Anton-BauerPOWERSTRAP13.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerPOWERSTRAP13 = () => {
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
                <img src={AntonBauerPOWERSTRAP13img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer POWER STRAP 13</h3>
                <p className="para">
                Lightweight powerbelt designed for professional use with all portable video recorders, cameras and low voltage lighting equipment. Constructed from rugged, lightweight 1000-denier Cordura® with thermoplastic protective cell modules. 10 amp resettable circuit breaker. 5 lbs. (2.1 kg) 55 watt hours.

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Track Recorder</strong>
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
                <ul>
<li><FaRegCircleDot/>Delivers 2–3X more run time than typical onboard VTR batteries</li>
<li><FaRegCircleDot/>Mounts directly to and becomes part of the existing VTR shoulder strap</li>
<li><FaRegCircleDot/>Designed for use with all portable video recorders and low voltage lighting equipment</li>
<li><FaRegCircleDot/>Made from rugged, lightweight 1000-denier Cordura®</li>
<li><FaRegCircleDot/>55Wh</li>
</ul>
                </p>

            
                
                
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
                Lightweight powerbelt designed for professional use with all portable video recorders, cameras and low voltage lighting equipment. Constructed from rugged, lightweight 1000-denier Cordura® with thermoplastic protective cell modules. 10 amp resettable circuit breaker. 5 lbs. (2.1 kg) 55 watt hours.
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

export default AntonBauerPOWERSTRAP13