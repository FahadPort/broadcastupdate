import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVW70img from "../../assets/images/SonyBVW70.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyBVW70 = () => {

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
                <img src={SonyBVW70img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVW70</h3>
                <p className="para">
                BVW-70 Betacam SP Deck

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Betacamp</strong>
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
               The BVW70 is an edit master recorder/player. It incorporates four channels of FM (hi-fi) audio. VITC (Vertical Interval Time Code) allows accurate timecode reproduction at all times. The internal construction uses plug-in cards and makes maintenance and set-up access easy and a fully featured JOG/Shuttle edit wheel is available on the pullout sloping front panel to enable edit control of the local or a remote VTR.

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

export default SonyBVW70