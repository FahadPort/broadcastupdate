import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SonyBVMD32E1WUimg from "../../assets/images/SonyBVMD32E1WU.png"

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import AOS from "aos";

const SonyBVMD32E1WU = () => {
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
                <img src={SonyBVMD32E1WUimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">Sony / BVM-D32E1WU</h3>
                <p className="para">
                DTV20" 1000 TVL Color Grading Monitor Display Unit 16:9, 480i, 480p, 720p, and 1080i

</p>


               
                <p className="price">Call Now</p>
               

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
               When critical evaluation is important, Sony-BVM-20E1U 16:9 20-inch flat screen monitor boasts an exclusive FD Trinitron CRT designed specifically for accuracy in production and post production applications. Like the other monitors in the BVM-D series family, the 20-inch unit supports 480i, 480p, 720p, and 1080i inputs directly, and will display each at its native frequency and resolution. It is the first monitor of this size to conform to the ITU 709 and ITU 601 standards as well as SMPTE 240M. The optional BKM-14L light probe is required for setup of the auto landing and auto uniformity operations which will simplify the setup of the monitor. </p>
              <h3>Features:</h3>
              <p className="para">
              <ul>
<li><FaRegCircleDot/>Digital Convergence Adjusts the convergence fnely at each adjustment point on the screen</li>
<li><FaRegCircleDot/>Multiple Signal Inputs: Y Pb Pr, Y R-Y B-Y, RGB, SMPTE 292M, SMPTE240M.</li>
<li><FaRegCircleDot/>Multi-Format Signal Support: Picture signals are directly scanned from the original signal using the point scan method to achieve high picture quality.</li>
<li><FaRegCircleDot/>Monitor Memory Card Setup and Adjustment: BKM-12Y card used to save and load monitor set-up and adjustment data.</li>
<li><FaRegCircleDot/>SMPTE Phosphors: Consistent, accurate color reproduction every time.</li>
<li><FaRegCircleDot/>System Integration: Up to 32 monitors can be controlled with one control unit in an integrated system.</li>
<li><FaRegCircleDot/>Safe Area Display: Provides accurate view of frame as viewer will see it, and allows viewing perspective of both 16:9 and 4:3 aspect ratios, as well as infinitely variable ratios.</li>
<li><FaRegCircleDot/>Beam Landing Correction: Automatically corrects any shift in the beam that occurs as a result of the terrestrial magnetic field.</li>
<li><FaRegCircleDot/>Multiple Format Signal Support: 1080/60i, 1080/24psf, 720/60p, 480/60p, 480/60i</li>
</ul>

              </p>
              <h3>Specifications</h3>
              <p className="para">
              <ul>
<li><FaRegCircleDot/>Signal format - 15.625 kHz to 45 kHz</li>
<li><FaRegCircleDot/>CRT type - 32-inch HR Trinitron (flat surface, 16:9 aspect ratio)</li>
<li><FaRegCircleDot/>AG Pitch - 0.32-0.36mm, 90° delection, 29.1 mm in-line gun</li>
<li><FaRegCircleDot/>Visual Screen - 4:3 491.3 (W) x 368.5 (H) x 614.1 (D) mm 16:9 652.2 (W) x 368.5 (H) x 751.7 (D) mm</li>
<li><FaRegCircleDot/>Phosphor - SMPTE-C</li>
<li><FaRegCircleDot/>Differential gain (DG) - Within 5% for luninance from 0 to 70cd/m2</li>
<li><FaRegCircleDot/>Differential phase (DP) - Within 5% for luminance from 0 to 70cd/m2</li>
<li><FaRegCircleDot/>Frequency response - 50 Hz to 30MHz + 1dB/-3dB</li>
<li><FaRegCircleDot/>DC restoration - Back porch type, back porch level: within 1% of peak luminance, 10 to 90% APL</li>
<li><FaRegCircleDot/>Retrace Time - Horizontal: under 3.77 sec Vertical: under 650 sec</li>
<li><FaRegCircleDot/>Normal scan - 5% over scan of the effective picture area</li>
<li><FaRegCircleDot/>Under scan - 3% under scan of the effective picture area</li>
<li><FaRegCircleDot/>Linearity - Less than 1% within circle centered on the screen with a diameter equal to the vertical height; 2% at any other point</li>
<li><FaRegCircleDot/>Color temperature - D65/D93/COL 1/COL 2 (user adjustable)</li>
<li><FaRegCircleDot/>Convergence - Less than 0.5% within circle centered on the screen with a idameter equal to the vertical height, 0.8% at any other point</li>
<li><FaRegCircleDot/>Preset brightness - 70 cd/m2 (when a 1.0 Vp-p 100% white signal is input)</li>
<li><FaRegCircleDot/>Stability of raster size - 1% of picture height (at 70 cd/m2 peak luminescence, 10 to 90% APL)</li>
<li><FaRegCircleDot/>Scan Delay - Horizontal: Approx. 3/8 line, Vertical: Approx. 1/2 field</li>
<li><FaRegCircleDot/>Center resolution - 1000 TV lines (4:3 1000 TV lines)</li>
<li><FaRegCircleDot/>Inputs/Outputs</li>
<li><FaRegCircleDot/>Video - BNC x 3 with loop through</li>
<li><FaRegCircleDot/>Pb/Pr - Y - 0.7 Vp-p±6 dB, high impedance</li>
<li><FaRegCircleDot/>Ext Sync - Y - BNC x 1, with loop-through</li>
<li><FaRegCircleDot/>Composite - Y - 0.3 to 8.0 Vp-p, high impedance, tri-level bipolar sync</li>
<li><FaRegCircleDot/>Remote - Y - RS-232C for BKM11R, Mini DIN 8-pin, RS-422 for BKM-10R, D-sub 9-pin</li>
<li><FaRegCircleDot/>Power requirements - Y - 100 V to 240 V AC ± 10%, 50/60HZ</li>
<li><FaRegCircleDot/>Power consumption with Option board; Max. - Y - Approx. 170 W (with HD-SDI Option 230W)</li>
<li><FaRegCircleDot/>Operating temperature - Y - 0-35° Optimum operating range 20 to 30°</li>
<li><FaRegCircleDot/>Storage temperature - Y -10 to 40°</li>
<li><FaRegCircleDot/>Humidity - Y - 0% to 90%, no condensation</li>
<li><FaRegCircleDot/>Dimensions  32W X 28D X 22H</li>
<li><FaRegCircleDot/>Weight - Y - Approx. 95 kg.</li>
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

export default SonyBVMD32E1WU