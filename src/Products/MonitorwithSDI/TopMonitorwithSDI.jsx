import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import IkegamiTM2080RUimg from "../../assets/images/Ikegami-TM20-80R.png";
import SonyPVM2030img from "../../assets/images/SonyPVM2030.jpg"
import SonyTrinitronPVM2530img from "../../assets/images/SonyTrinitronPVM2530.jpg"
import PanasonicBT4LH310P314kimg from "../../assets/images/PanasonicBT4LH310P314K.jpg"
import SonyPVM14M4Uimg from "../../assets/images/SonyPVM14M4U.jpg"
import SonyPVM14L2img from "../../assets/images/SonyPVM14L2.jpg"
import SonyTrinitronBVM20F1Uimg from "../../assets/images/SonyTrinitronBVM-20F1U.jpg"
import SonyPVM20M2MDUimg from "../../assets/images/Sony-PVM20M2MDU.webp"
import SonyPVM1954Qimg from "../../assets/images/SonyPVM1954Q.jpg"
import SonyBVM20F1Uimg from "../../assets/images/Sony-BVM20F1U.jpg"


const MonitorwithSDI = () => {
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
              Monitors
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
                    <img src={IkegamiTM2080RUimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Ikegami TM20-80R</Typography>
                    <p className="body">
                      Tested working and is guaranteed functional, but there is
                      a light mild lettering burn in on the bottom left.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/IkegamiTM2080R"}>Read More</Link>
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
                    <img src={SonyTrinitronBVM20F1Uimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony Trinitron BVM-20F1U</Typography>
                    <p className="body">
                    Professional-grade 20" multisync monitor from Sony. 
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyTrinitronBVM20F1U"}>Read More</Link>
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
                    <img src={SonyPVM2030img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVM-2030 </Typography>
                    <p className="body">
                    •	Accepts Analog and Digital RGB via 25-pin D-Sub, S-Video, VTR, and Composite.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVM2030"}>Read More</Link>
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
                    <img src={SonyTrinitronPVM2530img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony Trinitron PVM-2530 </Typography>
                    <p className="body">
                      Tested working and is guaranteed functional, but there is
                      a light mild lettering burn in on the bottom left.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyTrinitronPVM2530"}>Read More</Link>
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
                    <img src={PanasonicBT4LH310P314kimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic BT-4LH310P 31" 4K</Typography>
                    <p className="body">
                    Panasonic introduces the BT-4LH310 787.4 mm (31 inches) 4K LCD monitor
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicBT4LH"}>Read More</Link>
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
                    <img src={SonyPVM14M4Uimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVM14M4U</Typography>
                    <p className="body">
                    Featuring one of the latest developments in Sony display technology, 
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVM14M4U"}>Read More</Link>
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
                    <img src={SonyPVM14L2img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVM14L2</Typography>
                    <p className="body">
                    Sony PVM-14L2 Trinitron CRT Retro Gaming Monitor 14"
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVM14L2"}>Read More</Link>
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
                    <img src={SonyPVM20M2MDUimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVM20M2MDU</Typography>
                    <p className="body">
                    The Sony PVM-20M2MDU is a professional-grade medical grade monitor specifically 
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVM20M2MDU"}>Read More</Link>
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
                    <img src={SonyPVM1954Qimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony PVM1954Q</Typography>
                    <p className="body">
                    The Sony PVM-1954Q is a CRT monitor primarily designed for professional video production and broadcast applications.
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyPVM1954Q"}>Read More</Link>
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
                    <img src={SonyBVM20F1Uimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">Sony BVM20F1U</Typography>
                    <p className="body">
                    The BVM-20F1U utilizes Cathode Ray Tube (CRT) display technology,
                    </p>
                    <Typography variant="h6">Call for price</Typography>

                    <Button className="theme-btn">
                      <Link to={"/SonyBVM20F1U"}>Read More</Link>
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

export default MonitorwithSDI;
