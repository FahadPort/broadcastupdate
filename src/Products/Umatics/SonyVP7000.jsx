import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SONYVO5img from "../../assets/images/SONYVO5.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyVP7000 = () => {
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
                <img src={SONYVO5img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony VP-7000 3/4</h3>
                <p className="para">
                Sony VP-7000 U-Matic 3/4 inch Video Cassette Player. Solid, Dependable Workhorse!
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Devices</strong>
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
<li><FaRegCircleDot />LED real-time tape counter</li>
<li><FaRegCircleDot />3-way repeat playback which makes it ideal for exhibit use</li>
<li><FaRegCircleDot />5x normal search speed</li>
<li><FaRegCircleDot />BNC video out, RCA audio, and monitor out, an 8-pin AV connection, RF output and a 1/4 headphone jack with level control.</li>
<li><FaRegCircleDot />This Sony VP-7000 U-Matic Video Cassette Player can be a reliable resource in studio or business applications that require professional video presentations.</li>
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

export default SonyVP7000