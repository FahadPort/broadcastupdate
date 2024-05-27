import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoshBCN51img from "../../assets/images/Bosh-BCN51.jpeg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const BoshBCN51 = () => {
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
                <img src={BoshBCN51img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Bosh BCN51</h3>
                <p className="para">
                We have quite a few BCN units in stock.
Delivery with existing drum, or with a new upper drum and 90 day limited warranty are some of the options.
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
                  Generally speaking we replace some electronic components, such as capacitors, perform software updates, install a new pinch roller, new belts and lubricate and calibrate the deck. After this process our VTR’s meet or even exceed the original factory specifications. BOSCH FERNSEH BCN-51, high-quality Broadcast 1-inch open reel to reel analog video system 1–inch type B VTR (designated Type B by SMPTE) is a reel-to-reel analog recording video tape format developed by the Bosch Fernesh division of Bosch in Germany in 1976. The B-format became the broadcasting standard in continental Europe, but adoption was limited in the United States and United Kingdom, where the Type C videotape VTR met with greater success.</p>    </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default BoshBCN51