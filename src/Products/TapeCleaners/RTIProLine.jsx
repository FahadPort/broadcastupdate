import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RTIProLine8100 from "../../assets/images/RTIProLine8100.jpeg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const RTIProLine = () => {
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
                <img src={RTIProLine8100} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">RTI Pro Line 8100 DLS – cleaner evaluator
</h3>
                <p className="para">
                HDCAM SR and BETACAM cleaner with flat wind technology

All our RTI tape cleaners are shipped in custom made wooden transport boxes.

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Tape Playback</strong>
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
                <h3 className="sec-head">RTI magnetic videotape cleaner and evaluator

</h3>
               <p className="para">
               Improve the output quality of your digital preservation project, by applying inspection and cleaning of Betacam and HDCAM tapes prior to the digitization process.

</p>


<h3 className="sec-head">Provides seven important quality control functions:</h3>
<p className="para">
<ul>
<li><FaRegCircleDot/>Cleans tape to reduce temporary dropouts caused by loose oxide and dirt</li>
<li><FaRegCircleDot/>Inspects for physical tape damage</li>
<li><FaRegCircleDot/>Polishes tape for improved signal-to-noise ratio</li>
<li><FaRegCircleDot/>Evaluates videotape for magnetic dropouts</li>
<li><FaRegCircleDot/>Conditions and exercises tape for improved performance</li>
<li><FaRegCircleDot/>Good tape reduces wear on the video heads and keeps VTR’s clean!</li>
<li><FaRegCircleDot/>Perfect flat (magnetic) tape wind technology.</li>
</ul></p>  

<h3 className="sec-head">Use the TapeChek Pro Line 8100DLS-SR cleaner and evaluator for: 

</h3>
<p className="para">
<ul>
<li><FaRegCircleDot/>HDCAM</li>
<li><FaRegCircleDot/>HDCAM SR</li>
<li><FaRegCircleDot/>Betacam</li>
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

export default RTIProLine