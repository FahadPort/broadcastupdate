import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DBX150Ximg from "../../assets/images/DBX-150X.png"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const DBX150X = () => {
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
                <img src={DBX150Ximg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">DBX 150X</h3>
                <p className="para">
                The DBX 150X was originally designed Type I Noise Reduction for use with professional reel to reel machines. This usually means tape decks running at 15 ips. It features Fully Balanced 2 Channel TRS Inputs and Outputs. The 150X is a 600 ohm balanced unit. It is designed for +4dB levels, using TRS connectors




 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Vectorscope</strong>
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
       <p className="para">The DBX 150X was originally designed Type I Noise Reduction for use with professional reel to reel machines. This usually means tape decks running at 15 ips. It features Fully Balanced 2 Channel TRS Inputs and Outputs. The 150X is a 600 ohm balanced unit. It is designed for +4dB levels, using TRS connectors
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

export default DBX150X