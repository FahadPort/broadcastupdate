import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAJHD3700Bimg from "../../assets/images/Panasonic-AJHD3700B.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicAJHD3700B = () => {
     
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
                <img src={PanasonicAJHD3700Bimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AJHD3700B</h3>
                <p className="para">
                Panasonic AJ-HD3700B D5 1/2" HD Mastering VTR w/ 107 Tape Hours

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
               <p className="para">Panasonic AJ-HD3700B D5 1/2" HD Mastering VTR that is Used. It has been tested to be in working condition. Tested to play, rewind and FF. Hours: 2193 Operation, Tape 107, Head 125, Thread 763
The AJ-HD3700B studio-quality HD Mastering VTR is designed to meet today's needs in high definition recording while extending the D-5 tradition of high-quality non-compressed standard-definition recording and playback
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

export default PanasonicAJHD3700B