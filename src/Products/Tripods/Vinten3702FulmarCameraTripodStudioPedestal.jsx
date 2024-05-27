import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Vinten3702FulmarCameraTripodStudioPedestalimg from "../../assets/images/Vinten3702FulmarCameraTripodStudioPedestal.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Vinten3702FulmarCameraTripodStudioPedestal = () => {
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
                <img src={Vinten3702FulmarCameraTripodStudioPedestalimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony Trinitron PVM-2530 </h3>
                <p className="para">
                We only have one of the Vinten Fulmar Pedestals and it will not last long! This Pedestal includes weights, it is dual stage, and has functioning wheels/steering. We also have other Vinten Pedestals in stock including Vinten Quattro’s and Vinten Osprey’s. Contact us today for more information on our available pedestals!</p>
               
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
                The Vinten Fulmar pedestal is capable of supporting and counterbalancing a payload weighing between 22.68 kg (50 lb) and 158 kg (350 lb), which provides it with adequate capacity for the majority of cameras, camera mountings, prompters and other accessories. </p>
                <p className="para">The pedestal has a fully counterbalanced, nitrogen-charged column which may be raised and lowered under hand control. Pedestal motion about the studio is controlled by the cameraman who directs the movement with the steering ring. A foot-operated changeover mechanism allows selection of crab or steer modes of movement.

</p>
                <p className="para"></p>
                <p className="para"></p>
                <p className="para"></p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
  




  </Grid>
  )
}

export default Vinten3702FulmarCameraTripodStudioPedestal