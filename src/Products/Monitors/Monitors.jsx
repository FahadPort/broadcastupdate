import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



import SONYBVMA20F1Mimg from "../../assets/images/SONY-BVM-A20F1M.jpg";
import SonyBVM1310img from "../../assets/images/Sony-BVM-1310.jpg";
import SonyBVML230img from "../../assets/images/Sony-BVM-L230.jpg";
import SonyBVMF250img from "../../assets/images/Sony-BVM-F250.jpg";
import SonyBVM14F5Uimg from "../../assets/images/Sony-BVM-14F5U.jpg";
import PanasonicBTLH1710img from "../../assets/images/Panasonic-BT-LH1710.jpg";
import PanasonicBTLH910Gimg from "../../assets/images/Panasonic-BT-LH910G.jpg";
import SonyPVM1354Qimg from "../../assets/images/Sony-PVM-1354Q.jpg";
import SonyPVM20M4Uimg from "../../assets/images/Sony-PVM-20M4U.jpg";
import SonyPVM8020img from "../../assets/images/Sony-PVM-8020.png";
import SONYPVM2530img from "../../assets/images/SONY-PVM-2530.jpg";









const Monitors = () => {
 

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
  //             Monitors
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
  //                   <img src={SONYBVMA20F1Mimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">SONY BVM-A20F1M </Typography>
  //                   <p className="body">
  //                   The BVM-A20F1M features a 20-inch flat-screen display. It utilizes Sony's Trinitron CRT technology, known for its high-quality image reproduction and color accuracy.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SONYBVMA20F1M"}>Read More</Link>
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
  //                   <img src={SonyBVM1310img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony BVM-1310</Typography>
  //                   <p className="body">
  //                   The Sony BVM-1310 is a professional-grade CRT (Cathode Ray Tube) monitor that was widely 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVM1310"}>Read More</Link>
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
  //                   <img src={SonyBVML230img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony BVM-L230</Typography>
  //                   <p className="body">
  //                   The Sony BVM-L230 is a professional-grade OLED (Organic Light Emitting Diode) 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVML230"}>Read More</Link>
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
  //                   <img src={SonyBVMF250img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony BVM-F250 </Typography>
  //                   <p className="body">
  //                   The Sony BVM-F250 is a professional-grade OLED (Organic Light Emitting Diode
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVMF250"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </Grid>

  //     <Grid className="all-prod-sec inn-pg-prod">
  //       <Container>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyBVM14F5Uimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony BVM-14F5U</Typography>
  //                   <p className="body">
  //                   The Sony BVM-14F5U is a professional-grade CRT (Cathode Ray Tube) monitor designed
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyBVM14F5U"}>Read More</Link>
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
  //                   <img src={PanasonicBTLH1710img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic BT-LH1710</Typography>
  //                   <p className="body">
  //                   The Panasonic BT-LH1710 is a professional-grade LCD monitor
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicBTLH1710"}>Read More</Link>
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
  //                   <img src={PanasonicBTLH910Gimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic BT-LH910G</Typography>
  //                   <p className="body">
  //                   The Panasonic BT-LH910G is a professional-grade LCD monitor
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicBTLH910G"}>Read More</Link>
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
  //                   <img src={SonyPVM1354Qimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PVM 1354Q</Typography>
  //                   <p className="body">
  //                   The Sony PVM-1354Q is a professional-grade CRT (Cathode Ray Tube)
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPVM1354Q"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </Grid>
  //     <Grid className="all-prod-sec inn-pg-prod">
  //       <Container>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyPVM20M4Uimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PVM-20M4U</Typography>
  //                   <p className="body">
  //                   The PVM-20M4U features a 20-inch flat-screen CRT display.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPVM20M4U"}>Read More</Link>
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
  //                   <img src={SonyPVM8020img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PVM-8020</Typography>
  //                   <p className="body">
  //                   The Sony PVM-8020 is a professional-grade
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPVM8020"}>Read More</Link>
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
  //                   <img src={SONYPVM2530img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5399743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">SONY PVM-2530</Typography>
  //                   <p className="body">
  //                   The PVM-2530 features a 25-inch flat-screen CRT display. It utilizes Sony's Trinitron technology, 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SONYPVM2530"}>Read More</Link>
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

export default Monitors;
