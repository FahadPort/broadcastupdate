import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import studiotlx from "../../assets/images/studiotlx.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const D29wuch = () => {
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
                <img src={studiotlx} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">JVC KY-D29WUCH
</h3>
                <p className="para">
                3-CCD COLOR CAMERA HEAD 16:9/4:3


 </p>
               
                <p className="price">$8,231.80</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>CCD & Studio</strong>
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
                  <ul>
<li><FaRegCircleDot />600% dynamic range is achieved for both dark areas and highlights, in part because signals are processed at 14 bit resolution to give essential DSP headroom. Exceptional reproduction of highlight color is another strength. Multi-stream parallel digital si</li>
<li><FaRegCircleDot />3D digital noise reduction cancels out random noise, without undesired lag, by comparing multiple frames together with motion detection, Outstanding 65 dB signal to noise ratio.</li>
<li><FaRegCircleDot />Three 2/3" 980 x 494 pixel IT CCDs (KY-D29WU) and three 2/3" 768 x 986 pixel IT CCDs (KY-D29U) are combined with the JVC ultra fast take and hold CCD sampling circuit capable of harvesting the full CCD dynamic range of 600%</li>
<li><FaRegCircleDot />CCD vertical smear level; a super-low 125 dB</li>
<li><FaRegCircleDot />High sensitivity of F11 at 2000 lux gives creative flexibility and ease of lighting.</li>
<li><FaRegCircleDot />Automatic shooting from 4 lux to 17,000 lux thanks to JVC?s well known Full auto shooting (FAS) mode with continuous white balance. Super LoLux mode now provides outstanding reproduction down to 0.35 lux. In addition to the standard set-up, two scene file</li>
<li><FaRegCircleDot />Also: Accu-focus mode, Adjustable Gamma Point, Adjustable Detail Enhancement Frequency, Time/Date Generator, Star Filter, Audio Level Control, Full Time Automatic White Balance,Continuous Auto-Black (CAB) and Smooth Transitions.</li>
<li><FaRegCircleDot />Builds on the high performance and reliability of the KY-27 series. Most accessories compatible with KY-27 series. Docks with JVC D-9, S-VHS and other industry standard formats.</li>
<li><FaRegCircleDot />Skin Tone Detail function softens the image of the facial area by sampling an area with the desired skin tone and applying that to the entire face. This digital make-up is applied while maintaining the sharpness of other areas.</li>
<li><FaRegCircleDot />A six-axis color matrix circuit compensates for optics-related color reproduction. User-adjustable, it adds to the operator?s ability to create clear, true-to-life color tones.</li>
<li><FaRegCircleDot />Auto Viewfinder adjustment displays the selected aspect ratio (16:9 or 4:3)</li>
<li><FaRegCircleDot />Full Mode option displays the image in the entire field of the viewfinder</li>
<li><FaRegCircleDot />Large viewfinder tally lamps are easy to see from a wide viewing angle</li>
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

export default D29wuch