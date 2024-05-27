import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import SonyPXWFS5MKIIimg from "../../assets/images/SonyPXWFS5MKII.jpg";
import SonyPDWF800img from "../../assets/images/SonyPDWF800.jpg";

const Camcorders = () => {

  const [title, setTitle] = useState("Buy Sony PXW-X70 Professional Camcorder At  Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers new & used professional XDCam camcorders. Find top brands for stunning visuals & reliable performance. Shop today!");

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
          <h1 className="heading" data-aos="fade-up">XDCam  Camcorder</h1>
        </div>
      </Container>
    </div>

    <Grid className="all-prod-sec inn-pg-prod">
      <Container>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img src={SonyPXWFS5MKIIimg} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO5399743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony PXW-FS5 MKII 
                    </Typography>
                    <p className="body">
                    Sony PDW-F800 XDCAM HD422 2/3" 3CCD Camera

                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/SonyPXWFS5MKII"}>Read More</Link>
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
                    <img src={SonyPDWF800img} alt="" />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">MO5399743</Typography>
                    </Grid>
                    <Typography variant="h5">
                    Sony PDW-F800
                    </Typography>
                    <p className="body">
                    The Sony FS5 II is no revolution from the prior version, however, it’s still one hell of a camera.
                    </p>
                   
                    <Button className="theme-btn">
                      <Link to={"/SonyPDWF800"}>Read More</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
           
           

            </Grid>
      </Container>
    </Grid>

    <Grid className="notes">
     <Container>
     <Typography variant="h3">Notes</Typography>
      <ul>
       <li>*An "N" after the item# denotes a NEW item. A "U" denotes a USED item.</li>
       <li>*Prices reflect a 3% cash discount</li>
       <li>*Please confirm your contact and shipping information is correct</li>
       <li>*All prices are based on cash payment</li>
       <li>*All preferred shopper prices are good until the end of the month</li>
       <li>*Orders taken after business hours will be processed the next business day</li>
       <li>*Service contracts available for extra charge</li>
       <li>*Lease Prices are based on a 36 month lease</li>
       <li>*All shipping is UPS ground service unless otherwise requested</li>
      </ul>
     </Container>
    </Grid>


  </Grid>
  )
}

export default Camcorders