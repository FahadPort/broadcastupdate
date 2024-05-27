import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyPCMR700img from "../../assets/images/SonyPCMR700.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyPCMR700 = () => {
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
                <img src={SonyPCMR700img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony PCM-R700</h3>
                <p className="para">
                Sony's ultimate professional Digital Audio Tape (DAT) recorders.
</p>
               
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
               <p className="para">Inheriting some mechanical parts from previous units such as the DTC-2000ES or even the DTC-1000ES / PCM-2500 ancesters.
</p>
               <p className="para">The R700 is a 4-head design ; the R500 a simpler 2-Head ; the a/d conversion on both is of the "Delta-Sigma" type with 24bit resolution ; d/a conversion is 1bit Pulse with 20bit resolution.
</p>
               <p className="para">The R700 has its tape/monitor switch located left, under the remote selector ; the R700 and R500 are otherwise visually identical.
</p>
               <p className="para">The efficient SBM (Super Bit Mapping) is here, just like fully professional features like sync and sync level offsets, frame-accurate search or even automatic Q codes marking (Q IDs are the track start IDs on CDs).

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

export default SonyPCMR700