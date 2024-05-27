import React, { useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TbLocationExclamation } from "react-icons/tb";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { GiCardPickup } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import AOS from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);

    }, [])
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">Contact Us</h1>
          </div>
        </Container>
      </div>

      <div id="contact-sec">
        <Container>
          <div className="cta-content">
            <Row>
              <Col xs="3" data-aos="fade-up">
                <div className="clm-cntnt" 
     >
                  <TbLocationExclamation />
                  <p className="cta-line">Los Angeles</p>
                </div>
              </Col>
              <Col xs="3" data-aos="fade-up">
                <div className="clm-cntnt" 
     >
                  <HiOutlineInformationCircle />
                  <p className="cta-line">By Appointments Only</p>
                </div>
              </Col>
              <Col xs="3" data-aos="fade-up">
                <div className="clm-cntnt" 
     >
                  <GiCardPickup />
                  <p className="cta-line">
                  15500 W Telegraph Rd, Unit C26
                  Santa Paula, CA 93060 
                  </p>
                </div>
              </Col>
              <Col xs="3" data-aos="fade-up">
                <div className="clm-cntnt" 
     >
                  <GrContactInfo />
                  <p className="cta-line"><a href={'tel:747-609-5599'}>747-609-5599</a></p>
                  <p className="cta-line"><a href={'emailto:suzy@thebroadcaststore.co'}>suzy@thebroadcaststore.co</a></p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div id="form">
        <Container>
          <div className="form-content">
            <Row>
              <Col>
                <div className="text-cn" data-aos="fade-up">
                  <h3 className="sec-head" >Get in Touch</h3>
                  <p className="para">
                    Want to get in touch? We’d love to hear from you. Here’s how
                    you can reach us..
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="fields">
                  <label>
                    Your name <br/>
                    <input type="text" />
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="fields">
                  <label>
                    Your email<br/>
                    <input type="email" />
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="fields">
                  <label>
                    Subject<br/>
                    <input type="text" />
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="fields">
                  <label>
                    Your message (optional)<br/>
                   <textarea name="" id="" cols="30" rows="10"></textarea>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="btns">
                  <input type="submit" className="theme-btn" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default Contact;
