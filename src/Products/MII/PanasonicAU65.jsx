import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AU650img from "../../assets/images/AU-65H.jpg"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"


const PanasonicAU65 = () => {
    
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
                <img src={AU650img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">PANASONIC AU-65H – MII
</h3>
                <p className="para">
                Plays MII small and large tapes

PAL, 230V


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
                  We have several models of fully refurbished MII recorders in stock: </p>
                  <p className="para">JVC branded KR-M545E, KR-M800E & KR-M860E and Panasonic AU-W33H & AU-W35H and AU-62HE.
</p>
                  <p className="para">Reproducing and digitising MII tapes is not an easy thing to do. Compared to Betacam MII is fairly problematic format. Read more about it here.
</p>
                  <p className="para">
                  MII is a professional analog recording videocassette format developed by Panasonic in 1986 in competition with SONY’s Betacam SP format.

                  </p>
                  <p className="para">It was technically similar to Betacam SP, using metal-formulated tape loaded in the cassette, and utilizing component video recording.

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

export default PanasonicAU65