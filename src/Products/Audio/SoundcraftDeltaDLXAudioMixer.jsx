import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SoundcraftDeltaDLXAudioMixerimg from "../../assets/images/SoundcraftDeltaDLXAudioMixer.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const SoundcraftDeltaDLXAudioMixer = () => {
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
                <img src={SoundcraftDeltaDLXAudioMixerimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Soundcraft Delta DLX Audio Mixer</h3>
                <p className="para">
                For Sale Soundcraft Delta DLX in rackable chassis. 8 + 8 (A + B) input stereo Channels, 4 stereo busses, Master section and tape I/O.
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
                <p className="para">
                For Sale Soundcraft Delta DLX in rackable chassis. 8 + 8 (A + B) input stereo Channels, 4 stereo busses, Master section and tape I/O.

</p>
<p className="para">Channels work perfectly, as the busses and the master section do. All the pan pots needs to be used a little to make it more silent when passing the center detent point, and I thought it's normal, pan pots are not used frequently.

</p>
<p className="para">19" Rack stand is included and it was purchased 1 year ago.
</p>
<p className="para">Power supply included, 120-240V CPS-150.

</p>
<p className="para">Tape I/O board is untested

</p>
<p className="para">A powerful mixer, very clear and transparent, adds nice saturation if pushed to its limits! loved it, but it was too big for my place, and prefered a 2unit linear rack mixer.

</p>
<p className="para">The Unit is very heavy and will cost a lot shipping it, and I calculate  a shipping in 2 boxes, one for the mixer, one for psu and rack stand.

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

export default SoundcraftDeltaDLXAudioMixer