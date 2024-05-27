import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPVM14M4Uimg from "../../assets/images/SonyPVM14M4U.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPVM14M4U = () => {
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
                <img src={SonyPVM14M4Uimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PVM14M4U</h3>
                <p className="para">
                Featuring one of the latest developments in Sony display technology </p>
               
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
                Featuring one of the latest developments in Sony display technology, the HR Trinitron, the M4 Series of monitors has a resolution of 800TV lines.  </p>
                <p className="para">With stunning picture performance, flexibility of signal connections, a full range of optional functions and ease of operation, these new Sony monitors are designed to meet the demands of a wide range of picture monitoring and production applications.</p>
                <p className="para">Good all-around PVM for sitting on your desk or other space-saving applications. Not the most reliable PVM series but common repairs are well documented.</p>
                <p className="para">There were several board revisions, getting a later model-year will ensure a more reliable experience. Sony changed the spec of several commonly failing capacitors.</p>
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyPVM14M4U