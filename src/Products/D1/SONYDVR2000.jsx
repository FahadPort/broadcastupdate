import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SONYDVR2000img from "../../assets/images/SONYDVR2000.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SONYDVR2000 = () => {
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
                <img src={SONYDVR2000img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony DVR2000</h3>
                <p className="para">
                Plays D1 tapes of different sizes



 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DVCPRO</strong>
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
                TWe have serval D1 VTR’s in stock, including the DVR-2100 with dynamic tracking.

</p>
<p className="para">Generally speaking we replace some electronic components, perform software updates, install a new pinch roller assembly, new idler drive wheels, new belts and lubricate and calibrate the deck. After this process our VTR’s meet or even exceed the original factory specifications.


</p>
<p className="para">D-1 or 4:2:2 Component Digital is an SMPTE digital recording video standard, introduced in 1986.

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

export default SONYDVR2000