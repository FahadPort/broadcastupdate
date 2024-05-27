import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyVO9800Pimg from "../../assets/images/VO9800P.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyVO9800P = () => {
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
                <img src={SonyVO9800Pimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony VO-9800P </h3>
                <p className="para">
                Plays all types of U-matic PAL recorded video cassettes in Low-band (LB), High-band (HB) and SP in High Quality.


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
                  Delivery with existing drum, or with a new upper drum and 90 day limited warranty, are some of the options. Generally speaking we replace some electronic components, perform software updates, install a new pinch roller assembly, new idler drive wheels, new belts and lubricate and calibrate the deck. After this process our VTR’s meet or even exceed the original factory specifications.</p>
                  
                 <p className="para">The VO-9800P player incorporates SP (Superior Performance) U-matic technology, significantly improving picture quality characteristics while remaining compatible with High Band U-matic. In the playback mode, the VO-9800P provides SP/High Band/Low Band playback capability and can playback many Low Band U-matic cassettes still in video libraries. The VO-9800P incorporates a Dolby noise reduction system ensuring excellent quality in SP mode.

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

export default SonyVO9800P