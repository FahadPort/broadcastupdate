import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fujinonimg2 from "../../assets/images/Fujinon2.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Fujinon2 = () => {

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
                <img src={Fujinonimg2} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Fujinon XA17x7.6BERM</h3>
                <p className="para">
                Fujinon XA17x7.6BERM 17x 2/3" Panasonic P2 High Definition Lens with 2x Extender, Manual Focus, Servo Zoom</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Lenses</strong>
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
                The Panasonic XA17x7.6BERM by Fujinon is a high quality 17x 2/3" lens designed to be used with the P2HD line of Panasonic cameras, including the AG-HPX500. Known for their high build quality and precision optics, Fujinon lenses have become the industry standard for professional video applications all over the world. The focal-length range is 7.6 to 130mm with a minimum object distance of 0.6 meters; or about 2 feet. The lens also incorporates a 2x extender giving a maximum focal length of 260mm.

</p>
<p className="para">In addition to unmatched image quality, the lens is also equipped with a wide array of extra features, including both DigiPower servo controls and QuickZoom.


</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">QuickZoom Technology</h3>
                <p className="para">
                The lens has added capability when zooming, using the QuickZoom switch. At the touch of a button, the lens can move to full telephoto in less than a second. This provides a no-hassle way of verifying focus.

                </p>
         
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">High Definition Ready
</h3>
                <p className="para">
                Many high definition cameras are hamstrung by insufficient optics. Electronic News Gathering (ENG) lenses are traditionally built to accommodate standard definition video cameras. This lens is designed specifically with high definition in mind. The optics increase fidelity, making sure HD footage is crystal clear.

                </p>
         
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Integral 2x Extender
</h3>
                <p className="para">
                For instant close-up shots the lens has a switch which inserts an element that doubles the focal length at any point in the zoom range. Instead of using the zoom function the extender gives immediate close up images.

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

export default Fujinon2