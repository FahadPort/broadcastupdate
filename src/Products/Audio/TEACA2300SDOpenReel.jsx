import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TEACA2300SDOpenReelimg from "../../assets/images/TEACOpenReel.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const TEACA2300SDOpenReel = () => {
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
                <img src={TEACA2300SDOpenReelimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">TEAC A-2300SD 1⁄4” Open Reel</h3>
                <p className="para">
                Vintage TEAC A2300SD Reel to Reel just serviced</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Audio</strong>
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
                Vintage TEAC A2300SD Reel to Reel just serviced, working properly and ready for the studio! A few cosmetic blemishes but sounds great, functions as it should. Specs:


</p>
<p className="para">
  <ul>
    <li><FaRegCircleDot />Track system: 2-channel, stereo system

</li>
    <li><FaRegCircleDot />Heads: 1 x erase, 1 x record, 1 x playback

</li>
    <li><FaRegCircleDot />Reel size: up to 7 inch reel

</li>
    <li><FaRegCircleDot />Tape speeds: 3 3⁄4  7 1⁄2 ips

</li>
    <li><FaRegCircleDot />Wow and flutter: 0.08% (7 1⁄2 ips)

</li>
    <li><FaRegCircleDot />Frequency response: 40Hz to 24kHz (7 1⁄2 ips)

</li>
    <li><FaRegCircleDot />Signal to Noise Ratio: 65dB


</li>
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

export default TEACA2300SDOpenReel