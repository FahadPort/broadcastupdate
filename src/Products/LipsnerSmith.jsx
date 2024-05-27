import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import comingsoon from "../assets/images/comingsoon.jpg";
import { IoStarSharp } from "react-icons/io5";
import AOS from "aos";

const LipsnerSmith = () => {
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
                  <img src={comingsoon} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Lipsner Smith</h3>
                  <p className="para">
                    <strong>Equipment Description:</strong> Lipsner Smith CF9400 Ultrasonic film cleaner with 8/16/35mm attachments that we are potentially seeking to sell. Would love to start a discussion to see if that's a possibility.
                  </p>

                  <div className="meta">
                    <div className="category">
                    Model# <strong>CF9400 Ultrasonic</strong>
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




    </Grid>
  )
}

export default LipsnerSmith