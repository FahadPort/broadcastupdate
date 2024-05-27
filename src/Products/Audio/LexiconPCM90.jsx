import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LexiconPCM90img from "../../assets/images/LexiconPCM90.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const LexiconPCM90 = () => {
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
                <img src={LexiconPCM90img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Lexicon PCM 90</h3>
                <p className="para">
                Lexicon PCM 90 comes with a built-in library of 250 reverb and other effects that simulate realistic halls, rooms and plates, or let you go wild and create freaky and other-worldly spaces.</p>
               
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
                <p className="para">
                The interface has lots of controls that allow you to really tailor the sound for any situation. The unit uses 5 stereo algorithms to create different types of reverb effects.
</p>
<p className="para">Tempo can be tapped or synced over midi to allow precise effect times, control LFO speeds and Time Switch controls, ensuring that all of your modulations are in tempo with your music.
</p>
<p className="para">The ADJUST knob ensures seamless control and alteration of any preset to fully satisfy your sonic needs. The edit mode can be used in GO mode for easy access to only the main parameters in live situations, or PRO mode for absolutely totalitarian power over your sound.</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
    
      </Container>
    </div>
  




  </Grid>
  )
}

export default LexiconPCM90