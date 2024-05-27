import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PanasonicAVUHS500img from "../../assets/images/PanasonicAVUHS500.png"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const PanasonicAVUHS500 = () => {

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
                <img src={PanasonicAVUHS500img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AV-UHS500
</h3>
                <p className="para">
                The AV-UHS500 4K live video switcher demonstrates outstanding live video production performance in the field for use in a variety of applications, such as event staging, corporate gigs, broadcast at stations and live trucks, lectures on college campuses, and conference halls.</p>


               
                <p className="price">call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Switchers</strong>
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
                <h3 className="sec-head">KEY FEATURES
</h3>
          
               <p className="para">
               <ul>
<li><FaRegCircleDot/>4K live production video switcher</li>
<li><FaRegCircleDot/>12G-SDI compatible</li>
<li><FaRegCircleDot/>4K/3G/HD multi-format support with up/down, HDR/SDR and ITU-R BT.2020/BT.709 conversion functions</li>
<li><FaRegCircleDot/>Equipped with 5 keyers, including 2 channels of chroma-key and 2 channels of PinP</li>
<li><FaRegCircleDot/>5 optional boards available for customization and system flexibility</li>
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

export default PanasonicAVUHS500