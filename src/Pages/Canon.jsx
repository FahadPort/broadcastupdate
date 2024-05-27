import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import canon1 from "../assets/images/Canon1.jpg"
import canon2 from "../assets/images/Canon2.avif"
import canon3 from "../assets/images/Canon3.avif"
import canon4 from "../assets/images/Canon4.jpg"
import canon01 from "../assets/images/canon01.jpg"
import canon02 from "../assets/images/canon02.jpg"
import canon03 from "../assets/images/canon03.jpg"
import canon04 from "../assets/images/canon04.jpg"
import canon05 from "../assets/images/canon05.jpg"
import canon06 from "../assets/images/canon06.jpg"


import {Link} from "react-router-dom"

const Canon = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">Canon</h1>
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
                      <img src={canon1} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO21751</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon XL1S
                      </Typography>
                      <p className="body">
                      3CCD Digital Video Camcorder

                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/CanonXL1S"}>Read More</Link>
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
                      <img src={canon2} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO797443N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon XL2
                      </Typography>
                      <p className="body">
                      3 CCD Digital Video Camera
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/CanonXL2"}>Read More</Link>
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
                      <img src={canon3} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO815722</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon DVM-E60
                      </Typography>
                      <p className="body">
                      60-minute Digital Videocassette
                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/CanonDVM"}>Read More</Link>
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
                      <img src={canon4} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ706657N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon DIGI-SUPER 70x
                      </Typography>
                      <p className="body">
                      70x zoom and wide angle Broadcast Television Lens
                        
                      </p>
                  
                      <Button className="theme-btn">
                        <Link to={"/CanonDIGI"}>Read More</Link>
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
                      <img src={canon01} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ511866U</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon FFC-200
                      </Typography>
                      <p className="body">
                      focus control


                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/Canonfc"}>Read More</Link>
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
                      <img src={canon02} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO797443N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon HJ11EX4.7BIRSE
                      </Typography>
                      <p className="body">
                      HD LENS END STYLE

                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Canonp2"}>Read More</Link>
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
                      <img src={canon03} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ512519U</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon HJ11EX4.7BIRSE
                      </Typography>
                      <p className="body">
                      HD LENS END STYLE

                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Canonp3"}>Read More</Link>
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
                      <img src={canon04} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ517392U
</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon HJ14ex4.3B IASE
                      </Typography>
                      <p className="body">
                      Widest Angle HD Lens to date in the TV Industry

                        
                      </p>
                  
                      <Button className="theme-btn">
                        <Link to={"/Canonp4"}>Read More</Link>
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
                      <img src={canon05} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">EQ510144U</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon J15X9.5B4KRS
                      </Typography>
                      <p className="body">
                      15x zoom


                      </p>
                     
                      <Button className="theme-btn">
                        <Link to={"/Canonp5"}>Read More</Link>
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
                      <img src={canon06} alt="" />
                    </Grid>
                    <Grid className="pro-disp">
                      <Grid className="prod-sku">
                        <Typography variant="body">SKU#</Typography>
                        <Typography variant="body">MO797443N</Typography>
                      </Grid>
                      <Typography variant="h5">
                      Canon J18X8.5B3IRS
                      </Typography>
                      <p className="body">
                      J18 x 8.5B3 1 x 121:1.7/8.5-153mm (fits Ikegami HL V55)

                        
                      </p>
                      
                      <Button className="theme-btn">
                        <Link to={"/Canonp6"}>Read More</Link>
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

export default Canon