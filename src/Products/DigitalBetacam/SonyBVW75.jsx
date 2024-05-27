import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVW75img from "../../assets/images/SonyBVW75.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SonyBVW75 = () => {

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
                <img src={SonyBVW75img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVW75</h3>
                <p className="para">
                AC Power Cord, Operation manual, Maintenance manual, Remote control cable RCC-5G (9-pin), Extension boards A/B/C


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
               The BVW-75 is the established workhorse of the analogue Betacam SP machines. It is an edit master recorder/player that incorporates Dynamic Tracking and a Built in Timebase corrector for perfect noise free playback. It also boasts four channels of audio, ( Two AFM, hi-fi, audio tracks and two Linear tracks) plus a VITC (Vertical Interval Time Code) that allows accurate timecode reproduction at all times in conjunctions with the LTC reader.
The internal construction uses plug-in cards and makes maintenance and set-up access easy and a fully featured JOG/Shuttle edit wheel is available on the pullout sloping front panel to enable edit control of the local or a remote VTR.

There were two versions of the Time Base Corrector with differnet specifications. Known as TBC-8 and TBC-12 the latter is preferable as it has enhanced performance.
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

export default SonyBVW75