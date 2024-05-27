import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FurmanARPROACLineRegulatorBimg from "../../assets/images/FurmanARPROACLineRegulatorb.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const FurmanARPROACLineRegulatorB = () => {
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
                <img src={FurmanARPROACLineRegulatorBimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Clear-Com – Eclipse HX-Median</h3>
                <p className="para">
                The Eclipse HX-Median is a 6RU frame that houses two CPU, seven interface card and eight interface module slots,</p>
               
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
               <p className="para">The AR-PRO AC Line Voltage Regulator is intended to protect computer, audio, video and other electronic equipment from problems caused by AC line voltage irregularities-- sags, brownouts, or overvoltages that can cause sensitive digital equipment to malfunction, or, in extreme cases, to sustain damage. It accepts single phase input AC voltages anywhere within two capture ranges, 88 to 134 or 170 to 264 volts, and converts them to the North American standard 120 volts (or, if desired, 100V). Voltages outside the ranges may be converted to usable levels, depending on how far out of range they are and what is considered usable. For example, any voltage from 80 to 267 will be converted to 120V +9, -11.
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

export default FurmanARPROACLineRegulatorB