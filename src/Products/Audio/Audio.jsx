import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import product02 from "../../assets/images/ctgr-img2.jpg";
import Midasimg from "../../assets/images/Midas.jpg";
import Clearcomimg from "../../assets/images/Clear-Com.png";
import LexiconPCM90img from "../../assets/images/LexiconPCM90.jpg";
import SONYPCM7040img from "../../assets/images/SONYPCM7040.jpg";


import SonyPCMR700img from "../../assets/images/SonyPCMR700.png"
import UREI1176img from "../../assets/images/UREI1176.png"
import Bryston3Bimg from "../../assets/images/Bryston3B.png"
import SoundcraftDeltaDLXAudioMixerimg from "../../assets/images/SoundcraftDeltaDLXAudioMixer.png"
import RevoxA77OpenReelimg from "../../assets/images/RevoxOpenReel.png"
import SonyTCOpenReelTrackimg from "../../assets/images/SonyOpenReel4Track.png"
import TEACA2300SDOpenReelimg from "../../assets/images/TEACOpenReel.png"
import AmpexAG440img from "../../assets/images/AmpexAG440.png"
import RanePEAudioFilterSetsimg from "../../assets/images/RaneAudioFilterSets.png"
import LynxHiloConverterSystemsimg from "../../assets/images/LynxHiloConverterSystems.png"
import TEACANDolbyNoiseReductionUnitimg from "../../assets/images/TEACAN180DolbyBNoiseReductionUnit.png"
import DenonDNMultiSourceCDPlayerimg from "../../assets/images/DenonDN300ZMultiSourceCDPlayer.png"
import TannoyLittleGoldMonitorimg from "../../assets/images/TannoyLittleGoldMonitor.png"
import UniversalAudioLNLimiterimg from "../../assets/images/UniversalAudio1176LNLimiter.png"
import Bryston3BAmplifierimg from "../../assets/images/Bryston3BAmplifier.png"
import FurmanARPROACLineRegulatorAimg from "../../assets/images/FurmanARPROACLineRegulatorA.png"
import FurmanARPROACLineRegulatorBimg from "../../assets/images/FurmanARPROACLineRegulatorb.png"
import WheatstoneD32img from "../../assets/images/Wheatstone-D-32.jpg"
import SSLC10040img from "../../assets/images/SSL-C100-40.webp"
import SonyPCM7030img from "../../assets/images/Sony-PCM7030.jpg"










const Audio = () => {

  const [title, setTitle] = useState("Professional Audio Devices - The Broadcast Store");
  const [description, setDescription] = useState("Broadcast Store offers a vast selection of new & used professional audio equipment. Find mics, mixers, speakers & more. Top brands, incredible prices!");

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
  //             Audio
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
  //                   <img src={product02} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                     The broadcast store 10,000 Beta or DigiBetacam video tapes
  //                   </Typography>
  //                   <p className="body">
  //                     SPECIAL OFFER: 10,000 Beta or DigiBetacam video tapes
  //                     digitized before the end of this year.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/broadcaststoreBeta"}>Read More</Link>
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
  //                   <img src={Midasimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO838457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Midas Audio Consoles</Typography>
  //                   <p className="body">
  //                     If you've run upscale live sound anytime in the past 40
  //                     years, then you know Midas's reputation for creating
  //                     top-quality.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Midas"}>Read More</Link>
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
  //                   <img src={Clearcomimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">
  //                     Clear-Com – Eclipse HX-Median
  //                   </Typography>
  //                   <p className="body">
  //                     The Eclipse HX-Median is a 6RU frame that houses two CPU.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Clearcom"}>Read More</Link>
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
  //                   <img src={LexiconPCM90img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Lexicon PCM 90</Typography>
  //                   <p className="body">
  //                     Lexicon PCM 90 comes with a built-in library of 250 reverb
  //                     and other effects that simulate realistic halls.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/LexiconPCM90"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>

  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SONYPCM7040img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PCM-7040</Typography>
  //                   <p className="body">
  //                     SPECIAL OFFER: 10,000 Beta or DigiBetacam video tapes
  //                     digitized before the end of this year.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SONYPCM7040"}>Read More</Link>
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
  //                   <img src={SonyPCMR700img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PCM-R700</Typography>
  //                   <p className="body">
  //                   Sony's ultimate professional Digital Audio Tape (DAT) recorders.

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPCMR700"}>Read More</Link>
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
  //                   <img src={UREI1176img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">UREI 1176</Typography>
  //                   <p className="body">
  //                   Legendary FET compression with tone and attitude — true to the original.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/UREI1176"}>Read More</Link>
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
  //                   <img src={Bryston3Bimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Bryston 3B</Typography>
  //                   <p className="body">
  //                   The Bryston 3B is a solid state power amplifier, made by Bryston in Canada. 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Bryston3B"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SoundcraftDeltaDLXAudioMixerimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Soundcraft Delta DLX Audio Mixer</Typography>
  //                   <p className="body">
  //                   For Sale Soundcraft Delta DLX in rackable chassis. 8 + 8 (A + B) input stereo Channels, 4 stereo busses, Master section and tape I/O.

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SoundcraftDeltaDLXAudioMixer"}>Read More</Link>
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
  //                   <img src={RevoxA77OpenReelimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Revox A77 1⁄4” Open Reel</Typography>
  //                   <p className="body">
  //                   Vintage Revox A77 Reel to Reel 3 Motor 2 Speed Tape Player & Recorder - Serviced

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/RevoxA77OpenReel"}>Read More</Link>
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
  //                   <img src={SonyTCOpenReelTrackimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony TC-854-4 1⁄4” Open Reel</Typography>
  //                   <p className="body">
  //                   Made in the 1970 by Sony in Japan. Tested and working. Rare 120V model too.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyTCOpenReelTrack"}>Read More</Link>
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
  //                   <img src={TEACA2300SDOpenReelimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">TEAC A-2300SD 1⁄4” Open Reel</Typography>
  //                   <p className="body">
  //                   Vintage TEAC A2300SD Reel to Reel just serviced
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/TEACA2300SDOpenReel"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={AmpexAG440img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Ampex AG-440</Typography>
  //                   <p className="body">
  //                   AMPEX AG-440 Tape Machine

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/AmpexAG440"}>Read More</Link>
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
  //                   <img src={RanePEAudioFilterSetsimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Rane PE-17 and_UREI 565 Audio Filter Sets</Typography>
  //                   <p className="body">
  //                   Rane PE 17 Home Equalizer

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/RanePEAudioFilterSets"}>Read More</Link>
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
  //                   <img src={LynxHiloConverterSystemsimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Lynx Hilo A/D D/A Converter Systems</Typography>
  //                   <p className="body">
  //                   Lynx HiLo A/D D/A Converter System.
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/LynxHiloConverterSystems"}>Read More</Link>
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
  //                   <img src={TEACANDolbyNoiseReductionUnitimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">TEAC AN-180 Dolby B Noise Reduction Unit</Typography>
  //                   <p className="body">
  //                   TEAC AN-180 DOLBY NOISE REDUCTION UNIT - TESTED AND WORKING
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/TEACANDolbyNoiseReductionUnit"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={DenonDNMultiSourceCDPlayerimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Denon DN-300Z MultiSource CD Player</Typography>
  //                   <p className="body">
  //                   Denon DN-300ZB multi-source player

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/DenonDNMultiSourceCDPlayer"}>Read More</Link>
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
  //                   <img src={TannoyLittleGoldMonitorimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Tannoy Little Gold Monitor</Typography>
  //                   <p className="body">
  //                   Tannoy LGM speakers, similarly to many other Tannoy designs,
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/TannoyLittleGoldMonitor"}>Read More</Link>
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
  //                   <img src={UniversalAudioLNLimiterimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Universal Audio 1176LN Limiter</Typography>
  //                   <p className="body">
  //                   Upon its release in 1967, the 1176 Limiting Amplifier became an instant classic
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/UniversalAudioLNLimiter"}>Read More</Link>
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
  //                   <img src={Bryston3BAmplifierimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Bryston 3B Amplifier</Typography>
  //                   <p className="body">
  //                   The Bryston 3B3 is dual-channel (stereo) amplifier designed for a wide range of medium to high …
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/Bryston3BAmplifier"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={FurmanARPROACLineRegulatorAimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Furman AR-PRO AC Line Regulator A</Typography>
  //                   <p className="body">
  //                   The AR-PRO AC Line Voltage Regulator is intended to protect computer, 
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/FurmanARPROACLineRegulatorA"}>Read More</Link>
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
  //                   <img src={FurmanARPROACLineRegulatorBimg} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Furman AR-PRO AC Line Regulator B</Typography>
  //                   <p className="body">
  //                   Furman AR-1220 AC Line Voltage Regulator

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/FurmanARPROACLineRegulatorB"}>Read More</Link>
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
  //                   <img src={SSLC10040img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">SSL C100 40 Fader Channel Mixing Console </Typography>
  //                   <p className="body">
  //                   This C100 was built in 2004 and it is still in excellent shape after only 

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SSLC10040"}>Read More</Link>
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
  //                   <img src={WheatstoneD32img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Wheatstone D-32 Digital Audio Console W 2 Power Supplies, Gibraltar Engine </Typography>
  //                   <p className="body">
  //                   This listing is for a Wheatstone D-32 Digital Audio Console

  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/WheatstoneD32"}>Read More</Link>
  //                   </Button>
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
          
  //         </Grid>
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <Grid className="ftrd-slide">
  //               <Grid className="ftrd-slide-blk">
  //                 <Grid className="prod-img">
  //                   <Typography variant="h6">-20%</Typography>
  //                   <img src={SonyPCM7030img} alt="" />
  //                 </Grid>
  //                 <Grid className="pro-disp">
  //                   <Grid className="prod-sku">
  //                     <Typography variant="body">SKU#</Typography>
  //                     <Typography variant="body">MO818457</Typography>
  //                   </Grid>
  //                   <Typography variant="h5">Sony PCM7030</Typography>
  //                   <p className="body">
  //                   Sony PCM-7030 DAT Digital Audio Player
  //                   </p>

  //                   <Button className="theme-btn">
  //                     <Link to={"/SonyPCM7030"}>Read More</Link>
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

export default Audio;
