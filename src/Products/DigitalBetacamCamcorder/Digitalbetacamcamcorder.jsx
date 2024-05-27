import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import DVW709WSPimg from "../../assets/images/DVW709WSP.jpg";
import CinemaEOSCamcorderimg from "../../assets/images/CinemaEOSCamcorder.png";
import CANONEOSC300img from "../../assets/images/CANONEOSC300.png";


const Digitalbetacamcamcorder = () => {

  const [title, setTitle] = useState("Digital Camcorder for Sale  - The Broadcast Store");
  const [description, setDescription] = useState("The Broadcast Store offers new & used digital camcorders for all budgets. Find the perfect one for everyday memories or special events.");

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
  //         <h1 className="heading" data-aos="fade-up">Digital Betacam Camcorder</h1>
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
  //                   <img src={DVW709WSPimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO53349743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   DVW-709WSP 
  //                   </Typography>
  //                   <p className="body">
  //                   Digi Betacam camcorders, including the DVW-709WSP, are not only smaller and lighter

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/DVW709WSP"}>Read More</Link>
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
  //                   <img src={CinemaEOSCamcorderimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Cinema EOS Camcorder
  //                   </Typography>
  //                   <p className="body">
  //                   Capture breathtaking 8K video and 45MP stills with our smallest Cinema EOS camera that’s ready for anything.
  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/CinemaEOSCamcorder"}>Read More</Link>
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
  //                   <img src={CANONEOSC300img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Canon EOS C300
  //                   </Typography>
  //                   <p className="body">
  //                   A ground-breaking professional camera. Fuse Canon’s proven video and lens technology with EOS creativity.
  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/CANONEOSC300"}>Read More</Link>
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

export default Digitalbetacamcamcorder