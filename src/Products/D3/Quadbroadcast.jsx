import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AMPEXAVR2 from "../../assets/images/AMPEXAVR2.jpg"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const Quadbroadcast = () => {
    
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
                <img src={AMPEXAVR2} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">AMPEX / AVR-2</h3>
                <p className="para">
                Used unit with video head and refurbished power supply.

</p>


               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Cameras</strong>
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
                2" Quad broadcast Editor. We Buy, rebuild and sell quad VTR
                </p>
               <p className="para">
               Compact 2" Quad Broadcast VTR. If you purchase our proper optional boards, it's a full editor Hi-Band, plays low band, high band and tapes with defective control tracks. Fully self contained, 117 vac.
the AVR-2 videotape recording system operates in three basic modes:record,playback,adn edit.Each operating mode is initiated at the transport control panel.Commands from the control panel are routed to the control logic.system operation in any mode requires tape threaded on the transport ,a source of source of compressed air,and 115/220-VAC power. if any of these prerequisites are not fulfilled,the control logic will prevent system operation.

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

export default Quadbroadcast