import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyTCOpenReelTrackimg from "../../assets/images/SonyOpenReel4Track.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyTCOpenReelTrack = () => {
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
                <img src={SonyTCOpenReelTrackimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony TC-854-4 1⁄4” Open Reel 4 Track</h3>
                <p className="para">
                SONY TC-854-4 - PROFESSIONAL QUALITY 4-TRACK REEL TO REEL - QUADRAPHONIC</p>
               
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
               <p className="para">One can quickly tell this is a special machine because of its weight (I can barely move it around the shop), and the pro-style XLR inputs.
</p>
               <p className="para">While it can do 2 and 4 channel playback, many esoteric audiophiles like to use it for its quadraphonic sound and high speed capabilities.
</p>
               <p className="para">It also happens to be one of the best looking reel to reel players from this era. And we all know people like these machines for their looks as much as their stellar analog sound!
</p>
               <p className="para">Made in the 1970 by Sony in Japan. Tested and working. Rare 120V model too.
</p>
               <p className="para">We'll also include two aluminum take-up tape reels.

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

export default SonyTCOpenReelTrack