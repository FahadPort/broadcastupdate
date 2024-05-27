import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TektronixTSG170Aimg from "../../assets/images/Tektronix-TSG-170A.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const TektronixTSG170A = () => {
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
                <img src={TektronixTSG170Aimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Tektronix TSG-170A</h3>
                <p className="para">
                Tektronix TSG-170A NTSC Television Generator 

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>NTSC Signal Generator</strong>
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
                <p className="para">The Tektronix TSG 170A NTSC Television Generator offers test signals needed plus the advantages of master and genlock sync capability. It provides true 10-Bit Digital Signal accuracy with a full complement of test signals and a stable master sync generator.

</p>
                <p className="para">The rugged, compact TSG170A is designed to support both operational and maintenance requirements. The TSG170A with option 1 provides even more versatility by adding a separate SMPTE color bar generator, programmable identification, audio tone output, and tape leader countdown.

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

export default TektronixTSG170A