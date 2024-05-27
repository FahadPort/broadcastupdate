import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerimg from "../assets/images/ubiquiti-transparent1.png";
import wifigif from "../assets/images/wifiGif.gif"
import router from "../assets/images/router.webp"
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css"

const WiFi = () => {
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
                <img src={bannerimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Professional WiFi for your business or at home</h3>
                <p className="para">
                Wireless network and internet connections are becoming increasingly important. Whether it concerns your business network, where smartphones and laptops must have a good connection with your servers and printers, or a network for your guests. It just always has to work. </p>
               
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
                  <Link href="/Enquiry" >Send Enquiry</Link>
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
            <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                  Why not just the provider modem?
                  </h3>
                  <p className="para">
                  Wireless networks are basically relatively sensitive to interference. A microwave, cordless DECT telephone or thick concrete walls, they all negatively influence the network signal.
                  </p>
                  <p className="para">
                  It is therefore important to look carefully at where to place the channels.

                  </p>
                  <p className="para">
                  A provider modem is often located where the fixed signal (cable or fiber optic) enters the room, but this is not necessarily the ideal place for broadcasting a WiFi signal.

                  </p>
                  <p className="para">
                  By making smart use of the placement, but also the choice of the type of transmitter, we can deliver customization that results in a high-quality network. With a WiFi measurement we can also demonstrate the best solution for your specific building.


                  </p>
                 
                </div>
              </Col>
            <Col xs="6" gap-2>
                <div className="image">
                  <img src={wifigif} alt="" />
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
            <Col xs="6" gap-2>
                <div className="image">
                  <img src={router} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                  What does the channel look like?
                  </h3>
                  <p className="para">
                  Many different types of transmitters are available, but we see a number of them being used a lot in practice.
All transmitters are connected via Power over Ethernet, in short, both the power signal and the data transfer go through a single network cable.
                  </p>
                  <p className="para">
                  For indoor placement, we often use white 'dishes' or in-wall solutions that are placed over a flush-mounted box, or transmitters with separate antennas that are mainly used outdoors.


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

export default WiFi