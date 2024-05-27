import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import Sonybvh2000img from "../../assets/images/SonyBVH2000.jpeg"
import Sonybvh3000img from "../../assets/images/SonyBVH3000.jpg"
import SonyBVH2000PSPalimg from "../../assets/images/SonyBVH-2000PS-Pal.jpg"
import SonyBVH3100PPalimg from "../../assets/images/SONY-BVH-3100PS.jpg"
import SonyBVH3100img from "../../assets/images/Sony-BVH3100.jpg"

import BoshBCN51img from "../../assets/images/Bosh-BCN51.jpeg"
import BoshBCN52img from "../../assets/images/Bosh-BCN52.jpeg"




import {Link} from "react-router-dom"
const Inch1 = () => {
  

  useEffect(()=>{
      AOS.init({duration:2000});
      window.scrollTo(0, 0);
  
  }, [])

  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">1 Inch</h1>
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
                      <img src={Sonybvh3000img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVH-3000
                      </Typography>
                      <p className="body">
                      1" C-format editing VTR w/sync, air thread technology

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/Sonybvh3000"}>Read More</Link>
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
                      <img src={Sonybvh2000img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVH-2000
                      </Typography>
                      <p className="body">
                      1"C format Editor. We buy, rebuild and sell One Inch VTRs.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Sonybvh2000"}>Read More</Link>
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
                      <img src={SonyBVH2000PSPalimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVH-2000PS Pal
                      </Typography>
                      <p className="body">
                      Sony BVH-2000P 1" PAL Type C Video Tape Recorder/Editor
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVH2000PSPal"}>Read More</Link>
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
                      <img src={SonyBVH3100PPalimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVH-3100P Pal 
                      </Typography>
                      <p className="body">
                      Sony BVH-3100PS 1" PAL Type C Video Tape Recorder/Editor with New Video Heads 
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVH3100PPal"}>Read More</Link>
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
                      <img src={SonyBVH3100img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVH3100
                      </Typography>
                      <p className="body">
                      The SONY BVH-3100 is a professional-grade video tape recorder

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyBVH3100"}>Read More</Link>
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
                      <img src={BoshBCN51img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Bosh BCN51
                      </Typography>
                      <p className="body">
                      Delivery with existing drum, or with a new upper drum and 90 day limited 

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/BoshBCN51"}>Read More</Link>
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
                      <img src={BoshBCN52img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Bosh BCN52
                      </Typography>
                      <p className="body">
                      BOSCH / BTS BCN 52 mit Messbrücke (Monitor/Vector/Waveform)

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/BoshBCN52"}>Read More</Link>
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

export default Inch1