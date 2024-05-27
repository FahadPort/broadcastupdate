import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SachtlerVideo20img from "../../assets/images/SachtlerVideo20.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SachtlerVideo20 = () => {
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
                <img src={SachtlerVideo20img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sachtler Video20 </h3>
                <p className="para">
                As a relaunch of the legendary Video 20 head, the Sachtler Video 20 S1 Fluid Head incorporates a wider payload range and a faster, simpler balancing system.</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Monitor with SDI</strong>
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
                As a relaunch of the legendary Video 20 head, the Sachtler Video 20 S1 Fluid Head incorporates a wider payload range and a faster, simpler balancing system. The increased range means that even lightweight cameras--such as video DSLRs--can be used effectively on this head, aided by a 16-step counterbalance system that allows for fine degrees of tuning. Like its predecessor, the Video 20 S1 can also easily handle heavier ENG and EFP camcorders, with a Boost Button now included for sudden shifts in payload range (for example, when switching out a shoulder-mount camera for a handheld HDV camcorder or DSLR). </p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default SachtlerVideo20