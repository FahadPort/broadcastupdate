import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RTI6120img from "../../assets/images/RTI-6120.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const RTI6120 = () => {
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
                <img src={RTI6120img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">RTI 6120</h3>
                <p className="para">
                1 inch magnetic videotape cleaner and evaluator
Process any 1″ format, such as A-format, B, C, IVC, etc.


</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Tape Cleaners</strong>
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
               <p className="para">The TapeChek 6120 quickly separates good tape from bad. It eliminates guesswork when selecting the best tape to use.</p>
               <p className="para">All magnetic videotape is susceptible to dropouts, loose oxide, wrinkles and end damage.</p>
               <p className="para">Finding these problems is just one way the TapeChek 6120 can help you.</p>
               <p className="para">TapeCheck is the most cost effective way to evaluate, clean and condition your tapes.</p>
             
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
                <h3 className="sec-head">Provides six important quality control functions:</h3>
              <p className="para"><ol>
<li>Cleans tape to reduce temporary dropouts caused by loose oxide and dirt</li>
<li>Inspects for physical tape damage</li>
<li>Polishes tape for improved signal-to-noise ratio</li>
<li>Evaluates videotape for magnetic dropouts</li>
<li>Conditions and exercises tape for improved performance</li>
<li>Good tape reduces wear on the video heads and keeps VTR’s clean!</li>
</ol></p>
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
                <h3 className="sec-head">Videotape cleaner for following 1-inch formats</h3>
              <p className="para"><ul>
<li><FaRegCircleDot/>AMPEX 1-inch A-format</li>
<li><FaRegCircleDot/>Bosch BCN 1-inch B-format</li>
<li><FaRegCircleDot/>SONY and AMPEX 1-inch C-format</li>
<li><FaRegCircleDot/>1-inch IVC and other</li>
<li><FaRegCircleDot/>The magnetic tape layer can either be inside or outside</li>
</ul></p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default RTI6120