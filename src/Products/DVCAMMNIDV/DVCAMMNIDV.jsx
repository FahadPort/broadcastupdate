import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import SonyDSR25img from "../../assets/images/Sony-DSR25.webp";
import SonyDSR45img from "../../assets/images/Sony-DSR45.jpg";

import SonyDSR11img from "../../assets/images/Sony-DSR11.jpg"
import SonyDSR1600img from "../../assets/images/Sony-DSR1600.jpg"
import SonyDSR80img from "../../assets/images/Sony-DSR80.png"
import SonyDSR1800img from "../../assets/images/Sony-DSR1800.jpg"
import SonyDSR1500Aimg from "../../assets/images/Sony-DSR1500A.jpg"
import SonyDSR30img from "../../assets/images/Sony-DSR30.jpg"
import SonyDSR20img from "../../assets/images/Sony-DSR20.jpg"


const DVCAMMNIDV = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);
  // return (
  //   <Grid>
  //     <div id="about-ban" className="innerban">
  //       <Container>
  //         <div className="abtcontent">
  //           <h1 className="heading" data-aos="fade-up">
  //             DVCAMMNIDV
  //           </h1>
  //         </div>
  //       </Container>
  //     </div>

  //     <Grid className="all-prod-sec inn-pg-prod">
  //       <Container>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyDSR25img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR25</Typography>
  //                   <p className="body">
  //                     SONY DSR-25 DVCAM Recorder PAL/NTSC Drum Hours 230
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR25"}>Read More</Link>
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
  //                   <img src={SonyDSR45img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR45</Typography>
  //                   <p className="body">
  //                     SONY DSR-45 DVCAM Recorder PAL DRUM RUN 1200
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR45"}>Read More</Link>
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
  //                   <img src={SonyDSR11img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR11</Typography>
  //                   <p className="body">
  //                   The DSR-11 supports the Digital Betacam (DVCAM) format, 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR11"}>Read More</Link>
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
  //                   <img src={SonyDSR1600img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR1600</Typography>
  //                   <p className="body">
  //                   The DSR-1600 supports the Digital Betacam (DigiBeta) format
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR1600"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>

  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyDSR80img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR80</Typography>
  //                   <p className="body">
  //                   The DSR-80 supports the Digital Betacam (DigiBeta) format
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR80"}>Read More</Link>
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
  //                   <img src={SonyDSR1800img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR1800</Typography>
  //                   <p className="body">
  //                   The DSR-1800 supports the Digital Betacam (DigiBeta) format
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR1800"}>Read More</Link>
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
  //                   <img src={SonyDSR1500Aimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR1500A</Typography>
  //                   <p className="body">
  //                   The DSR-1500A supports the Digital Betacam (DigiBeta) format
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR1500A"}>Read More</Link>
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
  //                   <img src={SonyDSR30img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR30</Typography>
  //                   <p className="body">
  //                   The DSR-30 offers versatile playback capabilities, allowing users 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR30"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyDSR20img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony DSR20</Typography>
  //                   <p className="body">
  //                   The Sony DSR-20 is a professional digital video cassette recorder.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyDSR20"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
           
  //         </Grid>



  //       </Container>
  //     </Grid>

  //     <Grid className="notes">
  //       <Container>
  //         <Typography variant="h3">Notes</Typography>
  //         <ul>
  //           <li>
  //             *An "N" after the item# denotes a NEW item. A "U" denotes a USED
  //             item.
  //           </li>
  //           <li>*Prices reflect a 3% cash discount</li>
  //           <li>
  //             *Please confirm your contact and shipping information is correct
  //           </li>
  //           <li>*All prices are based on cash payment</li>
  //           <li>
  //             *All preferred shopper prices are good until the end of the month
  //           </li>
  //           <li>
  //             *Orders taken after business hours will be processed the next
  //             business day
  //           </li>
  //           <li>*Service contracts available for extra charge</li>
  //           <li>*Lease Prices are based on a 36 month lease</li>
  //           <li>
  //             *All shipping is UPS ground service unless otherwise requested
  //           </li>
  //         </ul>
  //       </Container>
  //     </Grid>
  //   </Grid>
  // );
};

export default DVCAMMNIDV;
