import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerDigitalProPac14Logicimg from "../../assets/images/Anton-BauerDigitalProPac14Logic.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerDigitalProPac14Logic = () => {
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
                <img src={AntonBauerDigitalProPac14Logicimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer Digital Pro Pac 14 Logic</h3>
                <p className="para">
                DIGITAL PRO PAC 14 Logic Series DIGITAL Battery, 14.4 volts, 65 watt hours

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Camera Tripod, Lenses</strong>
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
                <p className="para">The Pro Pac is recognized by broadcasters and video professionals around the world as the ultimate professional video battery and is recommended for all applications. The premium heavy duty Pro Pac cell is designed to deliver long life and high performance even under high current loads and adverse conditions.</p>
            
                
                
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
                <h3 className="sec-head">Features</h3>
           <p className="para">
           <ul>
<li><FaRegCircleDot/>14.4V, 65Wh</li>
<li><FaRegCircleDot/>Recommended for all applications</li>
<li><FaRegCircleDot/>Premium heavy-duty Pro Pac cell designed for long life and high performance even under high current loads and adverse conditions</li>
<li><FaRegCircleDot/>Size and weight creates perfect shoulder balance with all cameras/camcorders</li>
<li><FaRegCircleDot/>Each Digital battery has a built-in microprocessor that communicates directly with the InterActive chargers</li>
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

export default AntonBauerDigitalProPac14Logic