import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerPROPAC14Logicimg from "../../assets/images/AntonBauerPROPAC-14Logic.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerPROPAC14Logic = () => {
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
                <img src={AntonBauerPROPAC14Logicimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer PRO PAC 14 Logic</h3>
                <p className="para">
                PRO PAC 14 Logic Series Battery, 14.4 volts, 65 watt hours

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
                The InterActive Logic Series batteries are virtually identical to their respective Digital versions with respect to size, weight, capacity, IMPAC case construction, and application. The advanced MicroCode logic circuits and comprehensive ACS sensor networks of these batteries communicate directly with all Logic Series chargers providing the essential data critical for optimum performance, reliability, and life. These batteries do not, however, include the DIGITAL microprocessor features such as the integral diagnostic program, "Fuel Computer", LCD display, and InterActive viewfinder "Fuel Gauge" circuit.
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
<li><FaRegCircleDot/>14.4V 65Wh</li>
<li><FaRegCircleDot/>Advanced MicroCode logic circuits and ACS sensor networks communicate directly with all Logic Series chargers</li>
<li><FaRegCircleDot/>Does not include the Digital microprocessor features such as the integral diagnostic program, "Fuel Computer," LCD/LED display and InterActive viewfinder "Fuel Gauge" circuit</li>
<li><FaRegCircleDot/>Recommended for all applications</li>
<li><FaRegCircleDot/>Premium heavy-duty Pro Pac cell designed for long life and high performance even under high current loads and adverse conditions</li>
</ul></p>

            
                
                
              </div>
            </Col>
          </Row>
        </div>
       
      </Container>
    </div>
  




  </Grid>
  )
}

export default AntonBauerPROPAC14Logic