import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyVO9850Pimg from "../../assets/images/VO9850P.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyVO9850P = () => {
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
                <img src={SonyVO9850Pimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony VO-9850P</h3>
                <p className="para">
                Sony VO-9850P – Umatic SP
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
                  <p className="para">
                  <ul>
<li><FaRegCircleDot />Produced: 1982 – 1989</li>
<li><FaRegCircleDot />Horizontal resolution: 260 lines (monochrome)</li>
<li><FaRegCircleDot />Power requirements: AC 100-120 / 220-240V</li>
<li><FaRegCircleDot />Weight: Approx. 37 kg (81 lb 9 oz)</li>
<li><FaRegCircleDot />Recording and playback time: 60 min (with Sony KSP-60 U-matic videocassettes)</li>
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

export default SonyVO9850P