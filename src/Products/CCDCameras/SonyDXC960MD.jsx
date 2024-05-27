import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDXC960MDimg from "../../assets/images/SonyDXC960MD.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyDXC960MD = () => {
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
                <img src={SonyDXC960MDimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DXC960MD </h3>
                <p className="para">
                The Sony DXC-970MD 3CCD Color NTSC Camera, 1/2" Bayonet Mount, CCD IRIS, AGC auto gain control, variable speed electronic shutter, printer trigger function, on-screen programmable menu, user preset stores two parameter settings, video out, RGB, </p>
               
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
                The Sony DXC-970MD 3CCD Color NTSC Camera, 1/2" Bayonet Mount, CCD IRIS, AGC auto gain control, variable speed electronic shutter, printer trigger function, on-screen programmable menu, user preset stores two parameter settings, video out, RGB, Y/C and composite (VBS), flash synchronization, integrated RS-232C control, frame integration (requires optional accessory), high resolution of 750 TV lines, sensitivity f9.5 at 2000 lux, minimum illumination 5 lux (F1.4,+- 18dB). Sony has discontinued production of this model.

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

export default SonyDXC960MD