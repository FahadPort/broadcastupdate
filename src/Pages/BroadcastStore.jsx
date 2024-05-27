import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import product01 from "../assets/images/ctgr-img1.jpg";
import product02 from "../assets/images/ctgr-img2.jpg";
import product81 from "../assets/images/product81.jpg";

import product04 from "../assets/images/ctgr-img4.jpg";


import {Link} from "react-router-dom"

const BroadcastStore = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);

}, [])
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">The broadcast store</h1>
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
                      <img src={product01} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO814260</Typography>
                      </Grid>
                      <Typography variant="h5">
                      The broadcast store / 1 INCH TYPE C TRANSFER TO DIGITAL FILE
                      </Typography>
                      <p className="body">
                      1 inch C Format videotape digitized to Quicktime file or other file formats

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/broadcaststore1inchtype"}>Read More</Link>
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
                      <img src={product02} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO818457</Typography>
                      </Grid>
                      <Typography variant="h5">
                      The broadcast store / 10,000 BETA OR DIGIBETACAM VIDEO TAPES
                      </Typography>
                      <p className="body">
                      SPECIAL OFFER: 10,000 Beta or DigiBetacam video tapes digitized before the end of this year.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/broadcaststorebeta"}>Read More</Link>
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
                      <img src={product81} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO815722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      The broadcast store / 16MM SD OR HD FILM DIGITIZED
                      </Typography>
                      <p className="body">
                      16mm 400' reel Wet Gate film transfer digitized to SD or HD quality file.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/broadcaststore16mm"}>Read More</Link>
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
                      <img src={product04} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ706657N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      NEW The broadcast store / 2K, HD OR SD FILM TRANSFER
                      </Typography>
                      <p className="body">
                      Scanner, Telecine or Film Chain for 8mm, Super 8mm, 16mm & 35mm film. Contact you Account Executive
                        
                      </p>
                  
                      <Button className="theme-btn">
                        <Link to={"/broadcaststoreMatictape"}>Read More</Link>
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

export default BroadcastStore