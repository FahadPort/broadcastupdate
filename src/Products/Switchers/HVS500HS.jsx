import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HVS500HSimg from "../../assets/images/ForA-HVS-500HS.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const HVS500HS = () => {
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
                <img src={HVS500HSimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">For A HVS-500HS 1M/E HANABI HD/SD portable Switcher </h3>
                <p className="para">
                The HVS-500HS 1M/E HANABI HD/SD Portable Digital Video Switcher from For.A is a high-performance broadcast-quality switcher designed to combine extensive functionality and scalability in a compact and economical solution. </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Switcher</strong>
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
                  <p className="para">The HVS-500HS 1M/E HANABI HD/SD Portable Digital Video Switcher from For.A is a high-performance broadcast-quality switcher designed to combine extensive functionality and scalability in a compact and economical solution. This unit serves as the foundation for a fully customizable system that can be built out or scaled to match your changing needs. Rather than include multiple features inputs/outputs that oftentimes go unused, For.A designed this unit as a solid base solution with the option to expand the system at will by adding new cards and other functional upgrades.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default HVS500HS