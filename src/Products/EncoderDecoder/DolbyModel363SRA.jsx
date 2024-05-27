import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DolbyModel363img from "../../assets/images/DolbyModel363.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const DolbyModel363SRA = () => {
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
                <img src={DolbyModel363img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Dolby Model 363 SR/A</h3>
                <p className="para">
                This unit is in super condition having been serviced by Tim walker, Tim has recapped the 363 and also recapped the 2 SR Cards which are fitted into the 363 he has also replaced the fan.



 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Encoder/Decoder</strong>
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
               <p className="para">This unit is in super condition having been serviced by Tim walker, Tim has recapped the 363 and also recapped the 2 SR Cards which are fitted into the 363 he has also replaced the fan. The 363 can accommodate Dolby A cards, model CAT 22 or the SR Cards model CAT 350. Dolby A used to provide 10 db of noise reduction where as SR, is capable of providing up to 25 dB noise reduction in the high frequency range.
</p>
<p className="para">If you are considering buying a stereo analogue recorder to achieve the authentic '80's sound you have 2 choices, you can run the tape at 30 ips ( inches per second ) without Noise Reduction or record at half speed, 15 ips and use a Dolby and halve the tape costs. But it is not only about tape noise and saving money, it is recognised that analogue tape running at 15ips with Dolby sounds better than tape running at 30 ips without Dolby, particularly in the lower frequencies.
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

export default DolbyModel363SRA