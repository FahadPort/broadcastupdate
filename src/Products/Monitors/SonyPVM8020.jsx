import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPVM8020img from "../../assets/images/Sony-PVM-8020.png";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPVM8020 = () => {
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
                <img src={SonyPVM8020img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PVM-8020</h3>
                <p className="para">
                The Sony PVM-8020 is a professional-grade </p>
               
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
                The PVM-8020 features an 8-inch CRT display. CRT technology offers reliable image quality and color accuracy. The monitor typically supports resolutions suitable for standard definition (SD) video formats. It is designed to display images in the standard 4:3 aspect ratio. The PVM-8020 is engineered to deliver accurate color reproduction for monitoring video content. While it may not offer extensive calibration options compared to larger and more advanced monitors, it provides reliable color representation within its capabilities.. The BT-4LH310 boasts stunning display resolution in both 4K (4096 x 2160) and QFHD (3840 x 2160). Its reference-level image quality and excellent color reproduction meet the DCI (P3) color gamut standards. Its LUT (Look Up Table) upload functionalso allows high-precision color management in a digital cinema workflow. In addition, this LCD monitor comes with a variety of display functions to assist video production, such as Zoom, Focus-in-Red and Y Map, as well as other handy functions that streamline production activities, including Frame Grab and Error Indication. The rugged aluminum frame and AC/DC power capability ensure high mobility.  </p>
                
              </div>
            </Col>
          </Row>
        </div>
      
      </Container>
    </div>
   
  




  </Grid>
  )
}

export default SonyPVM8020