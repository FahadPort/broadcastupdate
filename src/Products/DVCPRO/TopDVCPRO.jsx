import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"

import AJHD1700img from "../../assets/images/AJHD1700.jpg"
import AJHD1400img from "../../assets/images/AJHD1400.png"
import PanasonicAJD960img from "../../assets/images/Panasonic-AG-7500.jpg"


const DVCPRO = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);
}, [])



  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">DVCPRO HD</h1>
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
                    <img src={AJHD1400img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Panasonic AJ-HD1400
                    </Typography>
                    <p className="body">
                    720/1080 video format cross conversion

                    </p>
                    <Typography variant="h6">Call for price</Typography>
                   
                    <Button className="theme-btn">
                      <Link to={"/AJHD1400"}>Read More</Link>
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
                    <img src={AJHD1700img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Panasonic AJHD1700
                    </Typography>
                    <p className="body">
                    Panasonic AJ-HD1700 DVCPRO HD-EX Studio VTR
                    </p>
                    <Typography variant="h6">Call for price</Typography>
                   
                    <Button className="theme-btn">
                      <Link to={"/AJHD1700"}>Read More</Link>
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
                    <img src={PanasonicAJD960img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO500383</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Panasonic AJD-960
                    </Typography>
                    <p className="body">
                    Panasonic AJ-D960 DVC Pro 50 Player.
                    </p>
                    <Typography variant="h6">Call for price</Typography>
                   
                    <Button className="theme-btn">
                      <Link to={"/PanasonicAJD960"}>Read More</Link>
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

export default DVCPRO