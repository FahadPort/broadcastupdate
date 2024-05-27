import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axtdetail from "../assets/images/axtca10-detail.jpg";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const AmxAxtCa10 = () => {
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
              <img src={axtdetail} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Misc. Computer Hardware AMX AXT-CA10</h3>
                <p className="para">
                10.4" Color Active Power Tilt Touch Panel   
 </p>
               
                <p className="price"><strong className="pric-title">BCS Price:</strong></p>
                <p className="price">$4,662.75</p>
                <p className="price">($149.58/mo.)</p>
               

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

                  <Row>  
                  
                  <Col xs="6">
                  <p className="para">
                   <b className="hd-bold">Features:</b>
                  <ul>
                    <li><FaRegCircleDot />Software: TPDesign 3 Touch Panel Design/Programming</li>
                    <li><FaRegCircleDot />Options: WAV-PK WavePack, SMT-PK SmartPack</li>
                    </ul>
                    </p>

                    <p className="para">
                   <b className="hd-bold">Specifications:</b>
                  <ul>
                    <li><FaRegCircleDot />POWER: 1 A @ 12 VDC</li>
                    <li><FaRegCircleDot />MEMORY: 5MB (4MB flash)</li>
                    </ul>
                    </p>

                    <p className="para">
                   <b className="hd-bold">CONNECTORS</b>
                  <ul>
                    <li><FaRegCircleDot />4-pin AXLink and 2-pin 12VDC power jacks</li>
                    <li><FaRegCircleDot />DB-9 male PC/mouse input</li>
                    </ul>
                    </p>

                    </Col>

                    <Col xs="6">
                    <p className="para">
                   <b className="hd-bold">BASE DIMENSIONS:</b>
                  <ul>
                    <li><FaRegCircleDot />11.46" x 9.46" (29.12 cm x 24.0 cm)</li>
                    </ul>
                    </p>

                    <p className="para">
                   <b className="hd-bold">TILT SCREEN HEIGHTS</b>
                  <ul>
                    <li><FaRegCircleDot />Lowered - 4.14" (10.52 cm)</li>
                    <li><FaRegCircleDot />Raised - 9.84" (24.99 cm)</li>
                    </ul>
                    </p>

                    <p className="para">
                    <b className="hd-bold">ENCLOSURE:</b>
                   <ul>
                     <li><FaRegCircleDot />Black plastic with matte finish</li>
                     </ul>
                     </p>

                     <p className="para">
                    <b className="hd-bold">WEIGHT:</b>
                   <ul>
                     <li><FaRegCircleDot />4.6 lbs (2.08 kg)</li>
                     </ul>
                     </p>
                     </Col>
                  
                     </Row>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default AmxAxtCa10