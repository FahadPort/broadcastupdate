import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyFLEXICARTBFCimg from "../../assets/images/SonyFLEXICARTBFC1.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyFLEXICARTBFC = () => {

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
                <img src={SonyFLEXICARTBFCimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony FLEXICART BFC-1</h3>
                <p className="para">
                tape playback/record automation system. We buy, sell & Service Flexicarts

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Tape Playback</strong>
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
               Designed with the needs of broadcast and cablecast systems alike, with operations large or small, the Flexicart system can provide automation of both playback (commercials/PSAs and regular programming) and/or recording of feeds from satellite or other source, or any combination thereof. The Flexicart system can accommodate a wide variety of tape formats and can be configured for use with up to 4 tape machines.</p>
              <h3>Features:</h3>
              <p className="para">
              <ul>
<li><FaRegCircleDot/>Flexible configuration of VTRs and cassette bin units allows installation of Sony DVR-28/20/18/10 series, D-2 VTRs, or BVW-75/70/65/60 series, Betacam SP VTRs (also S-VHS models) which are recognized by the television and post production industry for their.</li>
<li><FaRegCircleDot/>Compatible cassette bin units achieve flexible cassette handling by allowing operators to use any cassette tape length, regardless of its size</li>
<li><FaRegCircleDot/>For flexible system configurations equipped with the VCC (Versatile Cart Controller) interface communicating through a RS-232C/422A selective port, which enables versatile connection with an application controller</li>
<li><FaRegCircleDot/>IBM PC/AT based application software for simple operation</li>
<li><FaRegCircleDot/>The Flexicart system's unique collection of features-size, functionality, reconfigurability - makes it an incredibly versatile system. And the incredibly low price means that a wide range of needs can be cost-effectively automated</li>
<li><FaRegCircleDot/>Program Playback: Now any operation can automate its program playback with the Flexicart. VTRs are readied, tapes are cued and events are switched automatically. </li>
<li><FaRegCircleDot/>Recording: More and more program material is delivered by satellite feed rather than in tape form. Someone has to be on call to initiate and monitor the recording - no matter what time the feed comes in. </li>

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

export default SonyFLEXICARTBFC