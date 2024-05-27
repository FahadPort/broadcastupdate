import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KYF32U from "../../assets/images/KYF32U.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const KYf32u = () => {

    
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
                <img src={KYF32U} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">JVC KY-F32U

</h3>
                <p className="para">
                3-CCD General Purpose Camera Less Lens


 </p>
               
                <p className="price">$4,171.90
</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>3 CCD & Studio

</strong>
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
                  <p className="para">The KY-F1030U is a new generation imaging camera with innovative features like live, 7.5 fps, full-size SXGA preview and an IEEE 1394 Single Cable Solution. It's ideal for medical or materials analysis microscope applications, and a wide range of other imaging applications. The KY-LINK software provided with the optional PFW-41 EEE1394 board offers a variety of image enhancement, processing and camera calibration tools.
</p>
                  <p className="para">
        
<ul>
<li><FaRegCircleDot />Standard 1/2" bayonet mount
</li>
<li><FaRegCircleDot />Progressive Scanning</li>
<li><FaRegCircleDot />750 horizontal lines resolution with a high sensitivity of F 9.5 at 2,000 lux and minimum illumination of 6.0 lux
</li>
<li><FaRegCircleDot />Memory function
</li>
<li><FaRegCircleDot />Comprehensive input and output terminals
</li>
<li><FaRegCircleDot />High-resolution frame integration mode boosts vertical resolution to 480 lines
</li>

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

export default KYf32u