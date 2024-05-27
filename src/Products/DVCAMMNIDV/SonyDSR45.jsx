import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyDSR45img from "../../assets/images/Sony-DSR45.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SonyDSR45 = () => {
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
                <img src={SonyDSR45img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Sony DSR45</h3>
                <p className="para">
                SONY DSR-45 DVCAM Recorder PAL DRUM RUN 1200</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DVCAM/MNI DV</strong>
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
    
    <div id="abt-text">
        <Container>
          <div className="headcontent">
            <Row>
            <Col xs="12">
                <div className="innerContent" data-aos="fade-right" >
                  <h3 className="sec-head">
                  Model Details
                  </h3>
                  <p className="para">
                  As digital videocassette recorders evolve, they give users more tools to get the job done quickly and properly. The DSR-45 is a new versatile DVCAM digital video recorder that is perhaps the best in its class. Place the DSR-45 in a small to medium-sized production house to create an ideal system for both nonlinear editing and linear A/B roll editing as a source feeder.</p>
                <p className="para">1 Whether editing weddings, corporate training videos, or cable television programs, the DSR-45 gets the job done in a timely manner with professional results. Its i.LINK™2 interface allows seamless integration into compatible DV-based editing suites. In addition, analog component connectors allow the unit to accept and transfer high-quality video and audio. For external control, the DSR-45 comes standard with RS-422A and RS-232C interfaces. Equipped with a 2-inch3 built-in LCD, the DSR-45 displays information including; audio level, system status, and the working image as they are needed. The DSR-45 is the videocassette recorder of choice for small to medium-sized production houses.</p>
                </div>
              </Col>
           
              
             
            </Row>
          </div>
        </Container>
      </div>

 
   
  




  </Grid>
  )
}

export default SonyDSR45