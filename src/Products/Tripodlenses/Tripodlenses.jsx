import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


import AntonBauer3013img from "../../assets/images/Anton-Bauer-3013.jpg"
import AntonBauerDigitalProPac14Logicimg from "../../assets/images/Anton-BauerDigitalProPac14Logic.jpg"
import AntonBauerHYTRON100img from "../../assets/images/Anton-BauerHYTRON100.jpg"
import AntonBauerHYTRON140img from "../../assets/images/Anton-BauerHYTRON140.jpg"
import AntonBauerPOWERSTRAP13img from "../../assets/images/Anton-BauerPOWERSTRAP13.jpg"
import AntonBauerPROPAC14Logicimg from "../../assets/images/AntonBauerPROPAC-14Logic.jpg"
import AntonBauerQUAD2702InterActive2000img from "../../assets/images/AntonBauerQUAD-2702InterActive2000.jpg"
import AntonBauerUltraDAYlightimg from "../../assets/images/Anton-BauerUltraDAYlight.jpg"
import ASPENJVCKIT2img from "../../assets/images/ASPEN-JVCKIT2.jpg"






const Tripodlenses = () => {
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
              Camera Tripod, Lenses
            </h1>
          </div>
        </Container>
      </div>

      <Grid className="all-prod-sec inn-pg-prod">
        <Container>
          <Grid container spacing={2} >
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={AntonBauer3013img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO8874260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer 30/13
                    </Typography>
                    <p className="body">
                    Switchable Battery Belt, 30 volts / 4 AH or 13.2 volts / 8 AH output. With internal charger.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauer3013"}>Read More</Link>
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
                    <img src={AntonBauerDigitalProPac14Logicimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO8852260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer Digital Pro Pac 14 Logic
                    </Typography>
                    <p className="body">
                    DIGITAL PRO PAC 14 Logic Series DIGITAL Battery, 14.4 volts, 65 watt hours
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerDigitalProPac14Logic"}>Read More</Link>
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
                    <img src={AntonBauerHYTRON100img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO814260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer HYTRON 100
                    </Typography>
                    <p className="body">
                    NEW HyTron 100, the video industry's first high performance battery is back.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerHYTRON100"}>Read More</Link>
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
                    <img src={AntonBauerHYTRON140img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO814260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer HYTRON 140
                    </Typography>
                    <p className="body">
                    The NEW HyTron™140, previously offered only to select broadcasters.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerHYTRON140"}>Read More</Link>
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
                    <img src={AntonBauerPOWERSTRAP13img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO14520</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer POWER STRAP 13
                    </Typography>
                    <p className="body">
                    Lightweight powerbelt designed for professional use with all portable video recorders, cameras and low voltage lighting equipment. 
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerPOWERSTRAP13"}>Read More</Link>
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
                    <img src={AntonBauerPROPAC14Logicimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO365260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer PRO PAC 14 Logic
                    </Typography>
                    <p className="body">
                    PRO PAC 14 Logic Series Battery, 14.4 volts, 65 watt hours
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerPROPAC14Logic"}>Read More</Link>
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
                    <img src={AntonBauerQUAD2702InterActive2000img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO258260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer QUAD 2702 InterActive 2000
                    </Typography>
                    <p className="body">
                    QUAD 2702 Four position power charger with LCD, 2 amp built-in discharge module and 70 watt power supply
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerQUAD2702InterActive2000"}>Read More</Link>
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
                    <img src={AntonBauerUltraDAYlightimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO814260</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Anton Bauer UltraDAYlight
                    </Typography>
                    <p className="body">
                    The UltraDAYlight head module fits any Ultralight base to instantly deliver 5600°K..
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/AntonBauerUltraDAYlight"}>Read More</Link>
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
                    <img src={ASPENJVCKIT2img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO25860</Typography>
                    </Grid>
                    <Typography variant="h5">
                    ASPEN JVC KIT 2
                    </Typography>
                    <p className="body">
                    Camera Power Package: 250w bateries , ROQ-2060 charger & ac adaptor, plates, case ...
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/ASPENJVCKIT2"}>Read More</Link>
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

export default Tripodlenses;
