import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonySLHF860Dimg from "../../assets/images/Sony-SL-HF860D.png";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonySLHF860D = () => {
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
                <img src={SonySLHF860Dimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony SL-HF860D</h3>
                <p className="para">
                Sony Super Betamax SL-HF860D. From the year 1988. The Digitallly advance Betamax VCR of all. A great machine both materials and craftmanship. The top-end SuperBeta HiFi Sony made.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Super Betamax</strong>
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
<li><FaRegCircleDot/>Full complement of digital effects (PIP, mosaic, strobe, still picture art, multi-strobe, digital zoom, recall, digital scan, digital slow, etc.),</li>
<li><FaRegCircleDot/>7-day, 6-event programming, </li>
<li><FaRegCircleDot/>Crystal clear slow motion,</li>
<li><FaRegCircleDot/>MTS broadcast reception,</li>
<li><FaRegCircleDot/>Hi-Fi stereo sound and recording,</li>
<li><FaRegCircleDot/>10-key direct access wireless remote,</li>
<li><FaRegCircleDot/>Cable compatible express tuning (151 channel), </li>
<li><FaRegCircleDot/>Synchro-edit switch,</li>
<li><FaRegCircleDot/>Front audio/video inputs,</li>
<li><FaRegCircleDot/>Front display which displays clock, counter and more,</li>
<li><FaRegCircleDot/>Right/Left VU meters,</li>
<li><FaRegCircleDot/>Right/Left record level controls.</li>
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

export default SonySLHF860D