import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DPS295img from "../../assets/images/DPS295.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const DPS295 = () => {
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
                <img src={DPS295img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">DPS-295</h3>
                <p className="para">
                Delta Electronics 295W Power Supply Unit / PSU DPS-295BB A REV:00, JT190 JT322 10/01/22
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>TBC</strong>
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
<li><FaRegCircleDot/>Connectors: 20 Pin</li>
<li><FaRegCircleDot/>Cooling: 1 Fan</li>
<li><FaRegCircleDot/>Type: Power Module</li>
<li><FaRegCircleDot/>Maximum Power: 209W</li>
<li><FaRegCircleDot/>MPN: DPS-295BB A REV:00</li>
<li><FaRegCircleDot/>Unit Type: Unit</li>
<li><FaRegCircleDot/>Brand: Delta Electronics</li>
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

export default DPS295