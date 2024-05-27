import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bryston3Bimg from "../../assets/images/Bryston3B.png"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";


const Bryston3B = () => {
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
                <img src={Bryston3Bimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Bryston 3B</h3>
                <p className="para">
                The Bryston 3B is a solid state power amplifier, made by Bryston in Canada. </p>
               
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
               <p className="para">The Bryston 3B is a solid state power amplifier, made by Bryston in Canada. Bryston has been famous for their high-end audio amplifiers and preamplifiers in Canada since the later '70's for their quality sound and reliability. It has a simple design of a heavy, sturdy black box with handles at the side to make it easier to carry. The Bryston 3B sounds open, has smoother and better extended highs and lows with a tight grip on the bass. It produces clear, fast, powerful, inspiring and detailed sound. The amplifier is a real powerhouse and it is best suited for movies with power and clarity of the Bryston 3B. Even when powering only two speakers, the sound explodes into the room with impactful and detailed sound. For example in a movie scene when the chain gun usually turns the sound into a compressed mash of gunfire with normal amplifiers, the Bryston 3B can produce detailed sounds of each round of the chain gun without the amplifier running out steam. The Bryston 3B is perfect for playing fast and powerful sounds in action movies and able to bring out the best characteristics of such genre.
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

export default Bryston3B