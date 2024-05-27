import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AJAIo4KPlusimg from "../../assets/images/AJA-Io-4KPlus.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AJAIo4KPlus = () => {
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
                <img src={AJAIo4KPlusimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">AJA Io 4K Plus</h3>
                <p className="para">
                AJA Io 4K Plus Professional Video I/O With Thunderbolt 3 Performance Io 4K Plus (Io4KPlus) aja_io_4k_plus / IO-4K-PLUS-R0

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Professional Video I/O with TB3</strong>
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
                The AJA Io 4K Plus is a professional video I/O device that offers Thunderbolt 3 performance for capturing and outputting high quality footage. With its powerful features and compatibility, it is the perfect hardware for live production and HDR workflows.


                </p>
                <p className="para">One of the standout features of the Io 4K Plus is its ability to handle a wide range of formats, from SD to HD, UltraHD, and full 4K, with frame rates up to 60p. This is made possible by its support for 12G/6G/3G/1.5G-SDI and HDMI 2.0 I/O, as well as High Frame Rate (HFR) and High Dynamic Range (HDR) workflows.

</p>
                <p className="para">The Io 4K Plus offers professional connectivity with its support for 12G-SDI and HDMI 2.0. This allows for single cable simplicity and the ability to accurately display HDR 10 and HLG on HDMI displays. It also offers backwards compatibility with SDI sources, making it a versatile and powerful tool for any project.

</p>
                <p className="para">Thanks to its Thunderbolt 3 ports, the Io 4K Plus offers universal compatibility with leading Mac and PC workstations and laptops. Thunderbolt 3 provides double the speed of the previous Thunderbolt 2 standard, with up to 40 Gps of throughput, making it ideal for video and audio I/O.

</p>
                <p className="para">In addition, the Io 4K Plus supports DisplayPort 1.2 and USB 3.1, and allows for daisy-chaining up to six devices. It also offers the ability to monitor 4K/UltraHD footage in HD, with a dedicated HD-SDI down-converted output. This is perfect for broadcasting and viewing 4K footage on HD monitors during post-production.

</p>
                <p className="para">The Io 4K Plus also supports HDR, which provides a wider range of colors and allows for more dynamic and true-to-life imagery. With its support for HDR 10 and HLG, as well as HDIntegrated Digital Audio and analog audio flexibility, the Io 4K Plus is a must-have for any professional video production.

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

export default AJAIo4KPlus