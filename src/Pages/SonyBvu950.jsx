import React, { useEffect } from "react";
import { Grid, Typography, Container, Button } from "@mui/material";

import sonybvu950 from "../assets/images/sonybvu950.jpg";
import downloadpdf from "../assets/images/download-pdf.png"; 


import { Link } from "react-router-dom";

const SonyBvu950 = () => {
  return (
    <Grid>
    
      <div id="about-ban" className="innerban">
        <Container>
          <div className="abtcontent" >
            <h1 className="heading">3/4 U-Matic VTR Editor Sony BVU-950</h1>
          </div>
        </Container>
      </div>
      

      <Grid className="prod-disp-detail">
       <Container>
       <Grid className="row-flx" container spacing={2}>

       <Grid item xs={6}>
        <Grid className="product-blk-img">
         <img src={sonybvu950} alt="" />
        </Grid>
       </Grid>
       <Grid item xs={6}>
        <Grid className="product-blk">
         <Typography variant="h3">Model Details</Typography>
         <p>Sony BVU-950 3/4" Edit recorder with Time Code.
         Features:</p>
         <ul>
          <li>SP U-Matic technology</li>
          <li>340 lines of horizontal resolution</li>
          <li>Built-in editing facility</li>
          <li>Shuttle speeds from still, 1/30 to X10 normal</li>
          <li>Type C Dolby NR</li>
          <li>Built-in time code generator, reader</li>
          <li>Vertical interval time code (VITC) or on third channel</li>
          <li>Internal BKU-901 TBC ( Optional)</li>
          <li>Built-in editing facility when 9-pin is connected to another BVU-950 also dynamic tracking and will help with transfer of marginally recorded tapes.</li>
         </ul>
         <p>Optional: BKU-901A Time Base Corrector option not included.</p>
         <p>BKU-902Plug in Digital Noise Reducer option not included.</p>
         <p>With BKU-901A dramatically improve S/N ratio up to 6db.</p>
         <Button className="theme-btn">
                  <Link href="/Enquiry" >Send Enquiry</Link>
                </Button>
        </Grid>
       </Grid>

       </Grid>
       </Container>
      </Grid>

      {/* <Grid className="pdf-sec">
       <Container>
        <Typography variant="h4">Additional Information</Typography>
        <Grid container spacing={3}>
        
        <Grid className="pdf-blk" item xs>
         <Typography variant="h6">5243</Typography>
         <Link to={'/'} download><img src={downloadpdf} alt="" /></Link>
        </Grid>
        <Grid className="pdf-blk" item xs>
        <Typography variant="h6">sony bvu 950</Typography>
         <Link to={'/'} download><img src={downloadpdf} alt="" /></Link>
        </Grid>
        <Grid className="pdf-blk" item xs>
        <Typography variant="h6">BVU 950 NTSC 8524</Typography>
         <Link to={'/'} download><img src={downloadpdf} alt="" /></Link>
        </Grid>

        </Grid>
       </Container>
      </Grid> */}

    </Grid>
  )
}

export default SonyBvu950