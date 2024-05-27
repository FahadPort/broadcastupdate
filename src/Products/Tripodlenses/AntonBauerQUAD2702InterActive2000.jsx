import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerQUAD2702InterActive2000img from "../../assets/images/AntonBauerQUAD-2702InterActive2000.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerQUAD2702InterActive2000 = () => {
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
                <img src={AntonBauerQUAD2702InterActive2000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer QUAD 2702 InterActive 2000</h3>
                <p className="para">
                QUAD 2702 Four position power charger with LCD, 2 amp built-in discharge module and 70 watt power supply

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
                The QUAD 2702 PowerCharger bundles the complete package of all the PowerCharger features in the ultimate professional power system. The high power 70 watt camera DC output will operate virtually all cameras and camcorders from any AC mains source. The exclusive AUTOCAL feature communicates with DIGITAL batteries, and automatically tests and updates battery capacity information to the battery's fuel computer. The PowerCharger standard LCD displays all battery status and test information instantly. The QUAD 2702 will charge any Gold Mount battery in one hour and can be expanded to charge up to eight batteries.
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
<li><FaRegCircleDot/>4 position power charger</li>
<li><FaRegCircleDot/>70W camera DC output will operate virtually all camera camcorders from any AC mains source</li>
<li><FaRegCircleDot/>Built-in diagnostic/discharge module will test and diagnose batteries before they go into the field</li>
<li><FaRegCircleDot/>Autocal feature communicates with digital batteries—automatically tests and updates battery capacity information to the battery’s fuel computer</li>
<li><FaRegCircleDot/>Will charge any Gold Mount battery in 1 hour and can be expanded to charge up to 8 batteries of professional types</li>
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

export default AntonBauerQUAD2702InterActive2000