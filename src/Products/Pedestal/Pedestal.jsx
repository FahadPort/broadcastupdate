import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import VintenOspreyEliteimg  from "../../assets/images/Vinten-Osprey-Elite.jpg";
import Vinten3702FULMARimg  from "../../assets/images/Vinten-3702-FULMAR.jpg";


const Pedestal = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
      }, []);
  // return (
  //   <Grid>
  //   <div id="about-ban" className="innerban">
  //     <Container>
  //       <div className="abtcontent">
  //         <h1 className="heading" data-aos="fade-up">
           
  //         Pedestal

  //         </h1>
  //       </div>
  //     </Container>
  //   </div>

  //   <Grid className="all-prod-sec inn-pg-prod">
  //     <Container>
  //       <Grid container spacing={2}>
  //         <Grid item xs={3}>
  //           <Grid className="ftrd-slide">
  //             <Grid className="ftrd-slide-blk">
  //               <Grid className="prod-img">
  //                 <Typography variant="h6">-20%</Typography>
  //                 <img src={VintenOspreyEliteimg} alt="" />
  //               </Grid>
  //               <Grid className="pro-disp">
  //                 <Grid className="prod-sku">
  //                   <Typography variant="body">SKU#</Typography>
  //                   <Typography variant="body">MO500383</Typography>
  //                 </Grid>
  //                 <Typography variant="h5">Vinten Osprey Elite</Typography>
  //                 <p className="body">
  //                 Fully steerable pedestal with perfect balance of its entire extended stroke.  
  //                 </p>
  //                 <Typography variant="h6">Call for price</Typography>

  //                 <Button className="theme-btn">
  //                   <Link to={"/VintenOspreyElite"}>Read More</Link>
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid item xs={3}>
  //           <Grid className="ftrd-slide">
  //             <Grid className="ftrd-slide-blk">
  //               <Grid className="prod-img">
  //                 <Typography variant="h6">-20%</Typography>
  //                 <img src={Vinten3702FULMARimg} alt="" />
  //               </Grid>
  //               <Grid className="pro-disp">
  //                 <Grid className="prod-sku">
  //                   <Typography variant="body">SKU#</Typography>
  //                   <Typography variant="body">MO500383</Typography>
  //                 </Grid>
  //                 <Typography variant="h5">Vinten/3702 FULMAR</Typography>
  //                 <p className="body">
  //                 Vinten 3702 Fulmar Pedestal Camera Tripod Base
  //                 </p>
  //                 <Typography variant="h6">Call for price</Typography>

  //                 <Button className="theme-btn">
  //                   <Link to={"/Vinten3702FULMAR"}>Read More</Link>
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
         
  //       </Grid>
       
  //     </Container>
  //   </Grid>

  //   <Grid className="notes">
  //     <Container>
  //       <Typography variant="h3">Notes</Typography>
  //       <ul>
  //         <li>
  //           *An "N" after the item# denotes a NEW item. A "U" denotes a USED
  //           item.
  //         </li>
  //         <li>*Prices reflect a 3% cash discount</li>
  //         <li>
  //           *Please confirm your contact and shipping information is correct
  //         </li>
  //         <li>*All prices are based on cash payment</li>
  //         <li>
  //           *All preferred shopper prices are good until the end of the month
  //         </li>
  //         <li>
  //           *Orders taken after business hours will be processed the next
  //           business day
  //         </li>
  //         <li>*Service contracts available for extra charge</li>
  //         <li>*Lease Prices are based on a 36 month lease</li>
  //         <li>
  //           *All shipping is UPS ground service unless otherwise requested
  //         </li>
  //       </ul>
  //     </Container>
  //   </Grid>
  // </Grid>
  // )
}

export default Pedestal