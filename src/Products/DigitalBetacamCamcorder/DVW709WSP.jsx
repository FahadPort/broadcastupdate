import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DVW709WSPimg from "../../assets/images/DVW709WSP.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const DVW709WSP = () => {
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
                <img src={DVW709WSPimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">DVW-709WSP </h3>
                <p className="para">
                The DVW-709WSP, like all the Digi Betacam camcorders, combines the performance of digital recording with the convenience of an efficient data-handling format that fits up to 60 minutes of recording on a single 1/2-inch S-cassette. 

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Digital Betacam Camcorder</strong>
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
                The DVW-709WSP, like all the Digi Betacam camcorders, combines the performance of digital recording with the convenience of an efficient data-handling format that fits up to 60 minutes of recording on a single 1/2-inch S-cassette. 

</p>
<p className="para">Digi Betacam camcorders, including the DVW-709WSP, are not only smaller and lighter, they also achieve further reductions in the total shooting system needed by news acquisition crews.

</p>
<ul>
<li><FaRegCircleDot/>Aspect ratio: 4 X 3/16 X 9 IT CCD</li>
<li><FaRegCircleDot/>12 Bit Digital Head</li>
<li><FaRegCircleDot/>Record Format: Digital Betacam (4:2:2)</li>
</ul>

 
                
                
              </div>
            </Col>
          </Row>
        </div>
       
      </Container>
    </div>
  




  </Grid>
  )
}

export default DVW709WSP