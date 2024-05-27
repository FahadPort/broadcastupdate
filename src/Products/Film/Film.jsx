import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import MWAFlashscanFilmscannerimg from "../../assets/images/MWA-Flashscan-8-8mm-Filmscanner.jpg"
import MWAMB5116mmsoundfollowerimg from "../../assets/images/MWA-MB51-16mm,17,5,,.35,,-sound follower.jpg"
import MWAFlashscan8img from "../../assets/images/MWA-Flashscan-8-8mm-Filmscanner.jpg"




const Film = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    }, [])
  // return (
  //   <Grid>
  //   <div id="about-ban" className="innerban">
  //     <Container>
  //       <div className="abtcontent" >
  //         <h1 className="heading" data-aos="fade-up">Film</h1>
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
  //                   <img src={MWAFlashscanFilmscannerimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   MWA Flashscan 8-8mm Film scanner
  //                   </Typography>
  //                   <p className="body">
  //                   The MWA Flash scan 8 is a film scanner specifically designed for digitizing 8mm film.

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/MWAFlashscanFilmscanner"}>Read More</Link>
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
  //                   <img src={MWAMB5116mmsoundfollowerimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   MWA MB51 16mm,17,5,,.35,, sound follower
  //                   </Typography>
  //                   <p className="body">
  //                   The MWA MB51 is a sound follower device designed for use with 16mm, 17.5mm, and 35mm film formats.

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/MWAMB5116mmsoundfollower"}>Read More</Link>
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
  //                   <img src={MWAFlashscan8img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   MWA Flashscan 8
  //                   </Typography>
  //                   <p className="body">
  //                   MWA FLASHSCAN 8 – 8mm Film scanner

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/MWAFlashscan8"}>Read More</Link>
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

export default Film