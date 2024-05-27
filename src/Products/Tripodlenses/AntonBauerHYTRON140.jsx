import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntonBauerHYTRON140img from "../../assets/images/Anton-BauerHYTRON140.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AntonBauerHYTRON140 = () => {
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
                <img src={AntonBauerHYTRON140img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Anton Bauer HYTRON 140</h3>
                <p className="para">
                The NEW HyTron™140, previously offered only to select broadcasters, is the highest capacity battery in the industry not subject to transportation restrictions. 

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Track Recorder</strong>
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
                <p className="para">The NEW HyTron™140, previously offered only to select broadcasters, is the highest capacity battery in the industry not subject to transportation restrictions. It employs a special nickel metal hydride cell technology developed for the newest low emission vehicles and e-bikes.This new cell design is exclusive to Anton/Bauer for the video industry and provides a capacity improvement greater than 40% compared to the HyTron 100.Due to the robust nature of this cell, it outperforms in applications that leave other chemistries on the sidelines. Capable of loads up to 12 amps, the new HyTron 140 is uniquely able to handle the high current demands of HD cameras fully dressed with the latest production accessories.</p>
                <p className="para">The HyTRON system requires none of the “safety circuits” and performance limiting circuitry which lithium ion requires to operate safely. As a result of this, it does not require limiting when operating both a camera and on-camera UltrLight up to 85 watts (up to 175 watts total power). Choose HYTRON 140 or HyTron 100 for “All Morning/All Afternoon” shooting. Because of its advanced performance characteristics, HyTRON 140 and HyTron 100 are the only new technology batteries in the industry to carry the MAXX IV Warranty.</p>

            
                
                
              </div>
            </Col>
          </Row>
        </div>
       
      </Container>
    </div>
  




  </Grid>
  )
}

export default AntonBauerHYTRON140