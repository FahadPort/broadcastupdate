import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPMW300K1img from "../../assets/images/SonyPMW300K1.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPMW300K1 = () => {
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
                <img src={SonyPMW300K1img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PMW-300K1</h3>
                <p className="para">
                The PMW-300K1 XDCAM camcorder is equipped with three 1/2-inch Exmor™ full-HD CMOS sensors, capable of delivering high-quality images even in low-light environments.
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
                The PMW-300K1 XDCAM camcorder is equipped with three 1/2-inch Exmor™ full-HD CMOS sensors, capable of delivering high-quality images even in low-light environments. Ample support for interchangeable lens and a robust metal body further ensure that PMW-300K1 is suitable for a wide range of applications. Additionally, the PMW-300K1 offers a convenient remote-control and multi-camera operation capability, which allows use with high-end camera systems. There are two SxS memory card slots, taking SxS Pro or SxS-1 cards, as well as having SDXC card compatibility (exFAT recordings only)*. The camcorder’s user menu is also customisable and can be password locked to prevent unnecessary changes*.
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

export default SonyPMW300K1