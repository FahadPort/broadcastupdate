import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RevoxA77OpenReelimg from "../../assets/images/RevoxOpenReel.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const RevoxA77OpenReel = () => {
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
                <img src={RevoxA77OpenReelimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Revox A77 1⁄4” Open Reel</h3>
                <p className="para">
                Vintage Revox A77 Reel to Reel 3 Motor 2 Speed Tape Player & Recorder - Serviced,</p>
               
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
                <p className="para">Fully tested and 100% functional; this classic deck was also just given a clean bill of health by our tech. His notes are below. Cosmetically, it is missing the wood cabinet and shows some wear but is overall good (see pics). Includes power cable.
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

export default RevoxA77OpenReel