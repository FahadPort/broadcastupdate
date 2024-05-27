import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FujinonZK85300mmimg from "../../assets/images/FujinonZK85300mm.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const FujinonZK85300mm = () => {
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
                <img src={FujinonZK85300mmimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Fujinon ZK85-300mm
</h3>
                <p className="para">
                The Fujinon ZK85-300mm T2.9-4.0 Lightweight Cabrio Lens is a PL Mount lens that features a detachable servo drive unit.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>lenses </strong>
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
                 <p className="para">The Fujinon ZK85-300mm T2.9-4.0 Lightweight Cabrio Lens is a PL Mount lens that features a detachable servo drive unit. With the drive unit, this lens operates like a traditional ENG TV lens thanks to the same interface and accessories familiar to TV lens users. This is helpful in simplifying and reducing setup time since it is not necessary to use more complicated cine lens drive systems, and the drive seamlessly interfaces with wired and wireless cine control systems as well.</p>
                 <p className="para">With the drive unit removed, this lens has a standard 0.8mm cine gearing, allowing for the use of traditional third-party cine accessories (sold separately). This lens features hybrid technology from both Fujifilm broadcast and cine lens technologies in a lightweight and compact body.</p>
                 
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default FujinonZK85300mm