import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import product01 from "../assets/images/ctgr-img1.jpg";
import product02 from "../assets/images/ctgr-img2.jpg";
import product03 from "../assets/images/ctgr-img3.jpg";
import product04 from "../assets/images/ctgr-img4.jpg";
import product05 from "../assets/images/ctgr-img5.jpg";
import product06 from "../assets/images/ctgr-img6.jpg";
import product07 from "../assets/images/ctgr-img7.jpg";
import product08 from "../assets/images/ctgr-img8.jpg";
import product09 from "../assets/images/ctgr-img9.jpg"; 


import {Link} from "react-router-dom"


const VideotapeEncodingServices = () => {

  const [title, setTitle] = useState("Videotape Encoding Services - Buy Videotape Encoding Products");
  const [description, setDescription] = useState("Broadcast Store expertly transfers VHS, Betamax, & more to digital formats. Secure your videotapes & enjoy them forever.");

  useEffect(() => {
    document.title = title;
    document.getElementById('meta-description').setAttribute('content', description);
  }, [title, description]);


    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])
  return (
    <Grid>
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading" data-aos="fade-up">Videotape Encoding Services</h1>
          </div>
        </Container>
      </div>

      <Grid className="all-prod-sec inn-pg-prod">
        <Container>
          <Grid className="head-title">
            <Typography variant="h2">Featured Products</Typography>
          </Grid>

          <Grid container spacing={2}>
           
          <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product01} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814260</Typography>
                 </Grid>
                 <Typography variant="h5">
                 The broadcast store 1 Inch Type C transfer to digital file
                 </Typography>
                 <p className="body">
                 1 inch C Format videotape digitized to Quicktime file or other file formats
                 </p>
                
                 
                 <Button className="theme-btn">
                   <Link to={'/broadcaststore1inchtype'}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product02} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO818457</Typography>
                 </Grid>
                 <Typography variant="h5">
                 The broadcast store 10,000 Beta or DigiBetacam video tapes
                 </Typography>
                 <p className="body">
                 SPECIAL OFFER: 10,000 Beta or DigiBetacam video tapes digitized before the end of this year.
                 </p>
                
                 
                 <Button className="theme-btn">
                   <Link to={"/broadcaststoreBeta"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product03} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814261</Typography>
                 </Grid>
                 <Typography variant="h5">
                 The broadcast store 2 Inch Quadruplex transfer to digital file
                 </Typography>
                 <p className="body">
                 2 inch Quad format videotape reformatted to Digital file
                   
                 </p>
                 
                 
                 <Button className="theme-btn">
                   <Link to={"/broadcaststore2InchQuadruplex"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product04} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814262</Typography>
                 </Grid>
                 <Typography variant="h5">
                 The broadcast store 3/4 Inch U-Matic tape transfer to digital file
                 </Typography>
                 <p className="body">
                 3/4", Umatic and Umatic SP videotape reformatted to Digital file
                   
                 </p>
              
                
                 <Button className="theme-btn">
                   <Link to={"/broadcaststoreMatictape"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>



       </Grid>

       <Grid container spacing={2} mt={2}>
           
          <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product05} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO815034</Typography>
                 </Grid>
                 <Typography variant="h5">
                  Betacam SX tape transfer to digital file

                 </Typography>
                 <p className="body">
                 Betacam SX, Beta-SX videotape format reformatted to Digital files

                 </p>
                
                 
                 <Button className="theme-btn">
                   <Link to={'/Betacamsx'}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product06} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814263N</Typography>
                 </Grid>
                 <Typography variant="h5">
                  Betacam tape digitization

                 </Typography>
                 <p className="body">
                 ALL Betacam SP, Beta-SX, IMX and Digital Betacam videotape digitized.

                 </p>
                
                 
                 <Button className="theme-btn">
                   <Link to={"/Betacamptape"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product07} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814596</Typography>
                 </Grid>
                 <Typography variant="h5">
                  D1 videotape transfer to digital file

                 </Typography>
                 <p className="body">
                 D1 format videotape reformatted to Digital files

                   
                 </p>
                 
                 
                 <Button className="theme-btn">
                   <Link to={"/Videotapetransfer"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
         <Grid item xs={3}>
           <Grid className="ftrd-slide">
             <Grid className="ftrd-slide-blk">
               <Grid className="prod-img">
                 <Typography variant="h6">-20%</Typography>
                 <img src={product08} alt="" />
               </Grid>
               <Grid className="pro-disp">
                 <Grid className="prod-sku">
                   <Typography variant="body">SKU#</Typography>
                   <Typography variant="body">MO814602</Typography>
                 </Grid>
                 <Typography variant="h5">
                  D2 Videotape Transfer to digital file

                 </Typography>
                 <p className="body">
                 D2 format videotape reformatted to Digital files

                   
                 </p>
              
                
                 <Button className="theme-btn">
                   <Link to={"/D2videotape"}>Read More</Link>
                 </Button>
               </Grid>
             </Grid>
           </Grid>
         </Grid>



       </Grid>

        </Container>
      </Grid>


    </Grid>
  )
}

export default VideotapeEncodingServices