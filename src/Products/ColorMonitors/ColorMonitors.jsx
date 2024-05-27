import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"

import SonyBVMD32E1WUimg from "../../assets/images/SonyBVMD32E1WU.png"
import SonyBVMD20F1Uimg from "../../assets/images/SonyBVMD20F1U.jpg"
import tvlogicsimg  from "../../assets/images/TVLogic_XVM-245W.png"
const ColorMonitors = () => {

  const [title, setTitle] = useState("Best LCD, LED Monitors - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers a huge selection of top-quality new & used LCD & LED monitors for all budgets. Shop for stunning visuals & superior performance");

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
  //         <h1 className="heading" data-aos="fade-up">Monitors</h1>
  //       </div>
  //     </Container>
  //   </div>

  //   <Grid className="all-prod-sec inn-pg-prod">
  //     <Container>

          
  //           <Grid container spacing={2} mt={2}>

  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyBVMD32E1WUimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Sony / BVM-D32E1WU
  //                   </Typography>
  //                   <p className="body">
  //                   DTV20" 1000 TVL Color Grading Monitor Display Unit 16:9, 480i, 480p, 720p, and 1080i
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVMD32E1WU"}>Read More</Link>
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
  //                   <img src={SonyBVMD20F1Uimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5540383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Sony BVM-20F1U
  //                   </Typography>
  //                   <p className="body">
  //                   Professional-grade 20" multisync monitor from Sony.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVMD20F1U"}>Read More</Link>
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
  //                   <img src={tvlogicsimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5540383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   TVLogic_XVM-245W
  //                   </Typography>
  //                   <p className="body">
  //                   High-Purity Precision RGB Matrix LED Backlight Array
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/TVLogic"}>Read More</Link>
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

export default ColorMonitors