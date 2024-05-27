import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicBT4LH310P314kimg from "../../assets/images/PanasonicBT4LH310P314K.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicBT4LH = () => {
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
                <img src={PanasonicBT4LH310P314kimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic BT-4LH310P 31" 4K</h3>
                <p className="para">
                Panasonic introduces the BT-4LH310 787.4 mm (31 inches) 4K LCD monitor, to provide </p>
               
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
                Panasonic introduces the BT-4LH310 787.4 mm (31 inches) 4K LCD monitor, to provide powerful support for 4K and 2K/HD image production for broadcasting and cinema applications. The BT-4LH310 boasts stunning display resolution in both 4K (4096 x 2160) and QFHD (3840 x 2160). Its reference-level image quality and excellent color reproduction meet the DCI (P3) color gamut standards. Its LUT (Look Up Table) upload functionalso allows high-precision color management in a digital cinema workflow. In addition, this LCD monitor comes with a variety of display functions to assist video production, such as Zoom, Focus-in-Red and Y Map, as well as other handy functions that streamline production activities, including Frame Grab and Error Indication. The rugged aluminum frame and AC/DC power capability ensure high mobility.  </p>
                
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
                <h3 className="sec-head">KEY FEATURES</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot/>Rugged aluminium frame</li>
<li><FaRegCircleDot/>31 type (787.4 mm) IPS LCD Panel</li>
<li><FaRegCircleDot/>4096 x 2160 resolution</li>
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

export default PanasonicBT4LH