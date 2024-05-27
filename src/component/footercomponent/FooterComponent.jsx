import { Container, Grid, List } from "@mui/material";
import React from "react";
import { Typography, Button } from "@mui/material";
import { PiWechatLogoLight } from "react-icons/pi";
import ftimage1 from "../../assets/images/ftimg1.png"
import ftimage2 from "../../assets/images/ftimg2.png"
import ftimage3 from "../../assets/images/ftimg3.png"
import {Link} from "react-router-dom"
const FooterComponent = () => {
  return (
    <Grid>
      <Grid id="footer">
        <Grid id="footer-top">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Grid id="ft-clm">
                  <Typography variant="body1">Contact Us</Typography>
                  <Grid id="iconBox" mt={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <PiWechatLogoLight />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2">Contact Us</Typography>
                        <Typography variant="body1">
                        suzy@thebroadcaststore.co 
                        
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <ul>
                    <li>
                      <Link to={'/about'}>About BroadcastStore.co</Link>
                    </li>
                    <li>
                      <Link to={"/locations"}>Locations</Link>
                    </li>
                    <li>
                      <Link to={"/policies"}>BroadcastStore.co Policies</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm" className="ft-clm-2">
                  <Typography variant="body1">Site Links</Typography>
                  <ul>
                    <li>
                      <Link to={"/"}>Sell Equipment</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Request Equipment</Link>
                    </li>
                    <li>
                      <Link to={"/repairservice"}>Repair & Service</Link>
                    </li>
                    <li>
                      <Link to={"/"}>System Integration</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm">
                  <Typography variant="body1">Services</Typography>
                  <ul>
                    <li>
                      <Link to={"/"}>Customer Feedback</Link>
                    </li>
                    <li>
                      <Link to={"/request-a-call"}>Request A Call</Link>
                    </li>
                    <li>
                      <Link to={"/Financing"}>Financing</Link>
                    </li>
                    <li>
                      <Link to={"/shipping"}>Shipping Information</Link>
                      
                    </li>
                    
                  </ul>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid id="ft-clm">
                  <Typography variant="body1">Contact</Typography>
                  <ul>
                    <li>
                      <Link to={"/"}>Shop BroadcastStore.co</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Monthly Specials</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid id="footer-bottom">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Grid id="ft-btm">
                  <Typography variant="body1">BETALINGSMEtoder</Typography>
                  <img src={ftimage1} alt="" srcset="" />
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid id="ft-btm">
                  <Typography variant="body1">LEVERING</Typography>
                  <img src={ftimage2} alt="" srcset="" />
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid id="ft-btm">
                  <Typography variant="body1">CERTIFICERING</Typography>
                  <img src={ftimage3} alt="" srcset="" />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
