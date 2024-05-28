import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import product01 from "../../assets/images/ctgr-img1.jpg";

const Transmitter = () => {

  const [title, setTitle] = useState("Type C Transmitter - The Broadcast Store");
  const [description, setDescription] = useState("The Broadcast Store offers Type-C Transmitters. Easily share your music, podcasts, or audiobooks from your smartphone to any FM radio.");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);

    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  // return (
  //   <Grid>
  //   <div id="about-ban" className="innerban">
  //     <Container>
  //       <div className="abtcontent" >
  //         <h1 className="heading" data-aos="fade-up">Transmitter</h1>
  //       </div>
  //     </Container>
  //   </div>

  //   <Grid className="all-prod-sec inn-pg-prod">
  //     <Container>

  //         <Grid container spacing={2}>
  //         <Grid item xs={3}>
  //         <Grid className="ftrd-slide">
  //           <Grid className="ftrd-slide-blk">
  //             <Grid className="prod-img">
  //               <Typography variant="h6">-20%</Typography>
  //               <img src={product01} alt="" />
  //             </Grid>
  //             <Grid className="pro-disp">
  //               <Grid className="prod-sku">
  //                 <Typography variant="body">SKU#</Typography>
  //                 <Typography variant="body">MO814260</Typography>
  //               </Grid>
  //               <Typography variant="h5">
  //               The broadcast store 1 Inch Type C transfer to digital file
  //               </Typography>
  //               <p className="body">
  //               1 inch C Format videotape digitized to Quicktime file or other file formats
  //               </p>
               
                
  //               <Button className="theme-btn">
  //                 <Link to={'/broadcaststore1inchtype'}>Read More</Link>
  //               </Button>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
           
           

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

export default Transmitter