import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyVP7040img from "../../assets/images/SONYVP7040.jpg";


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyVP7040 = () => {

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
                <img src={SonyVP7040img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony VP7040</h3>
                <p className="para">
                Multi-standard, plays Umatic Low-band recorded tapes in PAL/SECAM/NTSC


 </p>
               
                <p className="price">Call for price</p>
               

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
                  We have many VP-5030, VP-5040 and VP-7040 units in stock.</p>
                  <p className="para">Delivery with existing drum, or with a new upper drum and 90 day limited warranty are some of the options. Generally speaking we replace some electronic components, perform software updates, install a new pinch roller assembly, new idler drive wheels, new belts and lubricate and calibrate the deck. After this process our VTR’s meet or even exceed the original factory specifications.

</p>
                  <p className="para">The VP-7040 is a standard Low Band Multi-standard U-matic player, handling PAL, SECAM and NTSC 4.43 recorded tapes.

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

export default SonyVP7040