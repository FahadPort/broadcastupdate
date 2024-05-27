import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AJHD1700img from "../../assets/images/AJHD1700.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const AJHD1700 = () => {

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
                <img src={AJHD1700img} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Panasonic AJHD1700</h3>
                <p className="para">
                Panasonic AJ-HD1700 DVCPRO HD-EX Studio VTR

 </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>DVCPRO</strong>
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
                The Panasonic AJ-HD1700 is a studio DVCPRO HD VTR designed to tackle the most advanced needs in high definition acquisition and delivery. The VTR features support for DVCPRO HD-LP recording which provides extended recording times over previous versions, allowing up to 126 minutes of HD footage on a single cassette tape.
</p>
<p className="para">Capable of recording three flavors of HD (1080/60i, 720/60p, and 1080/50i) the AJ-HD1700 is a versatile performer. Mastering for digital cinema purposes couldn't be easier; The VTR can directly convert Varicam 720/24p footage to 1080/24p. With the ability to handle a wide range of HD content along with standard definition formats such as NTSC and PAL, the AJ-HD1700 is a perfect solution for high end studio mastering applications.



</p>
            
                
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="headcontent">
          <Row>
            <Col xs="12">
              <div className="pro-inner">
                <h3 className="sec-head">Extended Record Times



</h3>
                <p className="para">
                Using the DVCPRO HD-LP XL tapes, the AJ-HD1700 is a capable of recording over 2 hours of a high definition footage using highly efficient DVCPRO HD compression technology.


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

export default AJHD1700