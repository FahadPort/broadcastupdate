import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RanePEAudioFilterSetsimg from "../../assets/images/RaneAudioFilterSets.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const RanePEAudioFilterSets = () => {
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
                <img src={RanePEAudioFilterSetsimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Rane PE-17 and_UREI 565 Audio Filter Sets</h3>
                <p className="para">
                The PE 17 Parametric Equalizer/Notch Filter is suited for all critical digital audio studio,</p>
               
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
                The PE 17 Parametric Equalizer/Notch Filter is suited for all critical digital audio studio, sound reinforcement and broadcast applications. Besides the 5 completely overlapping filter bands, the PE 17 features separate In and Out Gain controls, plus sweepable Low and High Cut Filters (for a total of 7 adjustable filters). Special design techniques and components used in the design of the PE 17 guarantee residual noise levels below digital recording equipment.

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

export default RanePEAudioFilterSets