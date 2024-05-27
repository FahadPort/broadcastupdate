import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BlackmagicDesignURSAimg from "../assets/images/BlackmagicDesignURSA.webp"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";


const BlackmagicDesignURSA = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
      }, []);
  return (
    <Grid>
      <div id="product">
        <Container>
          <div className="pro-inner">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={BlackmagicDesignURSAimg} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Blackmagic Design URSA </h3>
                  <p className="para">The Blackmagic URSA Mini Pro 12K is the fastest way to take your workflow to the next level. Based on the insanely popular URSA Mini Pro 6K, the 12K opens a new level of possibility with groundbreaking features in a package you know and love. If cine style lenses are your forte, you will love working with the URSA Mini Pro 12K.</p>

                  <p className="price">Call for price</p>

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
                    <Link to="/Enquiry">Send Enquiry</Link>
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
                  <p className="para">As the name suggests the prime feature of the Blackmagic URSA Mini Pro 12K is the ability to shoot in 12K. This massive resolution boost means more than just image clarity. The camera also adds a new depth to colors, a wider dynamic range and incredible contrasts. The camera oversamples 12K footage into 8K and 4K making the end result far richer and smooth.

</p>
                  <p className="para">The Super35 sensor on the URSA Mini Pro 12K has a resolution of 12,288 x 6480. That translates to an insane 80 MP per frame. The camera shoots up to 60 fps in 12K full sensor 17:9, 75 fps in 2:4:1 12K footage, 120 fps in 8K and a smooth 240 fps in 4K Super16. Along with 800 ISO and 14 stops of dynamic range, the sensor equally represents red, green and blue pixels. And thanks to in sensor scaling, you get your 8K and 4K shots up to 120 fps without any crop.

</p>
                  <p className="para">Equipped with a PL mount, the URSA Mini Pro 12K means business. You can quickly change from Nikon F to Canon EF mounts and experiment with pretty much any lens in your arsenal. With Gen5 color science, take in vast amounts of color data for post production. This means superior colors on bright objects and natural looking skin tones. The camera also has multiple ways to save your footage. Choose from CFast or UHS-II SD card slots, or jump to the  SuperSpeed USB Type-C expansion port.

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

export default BlackmagicDesignURSA