import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import product04 from "../../assets/images/ctgr-img4.jpg";
import Fujinonimg1 from "../../assets/images/Fujinon1.png"
import Fujinonimg2 from "../../assets/images/Fujinon2.jpg"
import FujinonZK85300mmimg from "../../assets/images/FujinonZK85300mm.jpg"
import FujinonZK1990mmimg from "../../assets/images/FujinonZK1990mm.jpg"
import FujinonHA26x67BESME18img from "../../assets/images/FujinonHA26x6.7BESM-E18.jpg"

import FujinonUA107x84BESMT454Kimg from "../../assets/images/FujinonUA107x84BESMT454K.jpg"
import CanonHJ4010BIASDVimg from "../../assets/images/CanonHJ4010BIASD-V.jpg"

import FujinonHA42BERDU48img from "../../assets/images/Fujinon-HA42x9.7BERD-U48.jpg"
import CanonCN717KASimg from "../../assets/images/Canon-CN7x17KAS.webp"
import CanonHJ11ex47BIASEimg from "../../assets/images/Canon-HJ11ex4.7BIASE.jpeg"
import FujinonUA4695BERDU1img from "../../assets/images/Fujinon-UA46x9.5BERD-U1.png"



const Lenses = () => {

    
  const [title, setTitle] = useState("Best Used and New Camera Lenses - Buy Lenses Today Online");
  const [description, setDescription] = useState("The Broadcast Store has the best selection of new & used camera lenses for all budgets. Find the perfect lens for stunning photography.");

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
  //         <h1 className="heading" data-aos="fade-up">Lenses</h1>
  //       </div>
  //     </Container>
  //   </div>

  //   <Grid className="all-prod-sec inn-pg-prod">
  //     <Container>

  //         <Grid container spacing={2}>
  //         <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={product04} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     The broadcast store 3/4 Inch U-Matic tape transfer to digital file
  //                     </Typography>
  //                     <p className="body">
  //                     3/4", Umatic and Umatic SP videotape reformatted to Digital file
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/broadcaststoreMatictape"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //         <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={Fujinonimg2} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO898262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon XA17x7.6BERM
  //                     </Typography>
  //                     <p className="body">
  //                     Fujinon XA17x7.6BERM 17x 2/3" Panasonic P2 High Definition Lens with 2x Extender, Manual Focus, Servo Zoom
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/Fujinon2"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //         <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={Fujinonimg1} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO984262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon HA23x7.6BERD-S6
  //                     </Typography>
  //                     <p className="body">
  //                     The Fujinon HA23x7.6BERD-S6 ENG Lens with Digital Servo for Focus and Zoom is a 7.6-175mm lens.
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/Fujinon1"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonZK1990mmimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO984262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon ZK19-90mm 
  //                     </Typography>
  //                     <p className="body">
  //                     The Fujinon ZK19-90mm T2.9 Cabrio Lens is a wide to telephoto zoom lens for Super 35mm cameras, and it features a PL mount.
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonZK1990mm"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
           
           

  //           </Grid>
  //           <Grid container spacing={2} mt={2}>
  //         <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonZK85300mmimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon ZK85-300mm
  //                     </Typography>
  //                     <p className="body">
  //                     The Fujinon ZK85-300mm T2.9-4.0 Lightweight Cabrio Lens is a PL Mount lens that features a detachable servo drive unit.
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonZK85300mm"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonHA26x67BESME18img} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon HA 26x6.7BESM-E18 
  //                     </Typography>
  //                     <p className="body">
  //                     These Fujinon HA26x6.7BESM-E18 have been used exclusively
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonHA26x67BESME18"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonUA107x84BESMT454Kimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon UA107x8.4 BESM-T45 4K
  //                     </Typography>
  //                     <p className="body">
  //                     The 4K Premier UHD UA107X8.4 Box-Type 107x Zoom with OIS
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonUA107x84BESMT454K"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={CanonHJ4010BIASDVimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Canon HJ40x10B IASD-V
  //                     </Typography>
  //                     <p className="body">
  //                     The Canon HJ40X10B 2/3" EFP Telephoto Lens with Semi Servo Kit is a telephoto lens that is intended 
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/CanonHJ4010BIASDV"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
         
           
           

  //           </Grid>
  //           <Grid container spacing={2} mt={2}>
  //         <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonHA42BERDU48img} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon HA42x9.7BERD-U48
  //                     </Typography>
  //                     <p className="body">
  //                     The Fujinon HA42x9.7BERD-U48 is a high-end broadcast lens designed for professional video production
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonHA42BERDU48"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={CanonCN717KASimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Canon CN7x17 KAS  
  //                     </Typography>
  //                     <p className="body">
  //                     The Canon CN7x17 KAS Cine-Servo lens is a high-end lens designed for 
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/CanonCN717KAS"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={CanonHJ11ex47BIASEimg} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Canon HJ11ex4.7BIASE
  //                     </Typography>
  //                     <p className="body">
  //                     The Canon HJ11ex4.7BIASE is a high-end broadcast lens designed for professional 
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/CanonHJ11ex47BIASE"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //             <Grid item xs={3}>
  //               <Grid className="ftrd-slide">
  //                 <Grid className="ftrd-slide-blk">
  //                   <Grid className="prod-img">
  //                     <Typography variant="h6">-20%</Typography>
  //                     <img src={FujinonUA4695BERDU1img} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Fujinon UA46x9.5BERD-U1
  //                     </Typography>
  //                     <p className="body">
  //                     The UA46x9.5BERD-U1 offers an impressive zoom range of 46x, allowing  
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/FujinonUA4695BERDU1"}>Read More</Link>
  //                     </Button>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
         
           
           

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

export default Lenses