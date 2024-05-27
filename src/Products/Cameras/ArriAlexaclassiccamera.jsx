import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArriAlexaclassiccameraimg from "../../assets/images/ArriAlexaclassiccamera.png";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const ArriAlexaclassiccamera = () => {
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
                <img src={ArriAlexaclassiccameraimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Arri Alexa classic camera</h3>
                <p className="para">
                The ARRI ALEXA Classic camera delivers exceptional image quality, thanks to its advanced sensor and image processing technology. Your footage will have the rich detail and colour that only ARRI cameras can provide. Whether you're shooting a feature film, 
</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
                
<p className="para">The ARRI ALEXA Classic camera delivers exceptional image quality, thanks to its advanced sensor and image processing technology. Your footage will have the rich detail and colour that only ARRI cameras can provide. Whether you're shooting a feature film, a commercial, or a music video, the ARRI ALEXA Classic camera will help you capture every detail with incredible clarity. The camera's high dynamic range enables you to capture both bright highlights and dark shadows with incredible detail. This makes it perfect for shooting in challenging lighting conditions or when you need to preserve detail in both bright and dark areas of the frame. The camera can record high-quality ProRes and ARRIRAW formats, providing flexibility in post-production. The ARRI ALEXA Classic camera has a proven track record of reliability, making it a trusted choice for professional filmmakers around the world. This means you can shoot with confidence, knowing that your camera will perform flawlessly, even in the most challenging environments.
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

export default ArriAlexaclassiccamera