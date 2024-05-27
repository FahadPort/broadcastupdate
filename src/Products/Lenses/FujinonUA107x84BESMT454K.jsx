import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FujinonUA107x84BESMT454Kimg from "../../assets/images/FujinonUA107x84BESMT454K.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const FujinonUA107x84BESMT454K = () => {
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
                <img src={FujinonUA107x84BESMT454Kimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Fujinon UA107x8.4 BESM-T45 4K</h3>
                <p className="para">
                The 4K Premier UHD UA107X8.4 Box-Type 107x Zoom with OIS from Fujinon is box-style field lens featuring a high 107x zoom range and 4K optical-quality imaging. </p>
               
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
                The 4K Premier UHD UA107X8.4 Box-Type 107x Zoom with OIS from Fujinon is box-style field lens featuring a high 107x zoom range and 4K optical-quality imaging. This lens has an 8.4-900mm zoom with a 16.8-1800mm range when using the built-in 2x extender. Its OS-TECH optical image stabilization is designed to produce steady shots, even at long ranges, and can be switched on and off. Aspherical elements, a multi-layer lens coating, and extra-low dispersion glass help to produce an optimal image. The 4K Premier UHD UA107X8.4 has a 9-blade iris for attractive bokeh and natural-looking bright objects. Crisp, high resolution images with detailed contrast levels, HDR (high dynamic range), and true blacks are achieved with the use of optical simulation technologies, extra-low dispersion glass, minimization of aberrations, and advanced HT-EBC lens coating.
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

export default FujinonUA107x84BESMT454K