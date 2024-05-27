import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Midasimg from "../../assets/images/Midas.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const Midas = () => {

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
                <img src={Midasimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Midas M32 LIVE 40 Channel Digital Mixer</h3>
                <p className="para">
                If you've run upscale live sound anytime in the past 40 years, then you know Midas's reputation for creating top-quality full-sized consoles. </p>
               
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
                  <Link to="/Enquiry" >Send Enquiry</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="pro-text">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Model Details</h3>
                <p className="para">
                If you've run upscale live sound anytime in the past 40 years, then you know Midas's reputation for creating top-quality full-sized consoles. The Midas M32 digital mixing desk brings cutting-edge Midas innovation to the world of medium-format consoles.

</p>
<p className="para">Loaded with 32 premium Midas preamps, 25 time-aligned and phase-coherent DSP mix buses, brilliant DSP processing and routing, and massive expansion options, the M32 is an ideal foundation for moderate venues and professional touring rigs. Add to that a sense of ergonomics that makes it one of the easiest digital boards to get around, and there's no wonder the Midas M32 is one of the most popular mixers of its class we've ever seen.

</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Features</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />World-class medium-format digital console for live sound and studio recording</li>
<li><FaRegCircleDot />I/O includes 40 input channels with 32 transparent, low-noise Midas preamps</li>
<li><FaRegCircleDot />Cirrus Logic converters and 40-bit floating point offer 112dB of dynamic range</li>
<li><FaRegCircleDot />Industry-leading ergonomic design by Rajesh Kutty of Bentley Motors</li>
<li><FaRegCircleDot />Channel controls and all major functions are always within easy reach</li>
<li><FaRegCircleDot />Master control section features a 7" TFT display that's easily viewable even in daylight</li>
<li><FaRegCircleDot />LCD and TFT displays across the board ensure that you'll never get lost</li>
<li><FaRegCircleDot />Outfitted with 25 premium 100mm Midas Pro motorized faders rated to 1 million cycles</li>
<li><FaRegCircleDot />Easily assign channels to 8 DCA groups and 6 mute groups</li>
<li><FaRegCircleDot />Assign audio across 25 independent, time-aligned, and phase-coherent mix buses</li>
<li><FaRegCircleDot />100 Scenes/Snippets with 500 Cues provide powerful show automation possibilities</li>
<li><FaRegCircleDot />AES50 and Ultranet let you expand your system with up to 96 channels with P16 monitoring</li>
<li><FaRegCircleDot />Insert over 50 signal processors and effects across 8 stereo DSP engines</li>
<li><FaRegCircleDot />Simple USB port lets you record to a standard flash media drive</li>
<li><FaRegCircleDot />32-in/32-out, 48kHz USB 2.0 audio interface accommodates both studio and live recording</li>
<li><FaRegCircleDot />Control your DAW via either Mackie Control or HUI protocols with full automation</li>
<li><FaRegCircleDot />Optional Midas iOS apps provide Wi-Fi control via your iPhone or iPad</li>
<li><FaRegCircleDot />A perfect digital mixing console for touring sound reinforcement applications</li>
<li><FaRegCircleDot />Made of sturdy and lightweight carbon fiber, aluminum, and high-impact steel</li>
<li><FaRegCircleDot />Auto-ranging universal switch-mode power supply allows you to travel freely</li>
<li><FaRegCircleDot />32-channel live recording and playback on dual SD/SDHC cards</li>
<li><FaRegCircleDot />Independent operation of SD cards and USB recording/play/back</li>
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

export default Midas