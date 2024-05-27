import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Manfrotto from "../assets/images/Manfrotto.png";
import {Link} from "react-router-dom"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const Ipadpro = () => {
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
                <img src={Manfrotto} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">Manfrotto SYMPLA - Shoulder Support System. Assemble, configure and use in seconds</h3>
                <p className="para">
                The Manfrotto SYMPLA Shoulder Support System combines several SYMPLA components into a highly adjustable DSLR shoulder rig.</p>
               
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
                  <ul>
<li> <FaRegCircleDot />Highly Adjustable DSLR Shoulder Rig</li>
<li> <FaRegCircleDot />Camera Can Be Adjusted Along 3 Axes</li>
<li> <FaRegCircleDot />Handles Adjust to Most Any Position</li>
<li> <FaRegCircleDot />Handles Can Be Used as Pan Bars</li>
<li> <FaRegCircleDot />Features Fittings for Lights / Monitors</li>

</ul>
                  
                  </p>
                  <p className="para">The Manfrotto SYMPLA Shoulder Support System combines several SYMPLA components into a highly adjustable DSLR shoulder rig.
</p>
                  <p className="para">The rig's camera plate, called a Variable Plate, takes on a camera by quick-release functionality and features three different axes that the camera can be adjusted along -- longitudinal, lateral and vertical. You can slide the camera up and down the rods, offset the camera from the plate's center, and align the plate higher and lower. In all three instances, a separate ratchet lever tightens to lock the camera in position. The flexibility of three independent axes allows the camera to be set up for different types of shots and allows the viewfinder to be positioned right in front of your eye. The Plate also has Easy-Link fittings on its sides for attaching Magic Arms, light modifiers, lighting units and external monitors.
</p>
                  <p className="para">Swivel-joint Adjustable Handles at the front of the rig can be set in pretty much any position -- vertical, horizontal, upside-down, and every other in between. They can be set closer together, wider apart, and rotated 360?, allowing comfort and precision. Once you find the right position, just lock it in place -- each handle has its own locking dial (and each handle can be positioned differently). The Handles additionally play a part in incorporating optional remote controls to your rig. SYMPLA offers two different remote control units for adjusting the focus on DSLRs. One of the ways of mounting these remotes is by way of the Handles. They attach to the top parts of the Handles.
</p>
                  <p className="para">Every component of the rig is easily detachable thereby giving you the flexibility to reconfigure your rig with other optional components should you ever want to. But as it stands now, the rig is a full-out Shoulder Support system designed for quality material and precision mechanics and for the most part requiring no tools at all.
</p>
                  <p className="para">NOTE: In most cases "stock" manufacturer images and descriptions are used in this catalog. Actual Rental items may vary slightly.
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

export default Ipadpro