import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fujinonimg1 from "../../assets/images/Fujinon1.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Fujinon1 = () => {

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
                <img src={Fujinonimg1} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Fujinon HA23x7.6BERD-S6</h3>
                <p className="para">
                Fujinon HA23x7.6BERD-S6 ENG Lens with Digital Servo for Focus and Zoom </p>
               
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
                The Fujinon HA23x7.6BERD-S6 ENG Lens with Digital Servo for Focus and Zoom is a 7.6-175mm lens, designed to provide 2/3" cameras with a wide to super telephoto angle-of-view.

</p>
<p className="para">The lens has a 23x zoom ratio, and a 2x extender effectively doubles the focal range. The maximum aperture is a fast f/1.8 at 7.6-175mm and stops down to f/2.65 at 175mm. The lens also includes a digital servo for focus and zoom.


</p>
<p className="para">Internal focusing minimizes the effects of lens breathing, which ensures a more consistent angle-of-view when making focus adjustments. With the push of a button, QuickZoom facilitates a rapid shift to the telephoto end of the lens to check focus. Releasing the button automatically returns the lens to the previously selected focal length. Zoom Limit purposefully constrains the focal range to only desirable focal lengths. The Focused Intelligent Network Diagnosis (FIND) system aids in preventive maintenance and troubleshooting by evaluating electronic and mechanical parameters.

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

export default Fujinon1