import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GrassValleyLDK600img from "../assets/images/GrassValleyLDK600.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const GrassValleyLDK600 = () => {

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
                <img src={GrassValleyLDK600img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Grass Valley LDK6000</h3>
                <p className="para">
                Grass Valley LDK-6000 Fiber, Super Expander Sled, 7" Studio VF, CCU, and RCP
</p>


               
                <p className="price">$22,654.95</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
               With a lightweight, ergonomic design, the LDK 6000 mk II speeds production workflows with focus-assist tools and smart cards that store image and operational settings. And its transmission system interfaces with standard triax- as well as fiber-based infrastructures for maximum flexibility. For digital transition management, the LDK 6000 mk II features a compact, robust, and lightweight base station that can output SD and HD signals simultaneously. The camera can be equipped with a Grass Valley SuperXpander large lens adapter and an optional </p>
                
              </div>
              <p className="para">
              HD high-resolution viewfinder and turn it into a fully featured studio head.
              </p>
              <p className="para">CCDs Ensure Exceptional Output Three 9.2-million pixel HD DPM+ CCDs inside the</p>
              <p className="para">LDK 6000 mk II ensure exceptional image quality. These CCDs are based on frame-transfer technology so there is no lag or smear in the images you create. They also offer an extraordinary signal-to-noise ratio and sensitivity, high efficiency, and, through the use of on-chip amplifiers, a significant reduction in a signal’s noise floor.s</p>
              <p className="para">Grass Valley™ products from Thomson offer the most comprehensive, multi-format solutions for acquisition, production, storage and playback—and a strong foundation for centralized, proactive status and activity monitoring. These solutions include one of
the broadest selections of standard- and high-definition (SD and HD) digital video cameras. With one of the best known imaging design teams in the world and six technical
</p>
              <p className="para">Emmy® awards, Grass Valley camera products continue to break ground with innovation and creative ideas. The LDK 6000 mk II is no exception.</p>
              <p className="para">The LDK 6000 mk II offers the highest quality picture available for everything from remote-controlled, portable hand-held, mobile and studio applications, to EFP uses for SD and HD productions—even digital cinematography.</p>
              <p className="para">With three 9.2-million pixel HD-DPM+™ CCDs, the LDK 6000 mk II is the only camera available that can capture true progressive HD images, natively, and switch instantly between multiple formats and frame rates. Coupled with an extensive feature set, format flexibility, and excellent performance, it’s a perfect match for the intense demands of today’s productions. The LDK 6000 mk II camera head is available in two versions:</p>
            <p className="para">
                <b>Standard and WorldCam:</b>
            </p>
            <p className="para">The Standard version supports 1080i/720p HD formats in 50 and 59.94 Hz, and simultaneously provides high-quality SD output in either 50 or 59.94 Hz.</p>
            <p className="para">The WorldCam version adds support for all recognized worldwide HD formats, including 24p for digital cinematography acquisition and provides convenient built-in frame-rate conversion.</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default GrassValleyLDK600