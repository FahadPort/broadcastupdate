import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import BlackmagicDesignATEMimg from "../../assets/images/Blackmagic-Design-ATEM.jpg";
import NewTek from "../../assets/images/NewTek.jpg";
import ForAHVS390HSimg from "../../assets/images/ForAHVS390HS.webp";
import PanasonicAVUHS500img from "../../assets/images/PanasonicAVUHS500.png";
import HVS500HSimg from "../../assets/images/ForA-HVS-500HS.jpg";
import NVisionEnvoyimg from "../../assets/images/NVision-Envoy96x96.webp";

const Switchers = () => {

  const [title, setTitle] = useState("Switchers - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers a wide range of new & used video switchers for seamless live productions. Find the perfect switcher for your needs & budget.");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);

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
  //             Switchers
  //           </h1>
  //         </div>
  //       </Container>
  //     </div>

  //     <Grid className="all-prod-sec inn-pg-prod">
  //       <Container>
  //         <Grid container spacing={2} mt={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={BlackmagicDesignATEMimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Blackmagic Design ATEM</Typography>
  //                   <p className="body">2 M/E Broadcast Panel</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Blackmagic"}>Read More</Link>
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
  //                   <img src={NewTek} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">NewTek TriCaster</Typography>
  //                   <p className="body">
  //                     This bundle includes: TriCaster TC1 2RU and TC1LP
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/NewTekTriCaster"}>Read More</Link>
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
  //                   <img src={PanasonicAVUHS500img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO450383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic AV-UHS500</Typography>
  //                   <p className="body">
  //                     AV-UHS500 4K 12G-SDI / HDMI Professional Live Video
  //                     Production Switcher
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicAVUHS500"}>Read More</Link>
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
  //                   <img src={ForAHVS390HSimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO320383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">For-A HVS-390HS</Typography>
  //                   <p className="body">
  //                     The HANABI HVS-390HS is available as a 1M/E or 2M/E
  //                     switcher.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/ForAHVS390HS"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2} mt={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={HVS500HSimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5256383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">For A HVS-500HS 1M/E HANABI HD/SD portable Switcher</Typography>
  //                   <p className="body">The HVS-500HS 1M/E HANABI HD/SD Portable Digital Video Switcher from For</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/HVS500HS"}>Read More</Link>
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
  //                   <img src={NVisionEnvoyimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">NVision Envoy 96x96 HD Routing Switcher W/2 NV9601 XY</Typography>
  //                   <p className="body">
  //                   NVision Envoy 96×96 HD Routing Switcher. Unit was tested to power on. 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/NVisionEnvoy"}>Read More</Link>
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
  //                   <img src={NVisionEnvoyimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Blackmagic Design ATEM Television Studio HD8</Typography>
  //                   <p className="body">
  //                   NVision Envoy 96×96 HD Routing Switcher. Unit was tested to power on. 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/BlackmagicDesignATEMTelevisionStudioHD8"}>Read More</Link>
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
  //                   <img src={NVisionEnvoyimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic AV-HSW10 Compact Switcher</Typography>
  //                   <p className="body">
  //                   NVision Envoy 96×96 HD Routing Switcher. Unit was tested to power on. 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicAVHSW10CompactSwitcher"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
           
  //         </Grid>
  //         <Grid container spacing={2} mt={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={HVS500HSimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO5256383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Vaddio AV Bridge 2x1 Lecture Capture Device</Typography>
  //                   <p className="body">The HVS-500HS 1M/E HANABI HD/SD Portable Digital Video Switcher from For</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/VaddioAVBridgeLectureCaptureDevice"}>Read More</Link>
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
  //                   <img src={NVisionEnvoyimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Blackmagic Design ATEM 4 M/E Broadcast Studio 4K</Typography>
  //                   <p className="body">
  //                   NVision Envoy 96×96 HD Routing Switcher. Unit was tested to power on. 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/BlackmagicDesignATEMMEBroadcastStudio4K"}>Read More</Link>
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

export default Switchers;
