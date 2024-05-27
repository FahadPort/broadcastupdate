import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PanasonicAGHPX600img from "../assets/images/PanasonicAG-HPX600.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";


const PanasonicAGHPX600 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
      }, []);
  return (
    <Grid>
      <div id="product">
        <Container>
          <div className="pro-inner">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={PanasonicAGHPX600img} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Panasonic AG-HPX600 </h3>
                  <p className="para">The Panasonic AG-HPX600 P2 HD Shoulder-mount Camcorder features a 2/3" MOS Sensor and records Full HD 1080p video in AVC-Intra 10-bit with 4:2:2 chroma sampling.</p>

                  <p className="price">$24,670.25</p>

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
                    <Link to="/Enquiry">Send Enquiry</Link>
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
                  The Panasonic AG-HPX600 P2 HD Shoulder-mount Camcorder features a 2/3" MOS Sensor and records Full HD 1080p video in AVC-Intra 10-bit with 4:2:2 chroma sampling. Other available video formats include DVCPRO HD, DVCPRO50, DVCPRO, DV and optional compatibility with the newly developed AVC-ULTRA. The MOS sensor attains high F12 sensitivity (at 60 Hz) and a signal-to-noise ratio of 59 dB. Weighing in at 6.6 lb, the HPX600 is among the lightest 2/3-type shoulder mount camcorders. The HPX600 utilizes Panasonic's P2 memory card system.
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

export default PanasonicAGHPX600