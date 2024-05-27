import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import Sonybvh3000img from "../../assets/images/SonyBVH3000.jpg"
import Vinten3702FulmarCameraTripodStudioPedestalimg from "../../assets/images/Vinten3702FulmarCameraTripodStudioPedestal.jpg"
import SachtlerVideo20img from "../../assets/images/SachtlerVideo20.jpg"
import VintenOspreyElitePedestawVector75Headimg from "../../assets/images/VintenOspreyElitePedestawVector75Head.jpg"
const Tripods = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  // return (
  //   <Grid>
  //   <div id="about-ban" className="innerban">
  //     <Container>
  //       <div className="abtcontent" >
  //         <h1 className="heading" data-aos="fade-up">Tripods</h1>
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
  //                   <img src={VintenOspreyElitePedestawVector75Headimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Vinten Osprey Elite Pedestal w Vector 75 Head
  //                   </Typography>
  //                   <p className="body">
  //                   The Vinten Fulmar pedestal is capable of supporting and counterbalancing 

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/VintenOspreyElitePedestalwVector75Head"}>Read More</Link>
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
  //                   <img src={Vinten3702FulmarCameraTripodStudioPedestalimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Vinten 3702 Fulmar Camera Tripod Studio Pedestal
  //                   </Typography>
  //                   <p className="body">
  //                   1" C-format editing VTR w/sync, air thread technology

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/Vinten3702FulmarCameraTripodStudioPedestal"}>Read More</Link>
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
  //                   <img src={SachtlerVideo20img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO21754</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                   Sachtler Video20
  //                   </Typography>
  //                   <p className="body">
  //                   As a relaunch of the legendary Video 20 head, the Sachtler Video

  //                   </p>
                   
  //                   <Button className="theme-btn">
  //                     <Link to={"/SachtlerVideo20"}>Read More</Link>
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

export default Tripods