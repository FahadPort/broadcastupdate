import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlackmagicDesignATEMimg from "../../assets/images/Blackmagic-Design-ATEM.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Blackmagic = () => {

       
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
                <img src={BlackmagicDesignATEMimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Blackmagic Design ATEM</h3>
                <p className="para">
                2 M/E Broadcast Panel</p>


               
                <p className="price">call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Switchers</strong>
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
               <ul>
<li><FaRegCircleDot/>Professional Panel for Live Switcher</li>
<li><FaRegCircleDot/>High-Quality Buttons / Knobs / Controls</li>
<li><FaRegCircleDot/>Ethernet Connection to Switcher</li>
<li><FaRegCircleDot/>Loop Output for Ethernet</li>
<li><FaRegCircleDot/>USB Input for Firmware Updates</li>
<li><FaRegCircleDot/>Aerospace-Certified Embedded OS</li>
<li><FaRegCircleDot/>Tri-Color LED Crosspoint Buttons</li>
<li><FaRegCircleDot/>RGB Bitmap Crosspoint Labels</li>
<li><FaRegCircleDot/>Redundant Power Supply</li>
</ul>
</p>
<h3 className="sec-head">Specifications</h3>
               <p className="para">
               <ul>
<li><FaRegCircleDot/>Connections	10/100/1000 BaseT with loop output for additional control panels or computers</li>
<li><FaRegCircleDot/>1 x USB for firmware updates</li>
<li><FaRegCircleDot/>Buttons Tri-color LED crosspoint buttons (20 direct crosspoints; 40 shifted crosspoints) with high-contrast RGB bitmap labels</li>
<li><FaRegCircleDot/>LCD bitmap buttons for menu control</li>
<li><FaRegCircleDot/>Next transition selectors: BKG, Key1 - Key2 (per M/E)</li>
<li><FaRegCircleDot/>DSK transition selectors: Auto, Cut, Tie/Pvw</li>
<li><FaRegCircleDot/>Controls 3-axis joystick, numeric keypad, 2x fader bars</li>
<li><FaRegCircleDot/>Operating System Aerospace-certified embedded OS</li>
<li><FaRegCircleDot/>Redundant Power Yes</li>
<li><FaRegCircleDot/>Input Voltage	12V</li>
<li><FaRegCircleDot/>Power Consumption	75W</li>
<li><FaRegCircleDot/>Dimensions (WxHxD) 4.8 x 37.27 x 14.14" (120 x 947 x 359mm)</li>
<li><FaRegCircleDot/>Cutout HxWxD: 4.8 x 36.27 x 16.67" (120 x 921 x 423mm)</li>
<li><FaRegCircleDot/>Weight	33.6 lb (15.25 kg)</li>
</ul>
</p>
<h3 className="sec-head">Additional Detailed Information</h3>
<p className="para">The Blackmagic Design ATEM 2 M/E Broadcast Panel is a perfect companion to a professional live switcher, such as Blackmagic Design's ATEM 2 M/E Production Switcher (not included). With a broad field populated by high-quality buttons, knobs, T-bars, and a 3-axis joystick, you'll be able to customize your panel's operation to your exact needs and preferences – without compromise.</p>
<p className="para">Complex, multi-layer productions deserve a versatile panel, and the ATEM 2 M/E certainly fits the bill for live broadcast events. All controls are at your fingertips, so you can instantly command the switcher to switch cameras and execute transitions, fades, DVE effects, and more. This 37" wide panel gives you plenty of elbow room in which to operate.</p>
<p className="para">The ATEM 2 M/E Broadcast Panel connects to a switcher via 10/100/1000 BaseT Ethernet, and there's loop-through Ethernet for connecting to another panel or to a media-management computer. The panel receives firmware updates via its USB input.</p>
              
             
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default Blackmagic