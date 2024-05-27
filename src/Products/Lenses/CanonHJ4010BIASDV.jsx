import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanonHJ4010BIASDVimg from "../../assets/images/CanonHJ4010BIASD-V.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const CanonHJ4010BIASDV = () => {
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
                <img src={CanonHJ4010BIASDVimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Canon HJ40x10B IASD-V</h3>
                <p className="para">
                The Canon HJ40X10B 2/3" EFP Telephoto Lens with Semi Servo Kit is a telephoto lens that is intended for producers and broadcasters engaged in documentary, natural history, </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>lenses</strong>
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
                The Canon HJ40X10B 2/3" EFP Telephoto Lens with Semi Servo Kit is a telephoto lens that is intended for producers and broadcasters engaged in documentary, natural history, and many other challenging location productions that seek high definition image capture over very considerable distances. The HJ40X10B offers an extremely long focal length of up to 800mm with the extender that gives you the ability to shoot from very far distances. And with the Optical Image Stabilization feature, you can capture crisp and clear images at very long distances without concern for an unsteady image.
</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Key Features

</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />Super-Telephoto Lens</li>
<li><FaRegCircleDot />Focal Range 10 - 800mm (w/Extender)</li>
<li><FaRegCircleDot />40x Zoom Ratio</li>
<li><FaRegCircleDot />Optical Shift Image Stabilizer</li>
<li><FaRegCircleDot />Included Servo Kit</li>
<li><FaRegCircleDot />Included Support Bracket</li>
<li><FaRegCircleDot />Shuttle Shot</li>
<li><FaRegCircleDot />Framing Preset</li>
<li><FaRegCircleDot />Speed Preset</li>
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

export default CanonHJ4010BIASDV