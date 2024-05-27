import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HitachiZHD6000img from "../../assets/images/HitachiZHD6000.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const HitachiZHD6000 = () => {
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
                <img src={HitachiZHD6000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Hitachi Z-HD6000</h3>
                <p className="para">
                The Z-HD6000 HDTV Camera Studio Package from Hitachi includes the Z-HD6000 camera head, TA-Z3 tripod adapter, VF-701HDA 7" HDTV color LCD viewfinder with AT-500 mount, CU-HD500 camera control unit, CA-HF1000 camera head adapter, and RU-1000VR small remote control with 30' cable.


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
               The Z-HD6000 HDTV Camera Studio Package from Hitachi includes the Z-HD6000 camera head, TA-Z3 tripod adapter, VF-701HDA 7" HDTV color LCD viewfinder with AT-500 mount, CU-HD500 camera control unit, CA-HF1000 camera head adapter, and RU-1000VR small remote control with 30' cable.

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

export default HitachiZHD6000