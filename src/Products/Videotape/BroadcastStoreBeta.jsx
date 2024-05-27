import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import product02 from "../../assets/images/ctgr-img2.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";


const BroadcastStoreBeta = () => {
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
                <img src={product02} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">The broadcast store 10,000 Beta or DigiBetacam video tapes</h3>
                <p className="para">
                SPECIAL OFFER: 10,000 Beta or DigiBetacam video tapes digitized before the end of this year.</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Videotape</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
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
                10,000 Beta or DigiBetacam video tapes digitized before the end of this year.</p>
                <p className="para">Using our professional The broadcast store lab's facility, our rapid media migration process is fully automated, allowing quick turn-around. We use mastering quality hardware encoders to achieve the best results possible off your original source media. Rest assured, your tapes are in good hands at the The broadcast store facility.</p>
               

                <p className="para">
                <ul>
<li> <FaRegCircleDot /> Betacam SP and Digital Betacam.</li>
<li><FaRegCircleDot />  NTSC Master grade ProRes 4:2:2 Quick-Time file & some other MPEG2, DV.... ( request more information if needed.)</li>
<li><FaRegCircleDot /> Tapes length up to 90 min.</li>
<li><FaRegCircleDot /> Lower pricing for quantities of 1,000 tapes minimum.</li>
</ul>
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

export default BroadcastStoreBeta