import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ca10detail from "../assets/images/c10-detail.jpg";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const AmxAxdCa10 = () => {
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
              <img src={ca10detail} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Control System & Network AMX AXD-CA10</h3>
                <p className="para">
                Decor Color Active-Matrix LCD Touch Panel (Wall Mount)    
 </p>
               
                <p className="price"><strong className="pric-title">BCS Price:</strong></p>
                <p className="price">$5,920.25</p>
                <p className="price">($189.92/mo.)</p>
               

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
                <div className="innerContent" >
                  <h3 className="sec-head">
                  Model Details
                  </h3>
                  <p className="para">The AXD-CA10 Color Active Wall/Flush Touch Panel provides simplified full-size touch control on walls, in lecterns, and within other flat surfaces.</p>
                  <p className="para">Experience vivid graphics with the Color Active Touch Panel.</p>
                  <p className="para">
                   <b className="hd-bold">Features:</b>
                  <ul>
                    <li><FaRegCircleDot />10.4" color active-matrix LCD screen</li>
                    <li><FaRegCircleDot />Enhanced graphic and control features</li>
                    <li><FaRegCircleDot />3M bytes memory (2M bytes flash)</li>
                    <li><FaRegCircleDot />Perfect companion with wireless 2-way WavePack or 1-way wireless SmartPack</li>
                    </ul>
                    </p>

                    <p className="para">
                   <b className="hd-bold">Specifications:</b>
                  <ul>
                    <li><FaRegCircleDot />POWER: 1 A @ 12 VDC</li>
                    <li><FaRegCircleDot />BASE DIMENSIONS (HWD): 8.88" x 12.88" x 2.19" (22.56 cm x 32.72 cm x 5.56 cm)</li>
                    <li><FaRegCircleDot />BEZEL COLORS: Black, white or Ivory</li>
                    <li><FaRegCircleDot />DECOR-STYLE ENCLOSURES: Matte finish, screwed security overlay, and BB-TP3 Backbox</li>
                    <li><FaRegCircleDot />WEIGHT: 6.1 lbs (2.77 kg)</li>
                    </ul>
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

export default AmxAxdCa10