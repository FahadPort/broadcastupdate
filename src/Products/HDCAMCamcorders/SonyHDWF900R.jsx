import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyHDWF900Rimg from "../../assets/images/SonyHDWF900R.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const SonyHDWF900R = () => {
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
                <img src={SonyHDWF900Rimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony HDW-F900R
</h3>
                <p className="para">
                The go-to HD production format for top quality programming was built on the shoulders of the HDW-F900. And now Sony's HDW-F900R (the 'R' stands for "refined") continues that tradition. 

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>HDCAM Camcorders </strong>
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
                 <p className="para">The go-to HD production format for top quality programming was built on the shoulders of the HDW-F900. And now Sony's HDW-F900R (the 'R' stands for "refined") continues that tradition. It's a smaller, lighter, more versatile version of the workhorse F900, incorporating such refinements as two built-in HD-SDI outputs, hyper gamma capability, reduced power consumption, and (with optional boards): image inversion, slow shutter, picture cache, interval recording, and downconversion with 2-3 pulldown.</p>
                 <p className="para">On top of the F900's original, industry-standard features and large 2/3" sensors, these refinements provide the greater flexibility and creative control that professional shooters have been asking for. And in terms of image quality and accessories, the F900R remains fully compatible with its predecessor--no modifications are needed for existing third-party items.</p>
                 <p className="para">The HDW-F900R, like the F900, continues to excel at what it does best: capturing high-end, film-like imagery that meets the most rigorous broadcast standards. And it does so with the ease and control of shooting 35mm--without film's higher cost. That's something the most tricked-out prosumer minicam can only dream about.</p>
        
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyHDWF900R