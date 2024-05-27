import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import product01 from "../../assets/images/ctgr-img1.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";

const BroadcastStore1InchType = () => {
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
                <img src={product01} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">The broadcast store 1 Inch Type C transfer to digital file</h3>
                <p className="para">
                1 inch C Format videotape digitized to Quicktime file or other file formats  </p>
               
                <p className="price">Call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Videotape</strong>
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
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
                Using our professional The broadcast store lab, your tape will be treated like royalty throughout the archiving process. Our climate controlled and extremely secure facility with state of the art archiving machines is managed by staff who have been archiving video tapes for decades. Our mass media migration process is completely automated, allowing quick turn-around and extremely professional results. Unlike our competitors, we use mastering quality hardware encoders to achieve the best quality possible off your original source media. Rest assured, your tapes are in good hands at the BCSB facility. </p>
               

                <p>
                  <strong>The following items are included in this price:</strong>
                </p>
                <p className="para">
                <ul>
<li> <FaRegCircleDot />NTSC Master grade ProRes 4:2:2 file generated, other file formats include: Uncompressed, MPEG2 and DV.</li>
<li> <FaRegCircleDot />Other formats (including PAL) and services such as metadata creation are available. Please call for pricing.</li>

</ul>
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

export default BroadcastStore1InchType