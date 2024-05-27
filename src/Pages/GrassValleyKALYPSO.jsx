import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GrassValleyKALYPSOimg from "../assets/images/Grass-Valley-KALYPSO.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";

const GrassValleyKALYPSO = () => {
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
                  <img src={GrassValleyKALYPSOimg} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Grass Valley Kalypso </h3>
                  <p className="para">4-M/E, 2 Remote 32 Aux KMD Panels</p>

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
                  <h3>Equipment Details</h3>
                  <p className="para">
                    <ul>
                      <li><FaRegCircleDot/>4-M/E Main Control Panel</li>
                      <li><FaRegCircleDot/>PN-660001401</li>
                      <li><FaRegCircleDot/>SN-GV011670</li>
                    </ul>
                  </p>
                  <h3>Local Aux Panel</h3>
                  <p className="para">
                    <ul>
                      <li><FaRegCircleDot/>PN-610093500</li>
                      <li><FaRegCircleDot/>SN-GV008537</li>
                    </ul>
                  </p>

                  <h3>Menu Panel</h3>
                  <p className="para">
                    <ul>
                      <li><FaRegCircleDot/>PN-660001500</li>
                      <li><FaRegCircleDot/>GV012006</li>
                    </ul>
                  </p>

                  <h3>Control Stillstore</h3>
                  <p className="para">
                    <ul>
                      <li><FaRegCircleDot/>Crosspoint A8,A9,A10</li>
                      <li><FaRegCircleDot/>M/E A11,A12,A13,A14</li>
                      <li><FaRegCircleDot/>Sync Generator - A17</li>
                      <li><FaRegCircleDot/>PN-630007100</li>
                      <li><FaRegCircleDot/>Video Processor Power Supply w/ cords -</li>
                      <li><FaRegCircleDot/>Quantity of 2 Remote 32 Aux KMD Panels</li>
                      <li><FaRegCircleDot/>PN-660001901</li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default GrassValleyKALYPSO;
