import React, { useEffect, useRef, useState } from "react";
import { Grid, Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const [csrfToken, setCsrfToken] = useState('');
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: ""
  });
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/csrf-token'); // Fetch CSRF token from Laravel backend
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  const contactChange = (e) => {
    let { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const contactSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('firstName', contact.firstName);
    formData.append('lastName', contact.lastName);
    formData.append('email', contact.email);
    formData.append('phone', contact.phone);
    formData.append('message', contact.message);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact-us-submit', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
        },
        body: formData
      });
  
      const responseData = await response.json();
      console.log('Response Data:', responseData);
  
      if (response.ok) {
        console.log('Success:', responseData);
        navigate("/thankyou");
      } else {
        console.error('Error:', responseData);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  return (
    <Grid>
      <div id="form">
        <Container>
          <div className="form-content">
            <Row>
              <Col>
                <div className="text-cn" data-aos="fade-up">
                  <h3 className="sec-head">Get a Quote</h3>
                  <p className="para">
                    Want to get in touch? We’d love to hear from you. Here’s how
                    you can reach us..
                  </p>
                </div>
              </Col>
            </Row>
            <form ref={form} onSubmit={contactSubmit}>
              <Row>
                <Col xs="6">
                  <div className="fields">
                    <label>
                      First name <br />
                      <input
                        onChange={contactChange}
                        value={contact.firstName}
                        name="firstName"
                        type="text"
                      />
                    </label>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="fields">
                    <label>
                      Last name <br />
                      <input
                        onChange={contactChange}
                        value={contact.lastName}
                        name="lastName"
                        type="text"
                      />
                    </label>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs="6">
                  <div className="fields">
                    <label>
                      Email<br />
                      <input
                        onChange={contactChange}
                        value={contact.email}
                        name="email"
                        type="email"
                      />
                    </label>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="fields">
                    <label>
                      Phone<br />
                      <input
                        onChange={contactChange}
                        value={contact.phone}
                        name="phone"
                        type="number"
                      />
                    </label>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="fields">
                    <label>
                      Your message<br />
                      <textarea
                        cols="30"
                        rows="10"
                        value={contact.message}
                        name="message"
                        onChange={contactChange}
                      />
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
            </form>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default Enquiry;
