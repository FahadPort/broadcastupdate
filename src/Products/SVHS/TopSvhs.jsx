import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JVCBRS822DXUimg from "../../assets/images/JVC-BR-S822DXU.png";
import MitsubishiHSU776img from "../../assets/images/Mitsubishi-HS-U776.png";

import PanasonicAGW3Pimg from "../../assets/images/Panasonic-AG-W3P.webp";
import PanasonicAGW1PMultisystemVHSimg from "../../assets/images/PanasonicAG-W1-P-MultisystemVHS.jpg";
import PanasonicAG1980img from "../../assets/images/Panasonic-AG1980.jpg";
import PanasonicAG7750img from "../../assets/images/Panasonic-AG-7750.jpg";
import PanasonicAG7500img from "../../assets/images/Panasonic-AG-7500.jpg";
import JVCBRS525DXUimg from "../../assets/images/JVC-BR-S525DXU.jpg";

import { Link } from "react-router-dom";




const Svhs = () => {
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
            VHS-SVHS
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
                    <img src={JVCBRS822DXUimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">JVC BR-S822DXU</Typography>
                    <p className="body">
                      For your consideration is this used and working lot of
                      board removed from the jvv br-s822dxu video Cassette
                      recorder, editor
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/JVCBRS822DXU"}>Read More</Link>
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
                    <img src={MitsubishiHSU776img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Mitsubishi HS-U776</Typography>
                    <p className="body">
                      Mitsubishi HS-U776 Super VHS HiFi VCR Plus+ Cable Box
                      Control Precision - TESTED.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/MitsubishiHSU776"}>Read More</Link>
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
                    <img src={PanasonicAGW3Pimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic AG-W3P Multi VHS Recorder PAL SECAM NTSC WORLD WIDE</Typography>
                    <p className="body">
                    This is useful because there are a few different versions of the VHS. If you look at the picture of the front display above, you can see a world map. 
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicAGW3P"}>Read More</Link>
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
                    <img src={PanasonicAGW1PMultisystemVHSimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic AG-W1-P Multisystem VHS</Typography>
                    <p className="body">
                    The Panasonic AG-W1-P Multisystem VHS is a VHS video cassette recorder
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicAGW1PMultisystemVHS"}>Read More</Link>
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
                    <img src={PanasonicAG1980img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic AG1980</Typography>
                    <p className="body">
                    The Panasonic AG-1980 is a professional-grade VHS video cassette recorder 
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicAG1980"}>Read More</Link>
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
                    <img src={PanasonicAG7750img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic/AG-7750</Typography>
                    <p className="body">
                    The Panasonic AG-7750 is a professional-grade S-VHS video cassette recorder (VCR) that was widely used in broadcast,
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicAG7750"}>Read More</Link>
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
                    <img src={PanasonicAG7500img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">Panasonic AG-7500</Typography>
                    <p className="body">
                    The Panasonic AG-7500 is a professional-grade S-VHS video cassette recorder 
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/PanasonicAG7500"}>Read More</Link>
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
                    <img src={JVCBRS525DXUimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">JVC BR-S525DXU</Typography>
                    <p className="body">
                    The JVC BR-S525DXU is a professional-grade VHS video cassette recorder (VCR) designed for broadcast, production,
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/JVCBRS525DXU"}>Read More</Link>
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

export default Svhs;
