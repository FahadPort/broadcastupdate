import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FujinonZK1990mmimg from "../../assets/images/FujinonZK1990mm.jpg"



import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const FujinonZK1990mm = () => {
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
                <img src={FujinonZK1990mmimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Fujinon ZK19-90mm 
</h3>
                <p className="para">
                The Fujinon ZK19-90mm T2.9 Cabrio Lens is a wide to telephoto zoom lens for Super 35mm cameras, and it features a PL mount. 
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Lenses </strong>
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
                <p className="para">The Fujinon ZK19-90mm T2.9 Cabrio Lens is a wide to telephoto zoom lens for Super 35mm cameras, and it features a PL mount. The focus, zoom, and iris barrels are geared with standard 0.8 film pitch, which provides an interface for the removable ENG-style digital drive unit. The rear PL mount features electrical contacts for sharing ARRI LDS and Cooke /i Technology lens data with the camera.</p>
                <h3 className="sec-head">Key Features   </h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />PL Mount 19-90mm Zoom Lens</li>
<li><FaRegCircleDot />T2.9 Maximum Aperture with 9 Iris Blades</li>
<li><FaRegCircleDot />31.5mm Diameter Image Circle</li>
<li><FaRegCircleDot />Removable ENG-style Digital Drive</li>
<li><FaRegCircleDot />Standard 0.8 Film Pitch Gears</li>
<li><FaRegCircleDot />Power and Control Connections to Camera</li>
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

export default FujinonZK1990mm