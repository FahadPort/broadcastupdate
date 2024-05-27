import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Clearcomimg from "../../assets/images/Clear-Com.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const Clearcom = () => {

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
                <img src={Clearcomimg} alt="" />
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
                <p className="para">
                The Eclipse HX-Median is a 6RU frame that houses two CPU, seven interface card and eight interface module slots, uniquely designed for outside broadcast vehicles, mobile flight-case systems, or any production environment where rack space is limited.</p>
            <p className="para">The Eclipse HX-Median is a 6RU frame that houses two CPU, seven interface card and eight interface module slots, uniquely designed for outside broadcast vehicles, mobile flight-case systems, or any production environment where rack space is limited. Up to 15 Eclipse HX matrices can be connected to form a single networked platform. Up to 64 Eclipse HX matrices can be connected to form a single networked installation.

</p>
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Eclipse HX-Median Features:

</h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot />6RU system frame with passive back-plane, seven interface and eight interface module slots</li>
<li><FaRegCircleDot />Up to 448 internal ports</li>
<li><FaRegCircleDot />Dual-redundant CPU-HX fitted; dual-redundant power supplies fitted</li>
<li><FaRegCircleDot />Expandable to become a multi-frame system with redundant non-blocking fiber</li>
<li><FaRegCircleDot />Networking/Linking options include 4-wire, Fiber, IP, MADI, E1/T1, GPIO, DANTE and AES67</li>
<li><FaRegCircleDot />Seamless integration with FreeSpeak II Wireless Intercom and IP Communication Panels </li>
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

export default Clearcom