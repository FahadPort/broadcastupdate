import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyHDWM200020img from "../../assets/images/SonyHDWM200020.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyHDWM200020 = () => {

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
                <img src={SonyHDWM200020img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony HDWM2000//20</h3>
                <p className="para">
                Sony HDWM2000/20 HDCAM Studio Editing Recorder, with Multiple Format Legacy Playback
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HD Cam</strong>
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
                The Sony HDWM2000/20 is an HDCAM studio editing recorder capable of down converting as well as playing back Betacam, Digital Betacam and MPEG IMX. This recorder used in conjunction with Sony's top-quality CineAlta line of cameras delivers the pinnacle in high definition acquisition.



</p>
<p className="para">The HDCAM format has been widely accepted by top professionals as the HD format of choice and shows Sony's commitment to providing the highest quality solutions for the most demanding cinematographers. This deck is capable of recording HDCAM at variable frame rates, as well as compressed audio in either Dolby-E or AC-3 formats.



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
                The Sony HDCAM format has become an industry standard for high quality, manageable high definition acquisition. With its robust feature set and familiar tape-based work flow, professionals will feel right at home.

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

export default SonyHDWM200020