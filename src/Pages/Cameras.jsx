import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import HDK79EC2 from "../assets/images/HDK-79EC2.jpg";
import JVCAV from "../assets/images/JVCAV.jpg";
import JVCAVPRO from "../assets/images/JVCAVPRO.jpg";
import JVCDV from "../assets/images/JVCDV.jpg";
import JVCKV from "../assets/images/JVCKV.jpg";
import studiotlx from "../assets/images/studiotlx.jpg";
import F1030U from "../assets/images/F1030U.jpg";
import KYF32U from "../assets/images/KYF32U.jpg";
import GrassValleyLDK600img from "../assets/images/GrassValleyLDK600.jpg";
import GrassValleyKALYPSOimg from "../assets/images/Grass-Valley-KALYPSO.jpg";
import PanasonicAGHPX600img from "../assets/images/PanasonicAG-HPX600.jpg";
import BlackmagicDesignURSAimg from "../assets/images/BlackmagicDesignURSA.webp";

import PanasonicAGHMC80img from "../assets/images/PanasonicAG-HMC80.jpg";
import SonyHXC100img from "../assets/images/SonyHXC100.jpg";
import SonyPXWZ150img from "../assets/images/SonyPXWZ150.jpg";
import SonyPMWEX1img from "../assets/images/SonyPMW-EX1.jpg";
import SonyPMWEX3img from "../assets/images/SonyPMWEX3.jpg";
import SonyPMW300K1img from "../assets/images/SonyPMW300K1.jpg";
import SonyPMW200img from "../assets/images/SonyPMW-200.webp";
import ArriAlexaclassiccameraimg from "../assets/images/ArriAlexaclassiccamera.png";
import GrassValleyLDX80img from "../assets/images/GrassValleyLDX80.jpg"




const Cameras = () => {

  const [title, setTitle] = useState("New and Used Professional Cameras - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers new & used professional cameras at competitive prices. Find top brands & save on cinema, broadcast & production gear.");

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
  //             Cameras
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
  //                   <img src={HDK79EC2} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO799743</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Ikegami HDK-79D</Typography>
  //                   <p className="body">
  //                     2/3-inch 2,200,000-pixel 1080i FIT CCD image sensors are
  //                     employed to achieve superb picture quality with a
  //                     horizontal resolution of 1,000 lines and a S/N ratio of
  //                     56dB.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Ikegami"}>Read More</Link>
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
  //                   <img src={JVCAV} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO662561</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC AV-P1000U</Typography>

  //                   <p className="body">SXGA DIGITAL PRESENTER</p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/Jvcav"}>READ MORE</Link>
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
  //                   <img src={JVCAVPRO} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO662561</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC AV-P750U</Typography>

  //                   <p className="body">
  //                     The AV-P750U has am adjustable 5 position camera arm and
  //                     rotate camera head to present objects from any angle.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/Jvcavp"}>READ MORE</Link>
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
  //                   <img src={JVCDV} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO796116</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC DV115</Typography>

  //                   <p className="body">
  //                     The DV115 is a light weight pan & tilt head especially
  //                     optimized for the JVC GY-DV300REM camcorder.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/Jvcdv"}>READ MORE</Link>
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
  //                   <img src={studiotlx} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC KY-D29WSTLX</Typography>
  //                   <p className="body">Deluxe Studio Camera Package</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/D29wstlx"}>Read More</Link>
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
  //                   <img src={studiotlx} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO17712</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC KY-D29WUCH</Typography>

  //                   <p className="body">3-CCD COLOR CAMERA HEAD 16:9/4:3</p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/D29wuch"}>READ MORE</Link>
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
  //                   <img src={F1030U} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO793901</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC KY-F1030U</Typography>

  //                   <p className="body">SXGA DIGITAL IMAGE CAPTURE CAMERA</p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/F1030U"}>READ MORE</Link>
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
  //                   <img src={KYF32U} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO17392</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">JVC KY-F32U</Typography>

  //                   <p className="body">
  //                     3-CCD General Purpose Camera Less Lens
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>
  //                   <Button className="theme-btn">
  //                     <Link to={"/KYf32u"}>READ MORE</Link>
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
  //                   <img src={GrassValleyLDK600img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Grass Valley LDK6000</Typography>
  //                   <p className="body">
  //                     Grass Valley LDK-6000 Fiber, Super Expander Sled, 7"
  //                     Studio VF, CCU, and RCP
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/GrassValleyLDK600"}>Read More</Link>
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
  //                   <img src={GrassValleyKALYPSOimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Grass Valley Kalypso</Typography>
  //                   <p className="body">4-M/E, 2 Remote 32 Aux KMD Panels</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/GrassValleyKALYPSO"}>Read More</Link>
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
  //                   <img src={PanasonicAGHPX600img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO680383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic AG-HPX600</Typography>
  //                   <p className="body">
  //                     An optional upgrade provides HPX600 compatibility with the
  //                     new AVC-ULTRA family of codecs.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicAGHPX600"}>Read More</Link>
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
  //                   <img src={BlackmagicDesignURSAimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Blackmagic Design URSA</Typography>
  //                   <p className="body">
  //                     The Blackmagic URSA Mini Pro 12K is the fastest way to
  //                     take your workflow to the next level.
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/BlackmagicDesignURSA"}>Read More</Link>
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
  //                   <img src={PanasonicAGHMC80img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Panasonic AG-HMC80</Typography>
  //                   <p className="body">
  //                   The Panasonic AG-HMC80 3MOS AVCCAM HD Shoulder-Mount Camcorder 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/PanasonicAGHMC80"}>Read More</Link>
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
  //                   <img src={SonyHXC100img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony/HXC100</Typography>
  //                   <p className="body">•	The Sony HXC-100K is a multiformat camera system designed for digital triax.</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyHXC100"}>Read More</Link>
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
  //                   <img src={SonyPXWZ150img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO680383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PXWZ150</Typography>
  //                   <p className="body">
  //                   Sony’s PXW-Z150 handy professional camcorder delivers stunning 4K image quality
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPXWZ150"}>Read More</Link>
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
  //                   <img src={SonyPMWEX1img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PMW-EX1</Typography>
  //                   <p className="body">
  //                   The Sony EX1 is popular among independent filmmakers due to the 1/2" TrueHD sensors
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPMWEX1"}>Read More</Link>
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
  //                   <img src={SonyPMWEX3img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PMW-EX3</Typography>
  //                   <p className="body">
  //                   The Sony PMW-EX3 is a flash-memory based high definition camcorder 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPMWEX3"}>Read More</Link>
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
  //                   <img src={SonyPMW300K1img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PMW-300K1</Typography>
  //                   <p className="body">The PMW-300K1 XDCAM camcorder is equipped with three 1/2-inch Exmor</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPMW300K1"}>Read More</Link>
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
  //                   <img src={SonyPMW200img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO680383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PMW-200</Typography>
  //                   <p className="body">
  //                   The Sony PMW-200 is a camcorder that features a CMOS sensor type
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPMW200"}>Read More</Link>
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
  //                   <img src={ArriAlexaclassiccameraimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Arri Alexa classic camera</Typography>
  //                   <p className="body">
  //                   The ARRI ALEXA Classic camera delivers exceptional image quality
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/ArriAlexaclassiccamera"}>Read More</Link>
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
  //                   <img src={SonyPMWEX3img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Son PXW-x400 Shoulder camcorder (Body Only)</Typography>
  //                   <p className="body">
  //                   The Sony PMW-EX3 is a flash-memory based high definition camcorder 
  //                   </p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonPXW400Shouldercamcorder"}>Read More</Link>
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
  //                   <img src={SonyPMW300K1img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PXW-Z450 4k UHD Shoulder camcorder (Body Only)</Typography>
  //                   <p className="body">The PMW-300K1 XDCAM camcorder is equipped with three 1/2-inch Exmor</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPXW4504kUHDShouldercamcorder"}>Read More</Link>
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
  //                   <img src={GrassValleyLDX80img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO500383</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Grass  Valley LDX-80</Typography>
  //                   <p className="body">Grass Valley LDX 80 Premiere HD Camera Channel</p>
  //                   <Typography variant="h6">Call for price</Typography>

  //                   <Button className="theme-btn">
  //                     <Link to={"/GrassValleyLDX80"}>Read More</Link>
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

export default Cameras;
