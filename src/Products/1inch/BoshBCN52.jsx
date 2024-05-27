import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoshBCN52img from "../../assets/images/Bosh-BCN52.jpeg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const BoshBCN52 = () => {
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
                <img src={BoshBCN52img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Bosh BCN52</h3>
                <p className="para">
                BOSCH / BTS BCN 52 mit Messbrücke (Monitor/Vector/Waveform)
1" B professional Recorder/Player MAZ analog Composite Video PAL
</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Inch</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    
    <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
            <Col xs="12">
                <div className="innerContent" data-aos="fade-right" >
                  <h3 className="sec-head">
                  Model Details
                  </h3>
                  <p className="para">
                  <ul>
<li><FaRegCircleDot/>1-inch open reel Studio or Broadcast analog video recorder (color)</li>
<li><FaRegCircleDot/>Equipped with control monitor e.g. Bosch or Barco</li>
<li><FaRegCircleDot/>Philips or Tektronix Waveform & Vector scope monitor</li>
<li><FaRegCircleDot/>Two loudspeakers in the right column of the monitor bridge</li>
<li><FaRegCircleDot/>Burnish to clean tapes during play or wind.</li>
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

export default BoshBCN52