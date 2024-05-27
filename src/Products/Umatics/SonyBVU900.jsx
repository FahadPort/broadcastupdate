import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBYU900img from "../../assets/images/BVU900.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyBVU900 = () => {
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
                <img src={SonyBYU900img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony BVU900</h3>
                <p className="para">
                This model works just as well as the BVU-950 and is highly reliable. It has the same high performance as the BVU-920 & BVU-950.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Umatics</strong>
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
                  <p className="para">BVU-900 PLAYER: is the basic player of the series. This model works just as well as the BVU-950 and is highly reliable. It has the same high performance as the BVU-920 & BVU-950.</p>
                  <p className="para">
                  <ul>
<li><FaRegCircleDot />BKU-901 internal TBC (timebase corrector), and BKU-902 internal CNR (chroma noise reduction add-on for internal TBC).

</li>
<li><FaRegCircleDot />BVR-55 TBC remote (allows control of the built-in TBC).

</li>
<li><FaRegCircleDot />BKU-905 internal time code generator/reader.

</li>

</ul></p>
                  
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyBVU900