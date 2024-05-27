import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyHDWM2100img from "../../assets/images/Sony-HDW-M2100.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyHDWM2100 = () => {
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
                <img src={SonyHDWM2100img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony HDW-M2100 HDCAM Pro Studio Editing Player</h3>
                <p className="para">
                Up for sale is a Sony HDW-2100 Digital Studio Cassette Player/Recorder in Excellent Condition. It has only 189 Drum Hours and 297 Operating Hours</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HDCAM</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    
    <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
            <Col xs="12">
                <div className="innerContent" data-aos="fade-right" >
                  <h3 className="sec-head">
                  Model Details
                  </h3>
                  <p className="para">
                  This player adopts the proven HDCAM format, recording high-definition component digital signals using the state-of-the-art HDCAM compression technology. This excellent compression scheme maintains a high video bit rate of 140 Mb/s (data rate on tape of 185 Mb/s). The format combines superb picture quality with the high reliability and robustness of 1/2-inch tape integrated into a design approach inherited from the BETACAM Series.</p>
                  
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyHDWM2100