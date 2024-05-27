import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPMWEX3img from "../../assets/images/SonyPMWEX3.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPMWEX3 = () => {
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
                <img src={SonyPMWEX3img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PMW-EX3</h3>
                <p className="para">
                The Sony PMW-EX3 is a flash-memory based high definition camcorder capable of a variety of frame rates and resolutions using Sony's new XDCAM-EX intraframe codec
</p>
               
                <p className="price">Call Now</p>
               

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
                The Sony PMW-EX3 is a flash-memory based high definition camcorder capable of a variety of frame rates and resolutions using Sony's new XDCAM-EX intraframe codec. A "big-brother" to the PMW-EX1, the PMW-EX3 ups the ante by providing an interchangeable lens mount. The mount allows users to put a variety of professional lenses on the camera, including 1/2" and 2/3" bayonet-mounts.
</p>
<p className="para">
<ul>
<li><FaRegCircleDot/>Interchangeable Lens Mount</li>
<li><FaRegCircleDot/>3x 1/2" Exmor CMOS Sensors</li>
<li><FaRegCircleDot/>1080p</li>
<li><FaRegCircleDot/>24p</li>
<li><FaRegCircleDot/>HD-SDI Interface</li>
<li><FaRegCircleDot/>8-Pin Remote Connection</li>
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

export default SonyPMWEX3