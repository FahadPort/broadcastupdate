import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauer3013img from "../../assets/images/Anton-Bauer-3013.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauer3013 = () => {
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
                <img src={AntonBauer3013img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer 30/13</h3>
                <p className="para">
                Switchable Battery Belt, 30 volts / 4 AH or 13.2 volts / 8 AH output. With internal charger.

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Camera Tripod, Lenses</strong>
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
           <p className="para">The 30/13 Battery Belt powers virtually all portable equipment, including 30 volt lights, all 13-14v cameras and VTRs, and the Ultralight Modular Lighting System. Unique construction features include leather belt, Lexan® battery modules, quick release buckle, and anatomical design. It can be worn around the waist, over the shoulder or bandolier style. The 30/13 Battery belt may be charged with most Logic Series chargers, or with the CA-13 Fast Charge Cable and XMNP/90 Power Charger module.</p>

            
                
                
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
                <h3 className="sec-head">Features</h3>
           <p className="para">
           <ul>
<li><FaRegCircleDot/>Powers virtually all portable equipment, including 30V lights, all 13-14V cameras and VTRs and Anton/Bauer’s UItralight modular lighting system</li>
<li><FaRegCircleDot/>Construction features include leather belt, Lexan® battery modules, quick release buckle and anatomical design</li>
<li><FaRegCircleDot/>Can be worn around the waist, over the shoulder or bandolier style</li>
<li><FaRegCircleDot/>Operating features: 30V, 4Ah or 13.5V, 8Ah switchable (approximately 115Wh, either mode); voltage display; charge indicator; input and output circuit protection; multiple charge sensors for 100% safe fast charging</li>
<li><FaRegCircleDot/>100W max. total light output (1 or 2 bulbs) in low voltage lighting applications</li>
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

export default AntonBauer3013