import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AJHD1400img from "../../assets/images/AJHD1400.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";



const AJHD1400 = () => {
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
                <img src={AJHD1400img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AJ-HD1400</h3>
                <p className="para">
                720/1080 video format cross conversion

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DVCPRO</strong>
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
                Outstanding Versatility and Cost-Performance in a VTR that Answers the Call for Universal HD Video Production As HD broadcasting and cinema continue to expand around the globe, the AJ-HD1400 helps you keep pace with the growing demand for high-quality HD content. This compact, economical desktop VTR records and plays in all of the world's HD broadcasting formats. It provides 720/1080 video format cross conversion and HD/SD down/up conversion. Also providing SD playback functions, the versatile AJ-HD1400 lets you produce video content for a variety of applications in all regions of the world.


</p>
<p className="para">The AJ-HD1400 makes a good fit in an AJ-HDC27H, VariCam HD production system where the need for DVCPRO HD quality is great. It can convert data from native 720p sources for output as 1080/24p or 25p data, and it adds a built-in function for gamma conversion of F.REC cine-gamma sources.



</p>
<p className="para">The AJ-HD1400 comes equipped with IEEE 1394 and HD-SDI digital input/output and a 9-pin remote interface for assemble/insert editing. From field recording to nonlinear and instudio editing, the AJ-HD1400 is a practical, reliable solution to a host of HD production needs. The AJ-HD1400 also offers outstanding cost-performance. The AJ-HD1400 makes it possible to configure an HD production system that's cost equivalent to many SD systems.

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

export default AJHD1400