import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MWAFlashscan8img from "../../assets/images/MWA-Flashscan-8-8mm-Filmscanner.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const MWAFlashscan8 = () => {
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
                <img src={MWAFlashscan8img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">MWA Flashscan 8</h3>
                <p className="para">
                MWA FLASHSCAN 8 – 8mm Film scanner

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Film</strong>
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
               MWA Flashscan 8 is a product manufactured by MWA Intelligence, Inc. MWA Intelligence is a leader in the enterprise resource planning (ERP) software space, particularly for businesses in the imaging industry, including managed print services (MPS) providers and copier dealers. The Flashscan 8 is a document capture and management solution aimed at optimizing workflow efficiency. It's designed to help businesses streamline their document handling processes by digitizing paper documents, enabling easier storage, retrieval, and sharing of information within an organization.</p>
                
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  




  </Grid>
  )
}

export default MWAFlashscan8