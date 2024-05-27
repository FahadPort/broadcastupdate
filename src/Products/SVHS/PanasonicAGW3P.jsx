import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PanasonicAGW3Pimg from "../../assets/images/Panasonic-AG-W3P.webp";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const PanasonicAGW3P = () => {
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
                <img src={PanasonicAGW3Pimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AG-W3P Multi VHS Recorder PAL SECAM NTSC WORLD WIDE</h3>
                <p className="para">
                This is useful because there are a few different versions of the VHS. If you look at the picture of the front display above, you can see a world map. The panel shows all of the different types and where they are from. 
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
               <p className="para"> This is useful because there are a few different versions of the VHS. If you look at the picture of the front display above, you can see a world map. The panel shows all of the different types and where they are from. This VCR will play every single one of them. This is impressive because there are a different number of video lines and different color processors required to play each tape. This machine will do it all. The slick wooden side panels make this not only a functional, but also beautiful, beast. We have sold hundreds of these and can promise you that we are the place to get this product. Get it while you can as this could be the last one we get.</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
   
      </Container>
    </div>
  




  </Grid>
  )
}

export default PanasonicAGW3P