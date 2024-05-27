import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVMD20F1Uimg from "../../assets/images/SonyBVMD20F1U.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyBVMD20F1U = () => {

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
                <img src={SonyBVMD20F1Uimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony BVM-D20F1U</h3>
                <p className="para">
                SProfessional-grade 20" multisync monitor from Sony.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Color Monitor</strong>
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
                Professional-grade 20" multisync monitor from Sony. This model requires a BKM 10R or 11R controller to operate (see below for more info). It includes one RGB/Component input, plus four card slots for additional video options. Displaying Composite or S-Video content requires one of several input cards (listed in the sales brochure) or an external NTSC to RGB decoder.


</p>

            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Multiformat Capability

</h3>
                <p className="para">
                This monitor is capable of displaying both Standard Definition (SD 240p/480i) and High Definition (HD 480p, 720p, 1080i) signals. This means you can connect HD source devices (for example component consoles like the Gamecube @ 480p, Xbox 360 @ 720p/1080i and PS3 @ 720p/1080i).


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

export default SonyBVMD20F1U