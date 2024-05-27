import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"

import Tektronix1730Uimg from "../../assets/images/Tektronix1730.jpeg"
import TektronixWFM5000img from "../../assets/images/Tektronix-WFM5000.jpg"
import TektronixWFM8200img from "../../assets/images/Tektronix-WFM8200.jpg"
import TektronixWFM8300img from "../../assets/images/Tektronix-WFM8200.jpg"

const WaveformMonitors = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);

}, [])
  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">Waveform Monitors</h1>
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
                    <img src={Tektronix1730Uimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO985743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Tektronix 1730
                    </Typography>
                    <p className="body">
                    Tektronix 1730 Waveform Monitor and 1720 Vectorscope As-Is CG00NYH

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/Tektronix1730"}>Read More</Link>
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
                    <img src={TektronixWFM5000img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO985743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Tektronix WFM5000 
                    </Typography>
                    <p className="body">
                    The Tektronix WFM5000 is a high-performance waveform monitor designed for professional video production

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/TektronixWFM5000"}>Read More</Link>
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
                    <img src={TektronixWFM8200img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO985743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Tektronix WFM8200
                    </Typography>
                    <p className="body">
                    Tektronix WFM8200 Advanced Analog/SD/HD/3G-SDIWaveform Monitor

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/TektronixWFM8200"}>Read More</Link>
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
                    <img src={TektronixWFM8200img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO985743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Tektronix WFM8300
                    </Typography>
                    <p className="body">
                    Tektronix WFM8300 Advanced Analog/SD/HD/3G-SDIWaveform Monitor

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/TektronixWFM8300"}>Read More</Link>
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
       <li>*An "N" after the item# denotes a NEW item. A "U" denotes a USED item.</li>
       <li>*Prices reflect a 3% cash discount</li>
       <li>*Please confirm your contact and shipping information is correct</li>
       <li>*All prices are based on cash payment</li>
       <li>*All preferred shopper prices are good until the end of the month</li>
       <li>*Orders taken after business hours will be processed the next business day</li>
       <li>*Service contracts available for extra charge</li>
       <li>*Lease Prices are based on a 36 month lease</li>
       <li>*All shipping is UPS ground service unless otherwise requested</li>
      </ul>
     </Container>
    </Grid>


  </Grid>
  )
}

export default WaveformMonitors