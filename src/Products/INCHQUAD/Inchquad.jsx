import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import AMPEXAVR2img from "../../assets/images/AMPEXAVR2.jpg"
import AMPEXAVR3img from "../../assets/images/Ampex-AVR3.jpeg"

const Inchquad = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  // return (
  //   <Grid>
  //   <div id="about-ban" className="innerban">
  //     <Container>
  //       <div className="abtcontent" >
  //         <h1 className="heading" data-aos="fade-up">2 Inch Quad</h1>
  //       </div>
  //     </Container>
  //   </div>

  //   <Grid className="all-prod-sec inn-pg-prod">
  //     <Container>

  //         <Grid container spacing={2}>
          
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={AMPEXAVR2img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   AMPEX/AVR-2
  //                   </Typography>
  //                   <p className="body">
  //                   This is the Ampex AVR-2. A two inch quadruplex format broadcast VTR circa 1979.

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/AMPEXAVR2"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={AMPEXAVR3img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Ampex AVR3  
  //                   </Typography>
  //                   <p className="body">
  //                   The Ampex AVR-3 is a professional-grade video tape recorder (VTR) designed for broadcast,

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/AMPEXAVR3"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
           
          
        
           
            


  //           </Grid>
           
            
  //     </Container>
  //   </Grid>

  //   <Grid className="notes">
  //    <Container>
  //    <Typography variant="h3">Notes</Typography>
  //     <ul>
  //      <li>*An "N" after the item# denotes a NEW item. A "U" denotes a USED item.</li>
  //      <li>*Prices reflect a 3% cash discount</li>
  //      <li>*Please confirm your contact and shipping information is correct</li>
  //      <li>*All prices are based on cash payment</li>
  //      <li>*All preferred shopper prices are good until the end of the month</li>
  //      <li>*Orders taken after business hours will be processed the next business day</li>
  //      <li>*Service contracts available for extra charge</li>
  //      <li>*Lease Prices are based on a 36 month lease</li>
  //      <li>*All shipping is UPS ground service unless otherwise requested</li>
  //     </ul>
  //    </Container>
  //   </Grid>


  // </Grid>
  // )
}

export default Inchquad