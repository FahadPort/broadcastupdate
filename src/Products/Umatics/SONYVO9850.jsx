import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SONYVO3img from "../../assets/images/SONYVO3.png"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SONYVO9850 = () => {
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
                <img src={SONYVO3img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">SONY VO-9850</h3>
                <p className="para">
                
U-matic videocassette recorder, player, editor, type IX SP with Type-C Dolby noise reduction, full automatic assemble and insert editing, 9-pin RS-422 serial interface.
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
                  U-matic videocassette recorder, player, editor, type IX SP with Type-C Dolby noise reduction, full automatic assemble and insert editing, 9-pin RS-422 serial interface, optional 33-pin parallel interface with BKU-703A, optional Time Code Generator/Reader capability with BKU-705, TC reader only is BKU-704, TBC connection, JOG/SHUTTLE dial operation +/- x1/30 to x8, Dial Menu Operation, dubbing connectors, balanced audio with XLR connectors, 8 digit LED counter.

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

export default SONYVO9850