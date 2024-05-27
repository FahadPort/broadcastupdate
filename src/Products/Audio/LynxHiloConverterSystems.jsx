import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LynxHiloConverterSystemsimg from "../../assets/images/LynxHiloConverterSystems.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const LynxHiloConverterSystems = () => {
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
                <img src={LynxHiloConverterSystemsimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Lynx Hilo A/D D/A Converter Systems</h3>
                <p className="para">
                Lynx HiLo A/D D/A Converter System. With the Lynx Hilo A/D D/A Converter System, Lynx has re-engineered the two-channel converter format with innovative features and control.

,</p>
               
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
                Lynx HiLo A/D D/A Converter System. With the Lynx Hilo A/D D/A Converter System, Lynx has re-engineered the two-channel converter format with innovative features and control.


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

export default LynxHiloConverterSystems