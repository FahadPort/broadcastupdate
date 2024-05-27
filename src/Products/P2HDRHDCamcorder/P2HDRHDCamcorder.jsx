import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import product04 from "../../assets/images/ctgr-img4.jpg";
import PanasonicAJHPX3000img from "../../assets/images/PanasonicAJHPX3000.jpg"
import PanasonicAJPX5100img from "../../assets/images/PanasonicAJPX5100.png"

const P2HDRHDCamcorder = () => {

  const [title, setTitle] = useState("Buy Panasonic HDR  Camcorder  Online - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers a Panasonic HDR camcorder for sale. Capture vibrant colors & lifelike details. Shop now for exceptional image quality!");

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
  //         <h1 className="heading" data-aos="fade-up">P2 HDR HD Camcorder </h1>
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
  //                     <img src={PanasonicAJPX5100img} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO814262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Panasonic AJ-PX5100
  //                     </Typography>
  //                     <p className="body">
  //                     High-End ENG Camera Recorder with HDR Acquisition and RTSP/RTMP Streaming/Transmission.
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/PanasonicAJPX5100"}>Read More</Link>
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
  //                     <img src={PanasonicAJHPX3000img} alt="" />
  //                   </Grid>
  //                   <Grid className="pro-disp">
  //                     <Grid className="prod-sku">
  //                       <Typography variant="body">SKU#</Typography>
  //                       <Typography variant="body">MO898262</Typography>
  //                     </Grid>
  //                     <Typography variant="h5">
  //                     Panasonic AJ-HPX3000
  //                     </Typography>
  //                     <p className="body">
  //                     New 2.2 Million Pixel CCDs and AVC-I team up to deliver Panasonic's first Native 1080p* capable camera.
                        
  //                     </p>
                   
                     
  //                     <Button className="theme-btn">
  //                       <Link to={"/PanasonicAJHPX3000"}>Read More</Link>
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

export default P2HDRHDCamcorder