import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import monitor from "../assets/images/monitor.jpg";
import ca10 from "../assets/images/ca10.jpg";
import ca10pb from "../assets/images/ca10pb.jpg";
import axtca10 from "../assets/images/axtca10.jpg";


import {Link} from "react-router-dom"

const Computers = () => {

 
  const [title, setTitle] = useState("Buy Latest Computer & Software At BroadCast Store");
  const [description, setDescription] = useState("Broadcast Store offers deep discounts on new & used professional A/V equipment, including computers & software. Shop our vast inventory & save!");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);


    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">Computers & Software</h1>
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
                    <img src={monitor} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    APPLE M9178LL/A
                    </Typography>
                    <p className="body">
                    LCD Cinema HD Display 23", 1920 x 1200, DVI, USB & FireWire 400 ports. VESA mount compatible

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/Applemonitor"}>Read More</Link>
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
                    <img src={ca10} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO647350</Typography>
                    </Grid>
                    <Typography variant="h5">
                    AMX AXD-CA10
                    </Typography>
                    <p className="body">
                    Decor Color Active-Matrix LCD Touch Panel (Wall Mount)

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/amxaxdca10"}>Read More</Link>
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
                    <img src={ca10pb} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO647351</Typography>
                    </Grid>
                    <Typography variant="h5">
                    AMX AXD-CA10/PB
                    </Typography>
                    <p className="body">
                    Decor Color Active-Matrix LCD Touch Panel with External Push Buttons (Wall Mount)

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/amxaxdca10pb"}>Read More</Link>
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
                    <img src={axtca10} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO19968</Typography>
                    </Grid>
                    <Typography variant="h5">
                    AMX AXT-CA10
                    </Typography>
                    <p className="body">
                    10.4" Color Active Power Tilt Touch Panel

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/amxaxtca10"}>Read More</Link>
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

export default Computers