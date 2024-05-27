import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPDWF800img from "../../assets/images/SonyPDWF800.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyPDWF800 = () => {
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
                <img src={SonyPDWF800img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PDW-F800</h3>
                <p className="para">
                The Sony PDW-F800 XDCAM HD422 Camcorder provides the durability and reliability professionals have become accustomed to with their full line of ENG camcorders, while adding many new features. What sets the XDCAM HD422 line apart from other cameras is the ability to shoot high definition video at manageable bitrates, without sacrificing quality.

</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>XDCam Camcorder</strong>
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
                Equipped with three 2/3" HD CCDs, the PDW-F800 is capable of recording a 1080p stream at different frame rates and bit rates, giving the user increased versatility to choose between quality and run time. The camera can also under and over crank, between 4 and 60 frames, which can be used for fast and slow motion effects.

</p>
<p className="para">The XDCAM series takes recording to the next level, utilizing non-linear single and dual-layer optical Blue Laser technology. Less time logging, capturing and digitizing footage allows videographers to move seamlessly between acquisition and post-production. Increasing efficiency results in shorter production times leading to higher profitability.

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

export default SonyPDWF800