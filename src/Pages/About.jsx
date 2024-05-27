import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import goal from "../assets/images/goal.png";
import media from "../assets/images/media.png";
import production from "../assets/images/abt-product.jpg";
import equipment from "../assets/images/equipment.png";
import system from "../assets/images/system.png";
import sale from "../assets/images/sale.png";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"


const About = () => {

  const [title, setTitle] = useState("About Us- The BroadCast Store");
  const [description, setDescription] = useState("Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);

  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);

}, [])
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">About Us</h1>
          </div>
        </Container>
      </div>
      <div id="abt-des">
        <Container>
          <div className="para" >
          BroadcastStore.co
          </div>
        </Container>
      </div>
      <div id="abt-text" className="flx-img">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                    Sell, Buy, Trade, Consign, and Service of New and Used
                    Professional Equipment.
                  </h3>
                  <p className="para">
                    BroadcastStore or BroadcastStore.co has an extensive
                    inventory of new & used professional audiovisual equipment
                    available at a discounted price to our customers.
                  </p>
                  <p className="para">
                  BroadcastStore.co is the premiere site to list consign, or trade your equipment. Whether rotating out your existing equipment, or clearing out your storage area, BroadcastStore.co can assist you in securing maximum value on your investments.
                  </p>
                  <p className="para">
                  Our service department is second to none. We service all makes and models; digital, analog and HD.
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={sale} alt="" />
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
                  <img src={system} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">
                  System Integration
                  </h3>
                  <p className="para">
                  BroadcastStore.co Integration is a comprehensive solutions provider for your system integration and engineering needs. Combining years of experience in the broadcast field, with a recognized name in the industry, BroadcastStore.co Integration is positioned to assist you in seeing your vision come to reality; be it an HD studio, mobile solution, post production facility or for media migration, BroadcastStore.co Integration can make it happen. Contact us with your idea, and let us create the solution that fits your budget and needs.
                  </p>
            
                </div>
              </Col>
             
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text" className="flx-img">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                  Large-Scale Media Migration
                  </h3>
                  <p className="para">
                  BroadcastStore.co develops workflow solutions for large-scale media migration. We offer services with internal (your facility) or external (via our service bureau) media migration solutions. Our digitization laboratory is capable of encoding into any format you choose, (Quicktime, JPEG-2000, MPEG-2/4, .AVI to name a few). Entrust BroadcastStore.co to preserve your media for decades to come.
                  </p>
                  <p className="para">
                  We welcome you to contact us with your needs, and see what we can do for you
                  </p>
                  <Button className="theme-btn">
                    <Link to={'/LargeScaleMediaMigration'}>LEARN MORE</Link>
                  </Button>
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={media} alt=""/>
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
                  <img src={production} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                  Production Packages
                  </h3>
                  <p className="para">
                  Clients have always looked to BroadcastStore.co to provide them with guidance and access to the equipment to meet their specific shooting needs. With the economy in a volatile state, getting quality equipment at the right price is more critical than ever. </p>
            
                </div>
              </Col>
             
            </Row>
          </div>
        </Container>
      </div>
      <div id="abt-text" className="flx-img">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">
                  Sourcing Equipment
                  </h3>
                  <p className="para">
                  If we don’t have it we can find it. Broadcaststore.co has built a pervasive network to assist in the sourcing of hard to find or unique items.
                  </p>
                 
                </div>
              </Col>
              <Col xs="6">
                <div className="image">
                  <img src={equipment} alt=""/>
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
                  <img src={goal} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent" >
                  <h3 className="sec-head">
                  Our Goal
                  </h3>
                  <p className="para">
                  Our professional staff is on hand is to ensure that our customers receive top notch service at reasonable rates. We are committed to you the customer, and want to make your experience with us a pleasant and lasting one. </p>
            
                </div>
              </Col>
             
            </Row>
          </div>
        </Container>
      </div>
     






    </Grid>
  );
};

export default About;
