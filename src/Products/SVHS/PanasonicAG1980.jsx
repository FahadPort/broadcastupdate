import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAG1980img from "../../assets/images/Panasonic-AG1980.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicAG1980 = () => {
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
                <img src={PanasonicAG1980img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AG1980</h3>
                <p className="para">
                Specialties: * Full-field TBC * Independent linear audio in/out * Digital noise reduction * 3-D Y/C separation
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>SVHS</strong>
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
               <p className="para"> The Panasonic AG-1980 is a professional-grade VHS video cassette recorder (VCR) that was highly regarded for its exceptional playback and recording quality. It was widely used in broadcast, production, and professional video editing environments during the late 1980s and early 1990s. Here are some key details about the Panasonic AG-1980:</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
   
      </Container>
    </div>
  




  </Grid>
  )
}

export default PanasonicAG1980