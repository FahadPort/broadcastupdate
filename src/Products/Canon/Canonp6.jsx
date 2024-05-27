import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import canon06 from "../../assets/images/canon06.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const Canonp6 = () => {
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
                <img src={canon06} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Canon J18X8.5B3IRS</h3>
                <p className="para">
                J18 x 8.5B3 1 x 121:1.7/8.5-153mm (fits Ikegami HL V55)

</p>
<h3 className="sec-head">Model Description:
</h3>
                <p className="para">
                2/3” Wide Angle Broadcast 18x lens For B3 Ikegami Mount


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
                <p className="para">
                <ul>
<li><FaRegCircleDot />Internal focusing system</li>
<li><FaRegCircleDot />Realization of 70x zoom ratio and wide-angle with reduced distortion in a compact body</li>
<li><FaRegCircleDot />Minimized variation of chromatic aberration while focusing.</li>
<li><FaRegCircleDot />Anti-Dust, Anti-Fog, thanks to a perfectly airtight Internal Focusing System</li>
<li><FaRegCircleDot />Minimized variation of the center of gravity through focus movement</li>
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

export default Canonp6