import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"


import SonyDVR10img from "../../assets/images/SonyDVR10.jpg"
import SonyDVR18img from "../../assets/images/Sony-DVR18.jpg"


const D2 = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);
}, [])


  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">D2</h1>
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
                    <img src={SonyDVR10img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO5075383</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony DVR10 
                    </Typography>
                    <p className="body">
                    Sony DVR-10 Digital Videocassette Recorder VCR Missing Parts - Parts

                    </p>
                    <Typography variant="h6">Call for price</Typography>
                   
                    <Button className="theme-btn">
                      <Link to={"/SonyDVR10"}>Read More</Link>
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
                    <img src={SonyDVR18img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO5075383</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony DVR18
                    </Typography>
                    <p className="body">
                    The DVR-18P allows for recording video footage from connected cameras. It supports various video formats...

                    </p>
                    <Typography variant="h6">Call for price</Typography>
                   
                    <Button className="theme-btn">
                      <Link to={"/SonyDVR18"}>Read More</Link>
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

export default D2