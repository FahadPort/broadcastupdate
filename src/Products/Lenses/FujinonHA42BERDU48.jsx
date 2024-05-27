import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FujinonHA42BERDU48img from "../../assets/images/Fujinon-HA42x9.7BERD-U48.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const FujinonHA42BERDU48 = () => {
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
                <img src={FujinonHA42BERDU48img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Fujinon HA42x9.7BERD-U48</h3>
                <p className="para">
                The Fujinon HA42x9.7BERD-U48 is a high-end broadcast lens designed for professional video production, particularly for use in sports broadcasting, live events, and other applications where long-range, high-quality zoom capabilities are required.  </p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Lenses</strong>
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
               The HA42x9.7BERD-U48 offers an impressive zoom range of 42x, allowing operators to capture distant subjects with exceptional clarity and detail. This extensive zoom range makes it suitable for covering large venues such as stadiums and arenas. The lens has a focal length range of 9.7mm to 407mm (or equivalent focal length in 35mm film format), providing flexibility in framing shots from wide-angle to telephoto perspectives.  </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  






  </Grid>
  )
}

export default FujinonHA42BERDU48