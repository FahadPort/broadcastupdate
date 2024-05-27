import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyHDW1800img from "../../assets/images/SonyHDW1800.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyHDW1800 = () => {

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
                <img src={SonyHDW1800img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony HDW-1800</h3>
                <p className="para">
                Sony HDW-1800 CineAlta HDCAM Studio Editing Recorder
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HD CAM Editing RecorderR</strong>
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
                The Sony HDW-1800 is a CineAlta HDCAM studio editing recorder featuring a wide variety of advanced features, making the adoption of and integration of professional-grade high definition acquisition a more seamless transition than ever before. The HDCAM format has been widely accepted by top professionals as the HD format of choice and shows Sony's commitment to providing the highest quality solutions for the most demanding applications.

</p>
<p className="para">The deck has the ability to fully integrate HDV content for additional high definition support. Moreover, the HDW-1800 can up and down-convert footage to HDCAM, making it ideal for mastering for broadcast or ingesting into an HDCAM post-production workflow.


</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">HDCAM Format

</h3>
                <p className="para">
                The Sony HDCAM format has become an industry standard for high quality, manageable high definition acquisition. With its robust feature set and familiar tape-based workflow, professionals will feel right at home.

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

export default SonyHDW1800