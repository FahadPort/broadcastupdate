import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyJ30SDIimg from "../../assets/images/Sony-J30SDI.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyJ30SDI = () => {
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
                <img src={SonyJ30SDIimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony J30SDI</h3>
                <p className="para">
                SONY J-30SDI Player for Betacam, Beta SP, Beta SX, Digi-Beta and MPEG/IMX drum hr 950 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Beta Decks</strong>
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
                  Sharing the same chassis design of their predecessors, the new J Series Compact Players retain a compact and lightweight design. At just 307 x 100 x 397 mm (12 1/8 x 4 x 15 3/4 inches) in size and in weight 8.1 kg (17 lb 14 oz), they are equivalent in size to a standard desktop PC. They can be placed on the desks of busy producers, journalists, and editors either horizontally or upright in the supplied vertical stand - perfect for space- constrained or awkward environments. In addition, their new light-metallic coloring makes the J Series Compact Players even more suitable for the office environment.</p>
                  
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyJ30SDI