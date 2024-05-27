import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import SonyDVW500P from "../../assets/images/SonyDVW500P.jpg" 
import SonyDVWA500 from "../../assets/images/SonyDVWA500.jpg"
import DVWA500Pimg from "../../assets/images/DVWA500P.jpg"

import SonyUVW1800img from "../../assets/images/SonyUVW1800.png"
import SonyUVW1400img from "../../assets/images/SonyUVW1400.jpg"
import SonyUVW1200img  from "../../assets/images/SonyUVW1200.jpg"

import SonyPVW2800img from "../../assets/images/SonyPVW2800.jpg"
import SonyBVW70img from "../../assets/images/SonyBVW70.jpg"
import SonyBVW75img from "../../assets/images/SonyBVW75.jpg"
import SonyUVW1800Pimg from "../../assets/images/SonyUVW1800P.jpg"
import SonyDVWM2000img from "../../assets/images/Sony-DVW-M2000.png"



import {Link} from "react-router-dom"

const DigitalBetacam = () => {
  

  useEffect(()=>{
      AOS.init({duration:2000});
      window.scrollTo(0, 0);
  
  }, [])

  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">Digital Betacam</h1>
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
                    <img src={SonyDVW500P} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony DVW500
                    </Typography>
                    <p className="body">
                    Digibeta Editing Recorder (PAL)

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/Sonydvw"}>Read More</Link>
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
                    <img src={SonyDVWA500} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7974434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony DVWA500    
                    </Typography>
                    <p className="body">
                    Digibeta Editing Recorder with Analog & SP Betacam playback capability. Optional BKDW-505
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/Sonydvwa"}>Read More</Link>
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
                    <img src={DVWA500Pimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7987434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony DVW-A500P   
                    </Typography>
                    <p className="body">
                    The DVW-A500P is the most fully-featured VTR in the Digital Betacam line-up. 
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/SonyDVWA500"}>Read More</Link>
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
                    <img src={SonyUVW1800img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7987434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony UVW1800  
                    </Typography>
                    <p className="body">
                    The Sony UVW-1800 is a Beta SP edit deck that has been a workhorse in professional edit suites for about a decade. 
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/SonyUVW1800"}>Read More</Link>
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
                    <img src={SonyUVW1400img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO21754</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony UVW1400
                    </Typography>
                    <p className="body">
                    More than 100 minutes of recording/playback time using L-size metal Betacam SP cassettes
Two longitudinal audio channel with the Dolby C-type Noise Reduction system shown in unique bargraph indicators

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/SonyUVW1400"}>Read More</Link>
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
                    <img src={SonyUVW1200img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7974434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony UVW1200
                    </Typography>
                    <p className="body">
                    UVW1200 is a Betacam SP Player that features built-in time base stabilizer, built-in time code reader, 90 minute playback, 16 times picture search, 
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/SonyUVW1200"}>Read More</Link>
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
                    <img src={SonyPVW2800img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7987434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony PVW2800  
                    </Typography>
                    <p className="body">
                    RS-422A 9-pin interface with other RS-422A equipped Sony machines(ex. Betacam/Betacam SP VTRs, DVCAM VTRs).
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/SonyPVW2800"}>Read More</Link>
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
                    <img src={SonyBVW70img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO7987434N</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony BVW70  
                    </Typography>
                    <p className="body">
                    The BVW70 is an edit master recorder/player. It incorporates four channels of FM (hi-fi) audio. VITC (Vertical Interval Time Code) allows accurate timecode reproduction at all times.
                      
                    </p>
                    
                    <Button className="theme-btn">
                      <Link to={"/SonyBVW70"}>Read More</Link>
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
                      <img src={SonyBVW75img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVW75
                      </Typography>
                      <p className="body">
                      AC Power Cord, Operation manual, Maintenance manual, Remote control cable RCC-5G (9-pin), Extension boards A/B/C

  
                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyBVW75"}>Read More</Link>
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
                      <img src={SonyUVW1800Pimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony UVW-1800P
                      </Typography>
                      <p className="body">
                      With built-in time code generator/reader, time base corrector and high-speed picture search, it provides frame accurate editing and consistent picture quality.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyUVW18000"}>Read More</Link>
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
                      <img src={SonyDVWM2000img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO79854434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony DVW-M2000
                      </Typography>
                      <p className="body">
                      Digital Betacam Play and Record Betacam, Beta SP, Beta SX, and MPEG IMX Playback Only
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Sony0DVWM2000"}>Read More</Link>
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

export default DigitalBetacam