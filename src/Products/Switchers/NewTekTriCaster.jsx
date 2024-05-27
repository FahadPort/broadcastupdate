import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewTek from "../../assets/images/NewTek.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const NewTekTriCaster = () => {
          
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
                <img src={NewTek} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">NewTek TriCaster TC1 SELECT Bundle
</h3>
                <p className="para">
                This bundle includes: TriCaster TC1 2RU and TC1LP</p>


               
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
                <h3 className="sec-head">Model Details</h3>
                <p className="para">The most complete production system available today, NewTek TriCaster TC1 represents the continued innovation of the iconic product that defined an industry. Designed with the way you work in mind and equipped with hundreds of advanced production capabilities, it has everything you need to do video your way today—and tomorrow.

</p>
               <p className="para">
               <ul>
<li><FaRegCircleDot/>Switching, streaming, recording in HD, 3G, and 4K UHD 60p</li>
<li><FaRegCircleDot/>Native software driven processing for maximum production power and flexibility</li>
<li><FaRegCircleDot/>Comprehensive camera coverage and compelling multi-source video mixing, including 16 external inputs and 4 M/Es</li>
<li><FaRegCircleDot/>Studio-grade Skype® video calling with multi-channel Skype TX software integration</li>
<li><FaRegCircleDot/>Integrated video servers allowing playback, replay, and live editing without any additional hardware</li>
<li><FaRegCircleDot/>Multi-channel ISO recording to full-resolution QuickTime® and H.264 files for VOD, post-production, and archive</li>
<li><FaRegCircleDot/>Dual-channel live streaming to Facebook Live, Microsoft®Azure®, Periscope, Twitch, YouTube™ Live, and more</li>
<li><FaRegCircleDot/>Real-time social media sharing to Facebook, Imgur, LinkedIn, Twitter, Vimeo, YouTube, and more</li>
<li><FaRegCircleDot/>Powerful production automation with custom macro commands, sophisticated full-motion compositing, and flexible control options</li>
<li><FaRegCircleDot/>Advanced audio mixing with multi-source configuration and control, professional DSPs, and 4 x 4 x 4 channel routing</li>
<li><FaRegCircleDot/>Premier creative capabilities, including multi-bus mix effects, animated titles and transitions, advanced chromakeying, spectacular live virtual sets, and more</li>
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

export default NewTekTriCaster