import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import SonySRW5500img from "../../assets/images/SonySRW5500.jpg";
import SonyHDWM200020img from "../../assets/images/SonyHDWM200020.jpg";
import SonySRW58002img from "../../assets/images/SonySRW-58002.jpg";
import SonyJH3img from "../../assets/images/Sony-JH3.webp";
import SonyHDWD2000img from "../../assets/images/Sony-HDW-D2000.jpg";
import SonyHDWM2100img from "../../assets/images/Sony-HDW-M2100.jpg";
import SONYHDWF500img from "../../assets/images/SONY-HDW-F500.jpg";
import SonyHDW2000img from "../../assets/images/Sony-HDW-2000.jpg"




const Hdcamsr = () => {
 
  const [title, setTitle] = useState("HD Private Camera - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers new & used HD private cameras perfect for vlogging, live streaming, or discreet home recording. Shop discreet, high-quality cameras today!");

  useEffect(() => { 
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);

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
              HD CAM
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
                    <img src={SonySRW5500img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">
                      Sony SRW-5500/2 HDCAM-SR
                    </Typography>
                    <p className="body">
                      The Sony SRW-5500/2 HDCAM-SR Studio Recorder is a
                      full-bandwidth HDCAM-SR studio VTR.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonySRW5500"}>Read More</Link>
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
                    <img src={SonyHDWM200020img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony HDWM2000//20</Typography>
                    <p className="body">
                      Sony HDWM2000/20 HDCAM Studio Editing Recorder, with
                      Multiple Format Legacy Playback
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyHDWM200020"}>Read More</Link>
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
                    <img src={SonySRW58002img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony/SRW-5800/2</Typography>
                    <p className="body">
                      The SRW-5800/2 HDCAM-SR Studio Recorder is Sony's
                      top-of-the-line full-bandwidth VTR.
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonySRW58002"}>Read More</Link>
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
                    <img src={SONYHDWF500img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">SONY HDW-F500</Typography>
                    <p className="body">
                      Sony HDW-F500 HDCAM workhorse deck pulled from
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SONYHDWF500"}>Read More</Link>
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
                    <img src={SonyHDWM2100img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony HDW-M2100 HDCAM Pro Studio Editing Player</Typography>
                    <p className="body">
                    Up for sale is a Sony HDW-2100 Digital Studio Cassette Player
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyHDWM2100"}>Read More</Link>
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
                    <img src={SonyHDWD2000img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony HDW-D2000 </Typography>
                    <p className="body">
                    Sony HDW-D2000/20 Operational and installation manual
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyHDWD2000"}>Read More</Link>
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
                    <img src={SonyJH3img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony JH3</Typography>
                    <p className="body">
                    The Sony J-H3 is a compact video player for HDCAM 
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyJH3"}>Read More</Link>
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
                    <img src={SonyHDW2000img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO35814262</Typography>
                    </Grid>
                    <Typography variant="h5">Sony HDW-2000</Typography>
                    <p className="body">
                    Sony HDW2000/20 HDCAM Studio Editing Recorder
                    </p>

                    <Button className="theme-btn">
                      <Link to={"/SonyHDW2000"}>Read More</Link>
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

export default Hdcamsr;
