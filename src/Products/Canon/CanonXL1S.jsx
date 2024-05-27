import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import canon1 from "../../assets/images/Canon1.jpg";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";


const CanonXL1S = () => {
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
                  <img src={canon1} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Canon XL1S</h3>
                  <p className="para">3CCD Digital Video Camcorder</p>

                  <p className="price">	$3,836.55</p>

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
                    <Link href="/Enquiry">Send Enquiry</Link>
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
                    The Canon XL1S is not one, but many different cameras.
                    Interchangeable lenses and viewfinders allow the XL1S to be
                    tailored for optimal performance in any shooting condition.
                    Incorporating high precision optics, full manual control,
                    and features found only previously on top-end professional
                    gear, the XL1S raises the standard for others to follow.
                    3-CCD Image Sensor 3-CCDs with 270,000 pixels each, create
                    true-to-life quality images. A beam splitting prism
                    separates the light passing through the lens into individual
                    color components (RGB), and each is sent to its own CCD to
                    achieve outstanding detail and highly accurate color
                    reproduction. Although, it uses 270,00 pixels CCDs, the XL1S
                    employs advanced Pixel Shift CCD technology to rival
                    410,000-pixel systems. Using Pixel Shift, the camcorder
                    achieves 530 lines of resolution while applying significant
                    improvements to the video signal. This results in a wider
                    dynamic range, low color noise, excellent color
                    reproduction, a high signal-to-noise ratio, reduced vertical
                    smear and remarkable performance in low-light.{" "}
                  </p>

                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        <strong>
                          Interchangeable XL Lens Mount System:
                        </strong>{" "}
                        Proprietary interchangeable XL Lens Mount system
                        provides unsurpassed flexibility, superior range, and
                        opens up a dynamic world of imaging perspectives ranging
                        from extra wide to super telephoto. Designed for the
                        performance requirements of a 3-CCD system and the
                        maximum potential of the DV format, the XL lenses
                        incorporate the highest quality multi-coated optical
                        elements to achieve 600 lines of horizontal resolution.
                        By exceeding the DV format resolution, the lenses
                        deliver greater visual "sharpness" through its higher
                        sensitivity in the all-important 100 to 250 TV line
                        resolution area. The lenses also integrate high-speed
                        driving motors for faster response of the internal
                        auto-focusing system and variable zoom speeds.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>16:1 Optical Zoom:</strong> The supplied 16:1
                        optical zoom lens has a focal length range of 5.5mm to
                        88mm (35mm focal length equivalent of 39 to 633mm). It
                        has high-speed motors for auto-focus and zooming, a
                        six-blade Iris, and a 1.5x ND filter. Externally, the
                        lens provides a variable speed zoom, manual zoom, manual
                        focus control options, and a one-push auto-focus button.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>
                          SuperRange Optical Image Stabilizer:
                        </strong>{" "}
                        The 16:1 lens incorporates an improvement of Canon's
                        vari-angle prism optical image stabilization system.
                        SuperRange Optical Image Stabilization takes it a step
                        further, using a motion vector to examine the image
                        after it is received by the CCD, and it detects any
                        low-frequency vibration missed by the gyro. This data is
                        fed back to accelerate and refine the movement of the
                        stabilizer's vari-angle prism, significantly improving
                        performance for low-frequency vibration effectively
                        eliminating image shake, resulting in the most advanced
                        optical image stabilization system.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>Three Recording Modes:</strong> Three recording
                        options for virtually any imaging need include capture
                        of high-resolution full-motion video (Normal Movie
                        Mode), high-resolution stop-action images of moving
                        subjects (Frame Movie Mode), and picture-perfect single
                        images (Digital Photo Mode). Frame Movie Mode lets you
                        continuously record an incredible 30 frame images a
                        second, while effectively eliminating motion flicker by
                        capturing a full image with every scan. For SLR-style
                        flash photography, the Digital Photo mode will
                        accommodate the Canon speedlite E-TTL flashes, using an
                        optional FA-200 flash adapter.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>Frame Movie Mode:</strong> Lets you continuously
                        record an incredible 30 frame images a second, while
                        effectively eliminating motion flicker by capturing a
                        full image with every scan. The Frame Movie mode allows
                        you to record high-speed action for the purpose of
                        extracting high-resolution frame video images, which can
                        then be displayed, printed, or digitized.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>For SLR-style flash photography:</strong> The
                        Digital Photo mode will accommodate the Canon speedlite
                        E-TTL flashes, using an optional FA-200 flash adapter.
                      </li>
                      <li>
                        <FaRegCircleDot />
                        <strong>Step Up Features From XL1:</strong> The same
                        popular camera body of the Canon XL1 has been
                        maintained. It is a style that professionals prefer for
                        portability, comfort, and functionality. The magnesium
                        alloy body provides rigidity and shock resistance, and
                        it permits considerable accessories with lenses, inputs,
                        and other filmmaking equipment. The key differences,
                        therefore, between the new Canon XL1S and the original
                        Canon XL1 are not on the outside but, rather, inside of
                        the camcorder.
                      </li>
                    </ul>
                  </p>
                  <h3 className="sec-head">Features:</h3>
                 
                  <p className="para">
                  <ul>
<li><FaRegCircleDot />Interchangeable Lens System</li>
<li><FaRegCircleDot />Digital Video Format and IEEE 1394</li>
<li><FaRegCircleDot />3CCD</li>
<li><FaRegCircleDot />Shooting Modes and Aspect Ratios</li>
<li><FaRegCircleDot />Programmed Auto Exposure</li>
</ul>
                  </p>
                  
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default CanonXL1S;
