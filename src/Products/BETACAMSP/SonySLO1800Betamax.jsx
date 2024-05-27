import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonySLO1800Betamaximg from "../../assets/images/SonySLO1800Betamax.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonySLO1800Betamax = () => {

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
                <img src={SonySLO1800Betamaximg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony SLO-1800 Betamax</h3>
                <p className="para">
                The SLO-1800 is an industrial strength duplicator designed for mass producing large quantities of prerecorded movies, music videos and special interest Beta tapes. It is built for continuous operation and ease of maintenance</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>BETAMAX</strong>
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
         <p className="para">The SLO-1800 is an industrial strength duplicator designed for mass producing large quantities of prerecorded movies, music videos and special interest Beta tapes. It is built for continuous operation and ease of maintenance. All the areas that would normally see the most wear are beefed up and built with endurance in mind. For example the cassette loader uses a unique lock and capture design found only in the SLO-1800. This special grasping action prevents mis-loads and makes it very difficult for an operator to jam, short-load or misalign a cassette. Only after being advanced to a holding point does the loading to motor begin operate. Once accepted in this way the loading tray with the cassette travels inside. Sony placed a photosensor in the tape path to tell this VCR if there is tape to be recorded. If it doesn't break the LED beam threading is immediately halted and the cassette is ejected. Important feature when you are cycling through cassette after cassette during production. To make regular cleaning easier the top of the cabinet has an access cover to the tape path and video drum area. The video drum is also unique to the SLO-1800.
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

export default SonySLO1800Betamax