import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AmpexAG440img from "../../assets/images/AmpexAG440.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const AmpexAG440 = () => {
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
                <img src={AmpexAG440img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Ampex AG-440</h3>
                <p className="para">
                RIGID DIE CAST FRAME provides absolutely flat, rigid mounting of all mechanical components. It assures stability for precise alignment for both 1/2 inch and 1/4 inch tapes. No flexing or distortion will occur in any configuration in any mobile or fixed application.

</p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Audio</strong>
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
                <p className="para">MAINTAINABILITY The AG-440 is designed for easy-rapid maintenance and minimum down-time. Modular design FRONT OF PANEL PLUG-IN BOARDS provide fast replacement or servicing. (Reserve boards permit the user to have full back-up should split second maintenance be required.) Individual head stacks can be replaced with a single screw and plug-in connector. Transport motors, guides and major components can be quickly removed and replaced in exact alignment because of the precision milled transport casting. All relays are plug-in, and interchangeable. Console models permit rotating transport for rapid accessibility.

</p>
                <p className="para">CONVERTIBILITY between 1/4 inch and 1/2 inch tapes is accomplished with ease. Tape transport guides rotate for either 1/4 inch or 1/2 inch tapes. One quarter inch head assemblies are standard on all one and two channel recorders. One-half inch assemblies are standard on all three and four channel recorders. Assemblies are quickly removed with three screws and new assemblies installed with registration dowel pins for quick alignment.

</p>
                <p className="para">FLEXIBILITY allows you to add three channel capability to a monophonic machine by installing two additional panels of electronics, changing heads and head cabling. The AG-440 console over-bridge modular mount accepts from 1 to 4 (or more) 3-1/4 inch electronics panels. For the first time, you can build a single channel full track Ampex up to a four channel, four track recorder.

</p>
                <p className="para">OBSOLETE PROOF The Ampex AG-440 allows you to expand without replacement. You can keep pace with the changing requirements of the industry, by using the building block increments of Ampex's new generation in professional audio recorders.

</p>
                <p className="para">JEWEL BEARING SCRAPE FLUTTER IDLERS minimizes scrape flutter (especially important to production of master tapes).

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

export default AmpexAG440