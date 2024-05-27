import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import RTIVT3100img from "../../assets/images/RTIVT3100.jpg";
import RTI4100img from "../../assets/images/RTI-4100.jpg";
import RTIProLine8100 from "../../assets/images/RTIProLine8100.jpeg";
import RTI6120img from "../../assets/images/RTI-6120.jpg";
import RTITC5100DVtapecleanerimg from "../../assets/images/RTI-TC-5100-DV-tape-cleaner.jpg";
import RTI460VHSCleanerimg from "../../assets/images/RTI-460-VHS-Cleaner.jpg";
import RTITapecheck460VHSimg from "../../assets/images/RTI-Tape-check-460VHS.jpg";


const Tapeleaners = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent">
            <h1 className="heading" data-aos="fade-up">
              Tape Playback/Record Automation System
            </h1>
          </div>
        </Container>
      </div>

      <Grid className="all-prod-sec inn-pg-prod">
        <Container>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTIVT3100img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI / VT-3100</Typography>
                    <p className="body">
                      For models: VT-1100 / VT-2100/ VT-3100
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTIVT3100"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTI4100img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI tape check 4100</Typography>
                    <p className="body">
                      Video Tape cleaner and evaluator for BetaCam tape,
                      optional: eraser, printer, digibeta.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTI4100"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTIProLine8100} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO540383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI Pro Line 8100 DLS</Typography>
                    <p className="body">
                      HDCAM SR and BETACAM cleaner with flat wind technology
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTIProLine"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTI6120img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO540383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI 6120</Typography>
                    <p className="body">
                      1 inch magnetic videotape cleaner and evaluator Process
                      any 1″ format..
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTI6120"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTITC5100DVtapecleanerimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI TC 5100- DV tape cleaner</Typography>
                    <p className="body">
                    The RTI TC 5100 is a professional-grade digital video tape cleaner
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTITC5100DVtapecleaner"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTI460VHSCleanerimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI 460 VHS Cleaner</Typography>
                    <p className="body">
                    The RTI 460 VHS Cleaner is a device designed specifically for cleaning
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTI460VHSCleaner"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={RTITapecheck460VHSimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">RTI Tape check 460 VHS</Typography>
                    <p className="body">
                    RTI Tape Check 460 VHS is a quality control device used in the broadcast and video production industry.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/RTITapecheck460VHS"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
           
          </Grid>


        </Container>
      </Grid>

      <Grid className="notes">
        <Container>
          <Typography variant="h3">Notes</Typography>
          <ul>
            <li>
              *An "N" after the item# denotes a NEW item. A "U" denotes a USED
              item.
            </li>
            <li>*Prices reflect a 3% cash discount</li>
            <li>
              *Please confirm your contact and shipping information is correct
            </li>
            <li>*All prices are based on cash payment</li>
            <li>
              *All preferred shopper prices are good until the end of the month
            </li>
            <li>
              *Orders taken after business hours will be processed the next
              business day
            </li>
            <li>*Service contracts available for extra charge</li>
            <li>*Lease Prices are based on a 36 month lease</li>
            <li>
              *All shipping is UPS ground service unless otherwise requested
            </li>
          </ul>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Tapeleaners;
