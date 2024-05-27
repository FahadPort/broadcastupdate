import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ForAHVS390HSimg from "../../assets/images/ForAHVS390HS.webp"


import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const ForAHVS390HS = () => {

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
                <img src={ForAHVS390HSimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">For-A HVS-390HS
</h3>
                <p className="para">
                With the HVS-390HS, there is no compromise offering up to 3 different control panels and up to 5 remote AUX control panels that can be used all at the same time!</p>


               
                <p className="price">call Now</p>
               

                <div className="meta">
                  <div className="category">
                    in <strong>Switchers</strong>
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
                <p className="para">The HANABI HVS-390HS is available as a 1M/E or 2M/E switcher. 1M/E versions can be upgraded to 2M/E. The 2M/E is switchable to 2.5M/E, with the additional bus being controlled by either the (included) Web browser control, or an (optional) control panel.
</p>
               <p className="para">
               With the HVS-390HS, there is no compromise offering up to 3 different control panels and up to 5 remote AUX control panels that can be used all at the same time!


</p>
<p className="para">You can choose what size or type of control you prefer and what fits your environment. From the 19??? rack mount 12 button panels (1M/E or 2M/E), all the way up to the operator designed 2M/E 28 button panel. As well as traditional control panels, there is also the choice of simple remote panel, included Web browser control, and our range of AUX control panels. All control choices are easy to operate, for safe, reliable and repeatable LIVE operation!

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

export default ForAHVS390HS