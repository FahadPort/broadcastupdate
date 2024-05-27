import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import SonySLO1800Betamaximg from "../../assets/images/SonySLO1800Betamax.jpg";
import SonyDVWM2000PPalimg from "../../assets/images/SonyDVW-M2000PPal.jpg";
import SonyUVW1400PPalimg from "../../assets/images/Sony-UVW1400P-Pal.jpg";

const BETACAMSP = () => {
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
              BETACAM/ BETACAM SP
            </h1>
          </div>
        </Container>
      </div>

      <Grid className="all-prod-sec inn-pg-prod">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={SonySLO1800Betamaximg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony SLO-1800 Betamax</Typography>
                    <p className="body">
                      The SLO-1800 is an industrial strength duplicator designed
                      for mass producing large quantities..
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonySLO1800Betamax"}>Read More</Link>
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
                    <img src={SonyUVW1400PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony UVW1400P Pal</Typography>
                    <p className="body">
                      The Sony UVW-1400P is a professional video cassette
                      recorder
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyUVW1400PPal"}>Read More</Link>
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
                    <img src={SonyDVWM2000PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony DVW-M2000P Pal</Typography>
                    <p className="body">
                      Digital Betacam Studio Recorder, 1⁄2” tape transport
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyDVWM2000PPal"}>Read More</Link>
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
                    <img src={SonyDVWM2000PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony BVW75</Typography>
                    <p className="body">
                      Digital Betacam Studio Recorder, 1⁄2” tape transport
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyBVW75"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
          <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={SonyDVWM2000PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVW2650</Typography>
                    <p className="body">
                      Digital Betacam Studio Recorder, 1⁄2” tape transport
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVW2650"}>Read More</Link>
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
                    <img src={SonyUVW1400PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony BVW75P Pal</Typography>
                    <p className="body">
                      The Sony UVW-1400P is a professional video cassette
                      recorder
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyBVW75PPal"}>Read More</Link>
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
                    <img src={SonyDVWM2000PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony BVWD75</Typography>
                    <p className="body">
                      Digital Betacam Studio Recorder, 1⁄2” tape transport
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyBVWD75"}>Read More</Link>
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
                    <img src={SonyDVWM2000PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony BVW60</Typography>
                    <p className="body">
                      Digital Betacam Studio Recorder, 1⁄2” tape transport
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyBVW60"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
           
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={SonyUVW1400PPalimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVW2600</Typography>
                    <p className="body">
                      The Sony UVW-1400P is a professional video cassette
                      recorder
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVW2600"}>Read More</Link>
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

export default BETACAMSP;
