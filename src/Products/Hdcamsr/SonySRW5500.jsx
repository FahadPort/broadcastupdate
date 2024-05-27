import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonySRW5500img from "../../assets/images/SonySRW5500.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonySRW5500 = () => {

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
                <img src={SonySRW5500img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony SRW-5500/2 HDCAM-SR</h3>
                <p className="para">
                The Sony SRW-5500/2 HDCAM-SR Studio Recorder is a full-bandwidth HDCAM-SR studio VTR. </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HD Cam SR</strong>
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
                The Sony SRW-5500/2 HDCAM-SR Studio Recorder is a full-bandwidth HDCAM-SR studio VTR. The deck is used in conjunction with Sony's top-quality CineAlta line of cameras, to deliver the pinnacle in high-definition program ingest and transfer. The HDCAM-SR format has been widely accepted by top professionals as the HD format of choice due to Sony's commitment to providing the highest quality solutions for the most demanding cinematographers and HD broadcasters.


</p>
<p className="para">The SRW-5500/2 is capable of recording and playback of both HDCAM-SR and HDCAM video formats. Additionally, the /2 upgrade adds 444 RGB SQ recording and playback, which means the HKSR-5003 board is no longer necessary. This--combined with legacy playback of Digital BETA (using the optional HKSR-5002 board) and a host of other pro features--makes the SRW-5500/2 the ideal solution for top-end HDTV, broadcast, commercial, and digital cinema production.


</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">HDCAM-SR Format
</h3>
                <p className="para">
                The SRW-5500/2 player adopts the HDCAM-SR format and plays back 1920 x 1080 resolution high-definition signals using the MPEG-4 Studio Profile compression scheme with a very mild compression ratio of 2.7:1 (4:2:2), 4:1 (4:4:4 SQ) or 2:1 (4:4:4 HQ) and 10-bit color depth. It enables both full-bandwidth 4:4:4 RGB and high-quality 4:2:2 Y/Cb/Cr playback, delivering optimal picture performance to suit many different production requirements.

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

export default SonySRW5500