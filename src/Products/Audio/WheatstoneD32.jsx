import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import WheatstoneD32img from "../../assets/images/Wheatstone-D-32.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const WheatstoneD32 = () => {
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
                <img src={WheatstoneD32img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Wheatstone D-32 Digital Audio Console W 2 Power Supplies, Gibraltar Engine </h3>
                <p className="para">
                This listing is for a Wheatstone D-32 Digital Audio Console. The unit was recently removed from a professional working environment. The unit was in good working and cosmetic condition when removed from service. </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Audio</strong>
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
                  The D-32 sports a very compact footprint. The 32-fader version, which controls 64 simultaneous sources, is only 52 inches wide. While it’s compact in size, it’s big in power. Due to the increased processing capability offered by the Gibraltar Network, Wheatstone’s powerful mix engine, the D-32 can support up to 128 input channels on paged or non-paged faders. And with Gibraltar’s 1,024 processing paths, the D-32’s eight subgroups can be configured as 5.1 stems with full EQ and dynamics processing capability. Additionally, processing can now be applied to the 16 mix minus / direct out busses and 16 AUX sends available in the D-32.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default WheatstoneD32