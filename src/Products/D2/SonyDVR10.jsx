import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDVR10img from "../../assets/images/SonyDVR10.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyDVR10 = () => {
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
                <img src={SonyDVR10img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DVR10 </h3>
                <p className="para">
                Sony DVR-10 Digital Videocassette Recorder VCR Missing Parts - Parts

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DVCPRO</strong>
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
                For Parts or Not Working. Comes in non-original packaging. This Videocassette Recorder is in AS/IS condition with scuffs and scratches from previous use. The photos show the exact item(s) the buyer will receive.
</p>
<p className="para">Notes: This Videocassette Recorder is being sold AS/IS for parts and repair due to the incomplete nature of the unit (Missing parts) and the inability to test the unit. No manuals, cords/cables, or additional items are included if not listed or shown.




</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Specifications:





</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />Manufacturer: Sony</li>
<li><FaRegCircleDot />Model: DVR-10</li>
<li><FaRegCircleDot />Description: Videocassette Recorder</li>
<li><FaRegCircleDot />Film Format: D-2</li>
<li><FaRegCircleDot />Video Format: HD, SD</li>
<li><FaRegCircleDot />Functions: Decoder, Encoder, Time Base Corrector</li>
<li><FaRegCircleDot />Color System Type: NTSC</li>
<li><FaRegCircleDot />Image Control: Audio Meter</li>
<li><FaRegCircleDot />Type: Recorder</li>
<li><FaRegCircleDot />Output Interfaces: Balanced (XLR), BNC</li>
<li><FaRegCircleDot />Connectivity: Composite, DVI</li>
<li><FaRegCircleDot />Features: Built-in Digital Color Encoder/Decoder, Built-in PSU</li>
<li><FaRegCircleDot />Media Format: D2</li>
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

export default SonyDVR10