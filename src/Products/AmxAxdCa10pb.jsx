import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ca10pbdetail from "../assets/images/ca10pb-detail.jpg";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const AmxAxdCa10pb = () => {
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
              <img src={ca10pbdetail} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Control System & Network AMX AXD-CA10/PB</h3>
                <p className="para">
                Decor Color Active-Matrix LCD Touch Panel with External Push Buttons (Wall Mount)</p>
               
                <p className="price"><strong className="pric-title">BCS Price:</strong></p>
                <p className="price">$6,520.25</p>
                <p className="price">($209.17/mo.)</p>
               

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
                  <p className="para">The AXD-CV10/PB Color Video Flush Mount Touch Panel with External Pushbuttons provides simpli?ed full-size control on walls, in lecterns and on other ?at surfaces. The panel communicates with a control system over the AXLink data bus. The AXD-CV10/PB has a color active-matrix 10.4 inch LCD, control graphics and a video window that can be resized.</p>
                  <p className="para">
                   <b className="hd-bold">Features:</b>
                  <ul>
                    <li><FaRegCircleDot />External pushbuttons</li>
                    <li><FaRegCircleDot />10.4" color active-matrix LCD screen</li>
                    <li><FaRegCircleDot />Enhanced graphic and control features</li>
                    <li><FaRegCircleDot />3M bytes memory (2M bytes flash)</li>
                    <li><FaRegCircleDot />16-bit resolution NTSC/PAL video</li>
                    <li><FaRegCircleDot />Resizable video display window</li>
                    <li><FaRegCircleDot />Perfect companion with wireless 2-way WavePack or 1-way wireless SmartPack</li>
                    </ul>
                    </p>

                    <p className="para">
                   <b className="hd-bold">Specifications:</b>
                  <ul>
                    <li><FaRegCircleDot />Power : 1 A @ 12 VDC</li>
                    <li><FaRegCircleDot />Bezel Color : Black or white</li>
                    <li><FaRegCircleDot />Color : White (FG951-81), Ivory (FG952-86)</li>
                    <li><FaRegCircleDot />DÉCOR®-STYLE Enclosures : Matte ?nish, screwed security overlay, and BB-TP3 Backbox</li>
                    <li><FaRegCircleDot />Pushbuttons : Up to 24 pushbuttons (/PB), 12 on each side</li>
                    <li><FaRegCircleDot />Base Dimensions : 8.88 x 12.88 x 2.19 inch 22.56 cm x 32.72 cm x 5.56 cm</li>
                    <li><FaRegCircleDot />Weight : 6.1 lbs. 2.77 kg</li>
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

export default AmxAxdCa10pb