import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SSLC10040img from "../../assets/images/SSL-C100-40.webp"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SSLC10040 = () => {
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
                <img src={SSLC10040img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">SSL C100 40 Fader Channel Mixing Console </h3>
                <p className="para">
                This C100 was built in 2004 and it is still in excellent shape after only 10 years of work at Malmö Opera. The console has been in storage since 2014 and was tested for full functionality.</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Audio</strong>
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
                  <p className="para">It will be decommissioned and readied for transport on a pallet.</p>
                  <p className="para">There are 40 faders (+ 8 in the master section). 2 Master channel provides comprehensive control of all channel facilities for any Fader strip assigned to it.</p>
                  <p className="para">The offer consists of the Surface (the mixer) with redundant PSU, the Centuri rack with redundant PSU’s, DSP cards and I/O’s and all necessary cables.</p>
                  <p className="para">The C100 has 4 DSP cards, i.e. 128 DSP input channels. 1 DSP card for the center section mix. Following by I/O’s: 48 Mic Preamps: 72 ch analog Line I/O: 128 ch AES I/O: 60ch GPI relay.</p>
                  <p className="para">At the heart of the C100 is SSL’s Centuri TM processing technology, which features fault tolerance, self- healing DSP, hot-swappable components, rapid boot times. It contains all audio and control processing, I/O options and GPIO interfacing within a single, robust 15U rack-mounted processor core.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SSLC10040