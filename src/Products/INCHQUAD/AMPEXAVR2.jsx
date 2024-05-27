import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AMPEXAVR2img from "../../assets/images/AMPEXAVR2.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AMPEXAVR2 = () => {
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
                <img src={AMPEXAVR2img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">AMPEX/AVR-2</h3>
                <p className="para">
                This is the Ampex AVR-2. A two inch quadruplex format broadcast VTR circa 1979. One of the last quads designed at Ampex. Plays low band, high band and tapes with defective control tracks. Digital TBC! 700 pounds! Fully self contained and capable of operating on household 117 vac. We'll see about that!</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>2 INCH QUAD</strong>
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
         This is the Ampex AVR-2. A two inch quadruplex format broadcast VTR circa 1979. One of the last quads designed at Ampex. Plays low band, high band and tapes with defective control tracks. Digital TBC! 700 pounds! Fully self contained and capable of operating on household 117 vac. We'll see about that!
        What makes this particular machine interesting is that it is the very machine I worked at as a quality control technician at CMC Technology in 1980! That was my first job in Silicon Valley. What a long time ago. . .	        I put many hours on this machine, but it has apparently seen a lot more hours than that over the years. This deck will require some serious restoration work. First thing it need is a video head assembly. A good cleaning and inspection from top to bottom.          This machine does still have the original monitor bridge with Conrac color monitor and Tektronix video waveform monitor and vector scope.

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

export default AMPEXAVR2