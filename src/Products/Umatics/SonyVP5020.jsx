import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SONYVO2img from "../../assets/images/SONYVO2.png"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyVP5020 = () => {
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
                <img src={SONYVO2img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony VP-5020</h3>
                <p className="para">
                
This used unit is perfect for collectors or enthusiasts looking to add a piece of vintage technology to their studio setup. Thorough testing hasn't been done but it does power on properly and the internal components are in great condition. Comes as shown. 

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Umatics</strong>
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
                  Faetures
                  </h3>
                  <p className="para">

                  <ul>
<li><FaRegCircleDot />Front Loading System: Easy operation and rack-mountable design save space and simplify installation.</li>
<li><FaRegCircleDot />Search Operation: Playback at approximately 5-times normal speed in both forward and reverse directions.</li>
<li><FaRegCircleDot />LED Time Counter: Displays tape position in seconds and minutes for precise editing.</li>
<li><FaRegCircleDot />Automatic Tape Transport Operation: Quick and easy locating of specific points on the tape and repetitive playback.</li>
<li><FaRegCircleDot />Still Picture: Capture a still image during playback for detailed analysis.</li>
<li><FaRegCircleDot />Long Pause Mode: Automatically enters a long pause mode to prevent tape damage during extended pauses.</li>
<li><FaRegCircleDot />Logic Control: Change modes seamlessly without stopping playback.</li>
<li><FaRegCircleDot />Full Automatic Rewind: Tape automatically rewinds to the beginning after reaching the end.</li>
<li><FaRegCircleDot />Timer Operation: Start and stop playback with an optional timer for unattended operation.</li>
<li><FaRegCircleDot />Stable Playback Picture: Servo system and digital servo IC ensure stable tape transport and reduced jitter.</li>
<li><FaRegCircleDot />Moisture Detector: Activates when moisture condenses on the video head drum to prevent tape damage.</li>
<li><FaRegCircleDot />Compact and Lightweight Design: Easily mountable and space-saving.</li>
<li><FaRegCircleDot />No Power Adaptation Needed: Operates with a wide range of power voltages and frequencies.</li>
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

export default SonyVP5020