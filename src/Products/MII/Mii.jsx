import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import AU65Himg from "../../assets/images/AU-650.jpg" 
import AU650img from "../../assets/images/AU-65H.jpg"
import AUW35Himg from "../../assets/images/AU-W35H.jpg"



import {Link} from "react-router-dom"

const Mii = () => {

  const [title, setTitle] = useState("MII Format Cassette Recorder for Sale - The Broadcast Store");
  const [description, setDescription] = useState("The Broadcast Store sells a used MII format cassette recorder. Own a piece of video history! Shop now before it's gone.");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);

    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])


//   return (
//     <Grid>
//     <div id="about-ban" className="innerban">
//       <Container>
//         <div className="abtcontent" >
//           <h1 className="heading" data-aos="fade-up">Mii</h1>
//         </div>
//       </Container>
//     </div>

//     <Grid className="all-prod-sec inn-pg-prod">
//       <Container>

//           <Grid container spacing={2}>
//             <Grid item xs={3}>
//               <Grid className="ftrd-slide">
//                 <Grid className="ftrd-slide-blk">
//                   <Grid className="prod-img">
//                     <Typography variant="h6">-20%</Typography>
//                     <img src={AU65Himg} alt="" />
//                   </Grid>
//                   <Grid className="pro-disp">
//                     <Grid className="prod-sku">
//                       <Typography variant="body">SKU#</Typography>
//                       <Typography variant="body">MO2165754</Typography>
//                     </Grid>
//                     <Typography variant="h5">
//                     Panasonic AU-650
//                     </Typography>
//                     <p className="body">
//                     Panasonic AU-650 Professional Video Editing Deck MII Format Cassette Recorder


//                     </p>
                   
//                     <Button className="theme-btn">
//                       <Link to={"/PanasonicAU650"}>Read More</Link>
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
//                     <img src={AU650img} alt="" />
//                   </Grid>
//                   <Grid className="pro-disp">
//                     <Grid className="prod-sku">
//                       <Typography variant="body">SKU#</Typography>
//                       <Typography variant="body">MO7974434N</Typography>
//                     </Grid>
//                     <Typography variant="h5">
//                     PANASONIC AU-65H – MII
    
//                     </Typography>
//                     <p className="body">
//                     Plays MII small and large tapes

// PAL, 230V
                      
//                     </p>
                    
//                     <Button className="theme-btn">
//                       <Link to={"/PanasonicAU65"}>Read More</Link>
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
//                     <img src={AUW35Himg} alt="" />
//                   </Grid>
//                   <Grid className="pro-disp">
//                     <Grid className="prod-sku">
//                       <Typography variant="body">SKU#</Typography>
//                       <Typography variant="body">MO7987434N</Typography>
//                     </Grid>
//                     <Typography variant="h5">
//                     PANASONIC MII – AU-W35H

//                     </Typography>
//                     <p className="body">
//                     MII, Plays MII small and large tapes. PAL, 230V

 
                      
//                     </p>
                    
//                     <Button className="theme-btn">
//                       <Link to={"/PanasonicAUW35HP"}>Read More</Link>
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
            
            
           
            


//             </Grid>
           
            
//       </Container>
//     </Grid>

//     <Grid className="notes">
//      <Container>
//      <Typography variant="h3">Notes</Typography>
//       <ul>
//        <li>*An "N" after the item# denotes a NEW item. A "U" denotes a USED item.</li>
//        <li>*Prices reflect a 3% cash discount</li>
//        <li>*Please confirm your contact and shipping information is correct</li>
//        <li>*All prices are based on cash payment</li>
//        <li>*All preferred shopper prices are good until the end of the month</li>
//        <li>*Orders taken after business hours will be processed the next business day</li>
//        <li>*Service contracts available for extra charge</li>
//        <li>*Lease Prices are based on a 36 month lease</li>
//        <li>*All shipping is UPS ground service unless otherwise requested</li>
//       </ul>
//      </Container>
//     </Grid>


//   </Grid>
//   )
}

export default Mii