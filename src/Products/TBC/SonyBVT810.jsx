import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVT810img from "../../assets/images/Sony-BVT810.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyBVT810 = () => {
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
                <img src={SonyBVT810img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVT810</h3>
                <p className="para">
                SONY BVT-810 SYSTEM WITH PR-34 PROCESSOR CK-10 CLOCK GEN NR-10 NOISE REDUCER

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>TBC</strong>
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
               Panasonic has introduced the first of its new D-5 HD multi-format video tape recorders, the AJ-HD3700. Designed for HDTV and standard definition operation, the new VTR platform is intended for mastering video images for HDTV broadcasting, high definition cinema and other release applications. The AJ-HD3700 is designed to answer industry demands for a true multiple-format recorder that can meet today’s need for 24/25 frame film-originated HD mastering as well as HD television interlace or progressive formats. The VTR can also function as a standard definition
               </p>
               <p className="para">
               D-5 ITU-R601 component recorder, thereby allowing it to replace many VTRs with a single multiple-format mastering VTR.
               </p>
               <p className="para">Panasonic believes that multiple-format is the key to financial and creative success. We also understand that a feature-rich VTR is required to meet the needs of a diverse market. In the AJ-HD3700, Panasonic has included support for eight discrete audio channels as well as the ability to record encoded Dolby E and other encoded audio. Ancillary data recording, including Metadata and Closed Captioning, is vitally essential for production programming in the new ATSC era. It’s a standard feature in the AJ-HD3700. The AJ-HD3700 offers a built-in image</p>
               <p className="para">format converter as an option. The format converter allows users to up/down or cross convert between many of the 18 ATSC image formats. When film-originated high definition images are recorded at 24Hertz frame rates, the VTR can slew its playback speed to 25Hertz, thereby providing a video release source for countries requiring 50Hertz-based video. PAL conversions are</p>
               <p className="para">now possible without the need for electronic frame rate conversion, a process that can create temporal picture artifacts. By slewing the VTR speed, all frames recorded at 24fps are played out at 25fps, and no temporal artifacts are introduced. This process also works in reverse from 25fps down to 24fps.</p>
                
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default SonyBVT810