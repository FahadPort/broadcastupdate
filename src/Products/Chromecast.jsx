import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import remote from "../assets/images/remote.png";
import wifigif from "../assets/images/wifiGif.gif"
import router from "../assets/images/router.webp"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const Chromecast = () => {
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
                <img src={remote} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Google Chromecast With Google TV (GA01919-US) Snow</h3>
                <p className="para">
                Enjoy HDR 4K UHD content from your favorite apps and mobile devices with the snow Google Chromecast...
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Devices</strong>
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
                  Enjoy HDR 4K UHD content from your favorite apps and mobile devices with the snow Google Chromecast with Google TV. It plugs into the HDMI port on your display and connects to your Wi-Fi network to provide access to a variety of apps via the onboard Android TV operating system. It supports 4K UHD (3840 x 2160) resolution at 60 Hz and the HDR10, HDR10+, and Dolby Vision HDR formats to provide a vibrant, detailed image on compatible displays. </p>
                  
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default Chromecast