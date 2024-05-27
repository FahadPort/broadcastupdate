import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerUltraDAYlightimg from "../../assets/images/Anton-BauerUltraDAYlight.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerUltraDAYlight = () => {
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
                <img src={AntonBauerUltraDAYlightimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer UltraDAYlight</h3>
                <p className="para">
                The UltraDAYlight head module fits any Ultralight base to instantly deliver 5600°K light at less than half the power required of tungsten/halogen - without the need for dichroic adaptors.Uniquely designed to share power from camera battery using ?

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
                <p className="para">
                The UltraDAYlight head module fits any Ultralight base to instantly deliver 5600°K light at less than half the power required of tungsten/halogen - without the need for dichroic adaptors.Uniquely designed to share power from camera battery using the PowerTap on every camera Gold Mount.Instantly change from daylight to tungsten and back by swapping head modules - no twisting, turning or handling of bulbs.And since the rugged Ultralight head modules house and protect the bulbs, they can be stored in the head module until next use.
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
                <h3 className="sec-head">Features</h3>
                <p className="para">

                <ul>
<li><FaRegCircleDot/>5600K nominal color temperature</li>
<li><FaRegCircleDot/>350 footcandles at 3’ (1m)</li>
<li><FaRegCircleDot/>25 watt bulb and ballast all in one</li>
<li><FaRegCircleDot/>Perfect for daylight fill situations, the UltraDAYlight can be converted to tungsten with the UL-GF and UL-GELKIT (not included)</li>
<li><FaRegCircleDot/>Unique color temperature adjustment which allows the ballast to adjust the color temperature of the light, compensating for bulb variations and aging</li>
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

export default AntonBauerUltraDAYlight