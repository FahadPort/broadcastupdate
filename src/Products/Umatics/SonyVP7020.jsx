import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyVP7020img from "../../assets/images/SonyVP7020.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyVP7020 = () => {
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
                <img src={SonyVP7020img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony VP-7020 </h3>
                <p className="para">
                3/4 inch U-matic Videocassette Player (EIA/NTSC) with picture search

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
                Type VII U-Matic videocassette player with picture search (5xFWD/REV), noiseless still picture, LED real time counter and external sync input. Optional Frame Code and RS-232C capability with BKU-701.Optional 33-pin parallel remote control with BKU-702. 4 Rack Units High.Simple wired or wireless remote control capability using optional RM-770 remote control.</p>
            
                <p className="para">
                The VP-7020 obtains high picture quality by making the most of the U-Matic format. When KSP videocassettes that have been recorded by SP (Superior Performance) U-Matic, such as the VO-9600, are used, the VP- 7020 can provide high quality picture playback.

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

export default SonyVP7020