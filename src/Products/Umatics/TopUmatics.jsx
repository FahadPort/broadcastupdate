import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import Sonybvu950 from "../../assets/images/sonybvu950.jpg"
import SonyVO5800 from "../../assets/images/SonyVO5800.jpg"
import SonyVP7020 from "../../assets/images/SonyVP7020.jpg"
import SONYVO1img from "../../assets/images/SONYVO1.webp"
import SONYVO2img from "../../assets/images/SONYVO2.png"
import SONYVO3img from "../../assets/images/SONYVO3.png"
import SONYVO4img from "../../assets/images/SONYVO4.jpg"
import SONYVO5img from "../../assets/images/SONYVO5.jpg"
import SONYVO6img from "../../assets/images/SONYVO6.jpg"
import SONYVO7img from "../../assets/images/SONYVO7.jpg"
import SonyVP7040img from "../../assets/images/SONYVP7040.jpg";
import SonyBVU850img from "../../assets/images/bvu850.jpg";
import SonyBYU900img from "../../assets/images/BVU900.jpg";
import SonyBVU950pimg from "../../assets/images/BVU950P.jpg";
import SonyVO9600Pimg from "../../assets/images/VO9600P.jpg";
import SonyVO9850Pimg from "../../assets/images/VO9850P.jpg";
import SonyVO9800Pimg from "../../assets/images/VO9800P.jpg";
import SonyVO7630img from "../../assets/images/SonyVO7630.jpg";
import SonyVO9850TCimg from "../../assets/images/Sony-VO-9850-TC.jpg"
import SonyBVU820img from "../../assets/images/Sony-BVU820.jpg"







import {Link} from "react-router-dom"

const Umatics = () => {

    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])



  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">Umatics</h1>
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
                      <img src={SonyVP7020} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP-7020 
                      </Typography>
                      <p className="body">
                      3/4 inch U-matic Videocassette Player (EIA/NTSC) with picture search

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVP7020"}>Read More</Link>
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
                      <img src={Sonybvu950} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7974434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU-950
                      </Typography>
                      <p className="body">
                      BCS refurbished Broadcast 3/4 inch SP Editor with Time code. Optional: TBC, DNR, TCG, side panel
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Sonybvu950"}>Read More</Link>
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
                      <img src={SonyVO5800} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO8156722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VO5800
                      </Typography>
                      <p className="body">
                      3/4-inch U-Matic editing recorder and player with bi directional search dial
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVO5800"}>Read More</Link>
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
                      <img src={SONYVO1img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO85456722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      SONY VO-9800P
                      </Typography>
                      <p className="body">
                      Plays all types of U-matic PAL recorded video cassettes in Low-band (LB), High-band (HB) and SP in High Quality.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SONYVO9800"}>Read More</Link>
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
                      <img src={SONYVO2img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO2187754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP-5020
                      </Typography>
                      <p className="body">
                      
Professional Editing Video Cassette Player

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVP5020"}>Read More</Link>
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
                      <img src={SONYVO3img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO2374434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      SONY VO-9850
                      </Typography>
                      <p className="body">
                      Description
U-matic videocassette recorder, player, editor, type IX SP with Type-C Dolby noise reduction.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SONYVO9850"}>Read More</Link>
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
                      <img src={SONYVO4img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO566722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      SONY BVU-800PS
                      </Typography>
                      <p className="body">
                      Reproduce High-band SECAM color system recorded tapes in High Quality.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SONYBVU800"}>Read More</Link>
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
                      <img src={SONYVO5img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO4456722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP-7000
                      </Typography>
                      <p className="body">
                      Sony VP-7000 U-Matic 3/4 inch Video Cassette Player. Solid, Dependable Workhorse!
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVP7000"}>Read More</Link>
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
                      <img src={SonyVP7040img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO29587754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP7040
                      </Typography>
                      <p className="body">
                      
                      Multi-standard, plays Umatic Low-band recorded tapes in PAL/SECAM/NTSC



                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVP7040"}>Read More</Link>
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
                      <img src={SonyBVU850img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO2985434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU850
                      </Typography>
                      <p className="body">
                      Video recording system:
Rotary four-head helical scan system
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVU850"}>Read More</Link>
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
                      <img src={SonyBYU900img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO566722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU900
                      </Typography>
                      <p className="body">
                      This model works just as well as the BVU-950 and is highly reliable. It has the same high performance as the BVU-920 & BVU-950.
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVU900"}>Read More</Link>
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
                      <img src={SonyBVU950pimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO4147722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU950P
                      </Typography>
                      <p className="body">
                      Sony BVU-950P V-Matic SP VideoCassette Recorder

                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVU950P"}>Read More</Link>
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
                      <img src={SonyVO9600Pimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO22547754</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VO-9600P
                      </Typography>
                      <p className="body">
                      

                      Special Tape or Cassette-Format; Radio Control (+Remote Wire etc)

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVO9600P"}>Read More</Link>
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
                      <img src={SonyVO9850Pimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO2741434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VO-9850P
                      </Typography>
                      <p className="body">
                      Sony VO-9850P – Umatic SP

                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVO9850P"}>Read More</Link>
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
                      <img src={SonyVO9800Pimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO5123722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VO-9800P 
                      </Typography>
                      <p className="body">
                      Plays all types of U-matic PAL recorded video cassettes in Low-band (LB), High-band (HB) and SP in High Quality.


                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVO9800"}>Read More</Link>
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
                      <img src={SonyVO7630img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO4456722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VO-7630
                      </Typography>
                      <p className="body">
                      Sony VO-7630 – Umatic PAL / NTSC / SECAM
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVO7630"}>Read More</Link>
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
                      <img src={SONYVO6img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO217354</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP-9000
                      </Typography>
                      <p className="body">
                      U-matic videocassette player with Type-C Dolby noise reduction, balanced audio, 33-pin parallel interface, XLR connectors.

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVP9000"}>Read More</Link>
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
                      <img src={SONYVO7img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7973434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      SONY BVU-800PS
                      </Typography>
                      <p className="body">
                      Reproduce High-band SECAM color system recorded tapes in High Quality. 
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SONYVO5850"}>Read More</Link>
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
                      <img src={SonyBVU820img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7973434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU820
                      </Typography>
                      <p className="body">
                      The Sony BVU-820 is a professional-grade video tape recorder 
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVU820"}>Read More</Link>
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
                      <img src={SonyVO9850TCimg} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7973434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony/VO-9850-TC
                      </Typography>
                      <p className="body">
                      This Listing is for QTY 1 SONY NTSC VO-9850 U-Matic SP 
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyVO9850TC"}>Read More</Link>
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
                      <img src={SONYVO6img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO217354</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony VP8000
                      </Typography>
                      <p className="body">
                      U-matic videocassette player with Type-C Dolby noise reduction, balanced audio, 33-pin parallel interface, XLR connectors.

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/SonyVP8000"}>Read More</Link>
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
                      <img src={SonyBVU820img} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO7973434N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Sony BVU920
                      </Typography>
                      <p className="body">
                      The Sony BVU-820 is a professional-grade video tape recorder 
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/SonyBVU920"}>Read More</Link>
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

export default Umatics