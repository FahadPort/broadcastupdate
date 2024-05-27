import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TEACANDolbyNoiseReductionUnitimg from "../../assets/images/TEACAN180DolbyBNoiseReductionUnit.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const TEACANDolbyNoiseReductionUnit = () => {
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
                <img src={TEACANDolbyNoiseReductionUnitimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">TEAC AN-180 Dolby B Noise Reduction Unit</h3>
                <p className="para">
                TEAC AN-180 DOLBY NOISE REDUCTION UNIT - TESTED AND WORKING</p>
               
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
                <p className="para">This is a vintage Teach AN-180 noise reduction unit hailing from 1972 that was commonly used with a reel to reel deck.

</p>
                <p className="para">It's a great match to any TEAC Reel-to-Reel, or any other brand for that matter.
</p>
                <p className="para">Tested and working as it should. All meters are responsive and are properly backlit. 

</p>
                <p className="para">The Teac AN-180 is a noise reduction unit employing the Dolby B system.
</p>
                <p className="para">The unit comprises independent playback, record, meter amplifier and oscillator circuits, all utilising such new solid state circuit elements as ICs and FETs.
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

export default TEACANDolbyNoiseReductionUnit