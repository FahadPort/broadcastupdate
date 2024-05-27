import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import AJAFS1img from "../../assets/images/AJA-FS1.png";
import AJAFS2img from "../../assets/images/AJA-FS2.png";
import {Link} from "react-router-dom"
import LeitchX50AV2PSimg from "../../assets/images/Leitch-X50-AV-2PS.jpg"
import SnellWilcoxCVR45DTVStandardsconverterimg from "../../assets/images/Snell-Wilcox-CVR45D-TV-Standards-converter.jpg"


const FrameSynchronizerConverter = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);

}, [])
  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">Frame Synchronizer / Converter</h1>
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
                    <img src={AJAFS1img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    AJA FS1
                    </Typography>
                    <p className="body">
                    FS1 is a powerful and flexible frame synchronizer and high quality converter

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/AJAFS1"}>Read More</Link>
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
                    <img src={AJAFS2img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO799743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    AJA FS2
                    </Typography>
                    <p className="body">
                    AJA FS2 Dual Channel Frame Synchronizer and Converter

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/AJAFS2"}>Read More</Link>
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
                    <img src={LeitchX50AV2PSimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO785843</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Leitch/X50-AV-2PS
                    </Typography>
                    <p className="body">
                    Listing for a Harris X50-AV-2PS Frame Synchronizer that is Used

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/LeitchX50AV2PS"}>Read More</Link>
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
                    <img src={SnellWilcoxCVR45DTVStandardsconverterimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO785843</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Snell Wilcox CVR45D-TV Standards converter 
                    </Typography>
                    <p className="body">
                    The Snell Wilcox CVR45D-TV is a professional video standards converter

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/SnellWilcoxCVR45DTVStandardsconverter"}>Read More</Link>
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

export default FrameSynchronizerConverter