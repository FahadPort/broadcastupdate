import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import HitachiZHD6000img from "../../assets/images/HitachiZHD6000.jpg"
import HitachiZHD5000img from "../../assets/images/HitachiZHD5000.jpg"

import {Link} from "react-router-dom"


const IHDStudioCameras = () => {

  const [title, setTitle] = useState("Best HD Studio Cameras  - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers the best selection of new & used HD studio cameras. Find broadcast-quality cameras for stunning visuals at incredible prices.");

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
            <h1 className="heading" data-aos="fade-up">1080i HD Studio Cameras</h1>
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
                      <img src={HitachiZHD6000img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Hitachi Z-HD6000
                      </Typography>
                      <p className="body">
                      Hitachi Z-HD6000 HDTV Camera Studio Package (No Lens)

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/HitachiZHD6000"}>Read More</Link>
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
                      <img src={HitachiZHD5000img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Hitachi Z-HD5000
                      </Typography>
                      <p className="body">
                      Hitachi Z-HD5000 HDTV Camera Fiber Optic Studio Package (No Lens)
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/HitachiZHD5000"}>Read More</Link>
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

export default IHDStudioCameras