import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FujinonHA26x67BESME18img from "../../assets/images/FujinonHA26x6.7BESM-E18.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const FujinonHA26x67BESME18 = () => {
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
                <img src={FujinonHA26x67BESME18img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Fujinon HA 26x6.7BESM-E18 </h3>
                <p className="para">
                These Fujinon HA26x6.7BESM-E18 have been used exclusively in a church environment behind teleprompter glass. </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>lenses</strong>
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
                These Fujinon HA26x6.7BESM-E18 have been used exclusively in a church environment behind teleprompter glass. They have been impeccably maintained. Sleds are available to include with your custom quote.
</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Key Features

</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />7.6-175mm wide to telephoto zoom lens for 2/3" cameras</li>
<li><FaRegCircleDot />23x zoom ratio and 2x extender</li>
<li><FaRegCircleDot />Fast f/1.8 max aperture at 7.6-122mm and f/2.65 at 175mm</li>
<li><FaRegCircleDot />Digital servo for focus and zoom</li>
<li><FaRegCircleDot />Innerfocus, QuickZoom and Zoom Limit</li>
<li><FaRegCircleDot />Focused Intelligent Network Diagnosis</li>
<li><FaRegCircleDot />7.6-175mm Lens for 2/3" Cameras</li>
<li><FaRegCircleDot />23x Zoom Ratio and 2x Extender</li>
<li><FaRegCircleDot />Fast f/1.8 Max Aperture at 7.6-122mm</li>
<li><FaRegCircleDot />Digital Servo for Focus and Zoom</li>
<li><FaRegCircleDot />Innerfocus, QuickZoom, and Zoom Limit</li>
<li><FaRegCircleDot />Focused Intelligent Network Diagnosis</li>
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

export default FujinonHA26x67BESME18