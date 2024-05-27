import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyUVW1800Pimg from "../../assets/images/SonyUVW1800P.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyUVW18000 = () => {

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
                <img src={SonyUVW1800Pimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony UVW-1800P</h3>
                <p className="para">
                With built-in time code generator/reader, time base corrector and high-speed picture search, it provides frame accurate editing and consistent picture quality.

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Betacamp</strong>
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
               The Sony UVW-1800 is a Beta SP edit deck that has been a workhorse in professional edit suites for about a decade. It plays and records small and large cassettes and of course takes in and spits out analog component video. Component video is what made the Beta SP format so endearing to news shooters, higher end industrial producers, and documentary filmmakers. Component analog video remains a great source of multigenerational integrity when the signals are put through the wringer in the (linear) editing process. The picture continues to look great (and like the original) generation after generation without the need to digitize. The UVW-1800 is almost a classic, indeed a required element in any comprehensive video studio set-up.


               </p>
               <p className="para">
               <ul>
<li>Features of UVW-1800P</li>
<li>Outstanding picture quality, thanks to Betacam SP format More than 90 minutes of recording/playback time usingL-size metal Betacam SP cassettes Two longitudinal audio channel with the Dolby C-type Noise Reduction system shown in unique bargraph indicators</li>
<li>Frame accurate editing: assemble and insert (video, audio CH-1, audio CH-2 and time code) editing capability when controlled from optional RS-422A equipped editing controller unit</li>
<li>Dedicated longitudinal time code track</li>
<li>Built-in Time Base Corrector with advanced high quality digital dropout compensation</li>
<li>Built-in SMPTE time code (LTC/User-bit) generator and reader</li>
<li>RS-422A 9-pin interface</li>
<li>Y/R-Y/B-Y component signal input and output via BNC or 12-pin DUB connectors</li>
<li>S-video (Y/C separate) input/output connectors</li>
<li>Optional TBC Remote Control Unit UVR-60</li>
<li>High speed picture search provides recognizable color picture at up to 5 times normal speed in forward and reverse (16 times in monochrome)</li>
<li>Built-in character generator to monitor display information such as VTR status, time code, self-diagnostic message, setupmenu, and so on</li>
<li>Initial setup menu to preset various detailed operational parameters</li>
<li>Digital hours meter</li>
<li>Built-in self diagnostics with detailed warning messages</li>
<li>Compact and lightweight (4 units high, approx. 19 kg),19-inch rack mountable and low power consumption (85 W)</li>
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

export default SonyUVW18000