import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JVCAVPROImage from "../assets/images/JVCAVPRO.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";
const Jvcavp = () => {
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
                <img src={JVCAVPROImage} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">JVC AV-P750U</h3>
                <p className="para">
                The AV-P750U has am adjustable 5 position camera arm and rotate camera head to present objects from any angle.</p>
               
                <p className="price">$2,645.25</p>
                <p className="del">
                  <del>$2,745.25</del>
                </p>

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
                The AV-P750U has am adjustable 5 position camera arm and rotate camera head to present objects from any angle. The camera panning displays surrounding objects such as materials on wall, or even objects in conference hall, aftermoving aside close-up lens.
  </p>
               

                <p>
                  <strong>Features:</strong>
                </p>
                <p className="para">
                <ul>
<li><FaRegCircleDot />12x zoom</li>
<li><FaRegCircleDot />auto focus</li>
<li><FaRegCircleDot />high res camera</li>
<li><FaRegCircleDot />5 pos. camera arm</li>
<li><FaRegCircleDot />slide holder</li>
<li><FaRegCircleDot />Large stage</li>
<li><FaRegCircleDot />Dual inputs</li>
<li><FaRegCircleDot />mono/color</li>
<li><FaRegCircleDot />neg/pos</li>
<li><FaRegCircleDot />RS-232C</li>
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

export default Jvcavp