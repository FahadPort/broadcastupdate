import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Vinten3702FULMARimg  from "../../assets/images/Vinten-3702-FULMAR.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";
const Vinten3702FULMAR = () => {
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
                <img src={Vinten3702FULMARimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">*Vinten/3702 FULMAR</h3>
                <p className="para">
                Vinten 3702 Fulmar Pedestal Camera Tripod Base</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Pedestal</strong>
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
               The Vinten Fulmar pedestal is capable of supporting and counterbalancing a payload weighing between 22.68 kg (50 lb) and 158 kg (350 lb), which provides it with adequate capacity for the majority of cameras, camera mountings, prompters and other accessories.
 The pedestal has a fully counterbalanced, nitrogen-charged column which may be raised and lowered under hand control. Pedestal motion about the studio is controlled by the cameraman who directs the movement with the steering ring. A foot-operated changeover mechanism allows selection of crab or steer modes of movement. 
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

export default Vinten3702FULMAR