import { Grid, Typography, Container, Button} from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kodo from "../assets/images/KOMODO.png";
import {Link} from "react-router-dom"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const SpeakerAlesis = () => {
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
                <img src={kodo} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">RED DIGITAL CINEMA KOMODO-X ST 6K Digital Cinema Camera (Canon RF, White)</h3>
                <p className="para">
                KOMODO-X™ is the next evolution in the KOMODO family, multiplying the frame rates, dynamic range, and usability of the original KOMODO to break new grounds.
 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Devices</strong>
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
                  KOMODO-X™ is the next evolution in the KOMODO family, multiplying the frame rates, dynamic range, and usability of the original KOMODO to break new grounds.</p>
 <p className="para">NEXT GENERATION KOMODO® SENSOR KOMODO-X features the same sized 6K S35 Global Shutter sensor as the KOMODO, but with a ground up redesign and key architecture improvements.
</p>
 <p className="para">Improved detail and color in shadows, paired with double the frame rates at 6K 80P and 4K 120P makes KOMODO-X an even more powerful tool for creatives.
</p>
 <p className="para">ENHANCED BODY AND I/O With key improvements for professional workflows, the KOMODO-X now shares many features with the DSMC3™ line while still maintaining the impressively small KOMODO form factor. An integrated micro VLock allows for direct attachment of professional micro V-Lock batteries without the need for adapters and is also compatible with the upcoming RED Pro I/O Module to provide auxiliary power and compatibility with full sized V-Lock and Gold Mount batteries.
</p>
 <p className="para">A reinforced RF lens mount with locking mechanism maintains the flexibility of toolless switching between multiple lens mount types, while providing the stability and rigidity professionals need. KOMODO-X is also fully compatible with /i PL lenses using the RED® RF to PL Adapter.
</p>
<p className="para">12G SDI, full sized DC-IN, USB Type-C, and a phantom powered locking audio connector further enables KOMODO-X to seamlessly integrate into any professional workflow. KOMODO-X is compatible with DSMC3™ RED® 5-Pin to Single 3.5mm Adapter to support existing KOMODO microphones, or the DSMC3™ RED® 5-Pin to Dual XLR Adapter for general purpose XLR microphones.
</p>
<p className="para">An integrated 2.9” LCD allows for simplified control and image preview in compact setups. For more precise monitoring, KOMODO-X supports the DSMC3™ RED® Touch 7.0" LCD which provides a daylight viewable, high-resolution, camera top monitor and control solution without the mess of cables.
</p>
<p className="para">IP CONNECTED KOMODO-X is a powerful platform for any IP based workflow, from virtual production to live broadcast. With integrated USB Type-C connection and built-in Wi-Fi, remotely control the camera using RED Control or RED Control Pro, as well as IP media offloading using FTPS or in-camera Cloud Uploading functionality (Frame.io and S3). In addition, KOMODO-X supports frame-accurate PTP synchronization or tri-level genlock sensor sync with the ability to offset on the fly to support multi-camera LED volume productions.
</p>
<p className="para">KOMODO-X also supports RED Connect, a licensed feature that allows for live broadcasting of 6K images directly from the camera over IP, expanding RED’s cinematic imagery into boundless new uses
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

export default SpeakerAlesis