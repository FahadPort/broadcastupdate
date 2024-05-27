import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import goal from "../assets/images/goal.png";
import media from "../assets/images/media.png";
import production from "../assets/images/abt-product.jpg";
import equipment from "../assets/images/equipment.png";
import system from "../assets/images/system.png";
import sale from "../assets/images/sale.png";
import AOS from 'aos';
import "aos/dist/aos.css"
import {Link} from "react-router-dom"
import { FaRegCircleDot } from "react-icons/fa6";


import VideoTapeCaptureimg from "../assets/images/VideoTapeCapture.jpeg"
import AudioTapeCaptureimg from "../assets/images/AudioTapeCapture.jpg"
import RestorationServicesimg from "../assets/images/RestorationServices.png"
import EncodingServicesimg from "../assets/images/EncodingServices.jpg"
import PhotoScanningimg from "../assets/images/PhotoScanning.webp"
import FilmTransferimg from "../assets/images/FilmTransfer.png"
import PhotoScanningimg02 from "../assets/images/PhotoScanning02.jpg"
import HomeVideoMediaimg from "../assets/images/HomeVideoMedia.jpg"
import HighestQualityimg from "../assets/images/HighestQuality.jpg"
import whyusimg from "../assets/images/whyus.jpg"




const LargeScaleMediaMigration = () => {

    useEffect(()=>{
        AOS.init({duration:2000});
        window.scrollTo(0, 0);
    
    }, [])


  return (
    <Grid>
    <div id="about-ban" className="innerban">
      <Container>
        <div className="abtcontent" >
          <h1 className="heading" data-aos="fade-up">Large-Scale Media Migration</h1><br />
          <h3  className="sub-heading" data-aos="fade-up">Multimedia Services</h3>
    
        </div>
        

      </Container>
    </div>
   
    <div id="abt-text" className="flx-img">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Video Tape Capture
                </h3>
                <p className="para">
                We capture from legacy video tape formats in any standard to a digital
video file and deliver on a hard drive, via the internet, or disc.

                </p>
                <p className="para"><span className="bold">Standards:</span> PAL, NTSC, HD, 4K</p>
                <p className="para"><span className="bold">Formats:</span> D1, D2, D3, D5, Digital Betacam, Betacam SP, Betamax
HDcam, HDcamSR, DVcam, miniDV, HDVcam, DVCpro,
1” Open Reel, 3⁄4” Umatic, Betamax, Super Betamax, 8mm,
Super 8, Hi8, VHS, S-VHS, C-VHS
</p>
<p className="para"><span className="bold">Service:</span> We capture to uncompressed video file formats (MOV, AVI)
and then transcode/process video to the desired outputformat.
If there are problems with your Master (due to age or storage),The Broadcast store will evaluate the issue, give a recommendation, and provide a solution to
capture your content. The Broadcast store maintains all our equipment to
manufacture specifications and we carry the top equipment brands
available to provide the best video quality possible.
</p>
               
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={VideoTapeCaptureimg} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
          <Col xs="6" gap-2>
              <div className="image">
                <img src={AudioTapeCaptureimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">
                Audio Tape Capture: Up to 192khz
                </h3>
                <p className="para"><span className="bold">Formats: </span>: DAT, DA88, ADAT, Cassette, Nagra, 1⁄4”, 1⁄2” and 2” (24
Track) Open Reels, LP Records
</p>
                <p className="para"><span className="bold">Service: </span>We capture to uncompressed audio file formats (WAV, FLAC)
and transcode/process audio to the desired output format.
Let us help get your audio tapes converted to a digital format that you’ll be
able to enjoy for a lifetime. We can transfer nearly all audio tape formats.
</p>
          
              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text" className="flx-img">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Restoration Services:
                </h3>
                <p className="para">As an all-around video tape service company, the broadcast store provides an array of technical know-how, with a wide range of techniques and equipment, to overcome tape master aging, damaged tape elements, and poor storage issues. Here are some of the problems we encounter. Shedding, stiction, tracking, tape guides, tape pack, tape creases, weak rf, improper noise reduction, low audio levels. The broadcast store utilizes 30 years of experience and several techniques such as, tape baking, rti evaluator / cleaner / scraper, rebuilding cassette shells (lubricating/replacing parts & guides, cleaning debris).
 </p>
 <p className="para">Hand cleaning tapes, and repacking tapes by hand. Also, if necessary, we
will load a tape into a surrogate shell and capture it in sections then edit it
into a complete file ready for viewing or mastering work.</p>
               
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={RestorationServicesimg} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
          <Col xs="6" gap-2>
              <div className="image">
                <img src={EncodingServicesimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Encoding Services
                </h3>
                <p className="para">We have full-service encoding/transcoding capabilities and support a vast
array of formats, codecs and file containers. These include mpeg-ts,
prores, hevc/h.265, avc/h.264, vp9, mxf, avc-intra/long-gop,
jpeg2000, omneon, webm, mov, dnxhd, xdcam and many more. We
can handle your dolby vision, hdr10, hdr10+ and hlg projects. We
also support all frame rates, frame sizes and bitrates, as well as interlaced
content.</p>
              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text" className="flx-img">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">
                Other Services
                </h3>
                <p className="para">
                <ul>
<li><FaRegCircleDot/>Up-resing/Cross-converting: PAL to NTSC & NTSC to HD/4K</li>
<li><FaRegCircleDot/>LTO Data Archive and Retrieval</li>
<li><FaRegCircleDot/>Iconik Platform Onboarding and Management</li>
<li><FaRegCircleDot/>Transcription Services</li>
<li><FaRegCircleDot/>Closed Caption file creation</li>
<li><FaRegCircleDot/>Metadata Services</li>
<li><FaRegCircleDot/>AWS Archiving</li>
<li><FaRegCircleDot/>Photo Scanning</li>
<li><FaRegCircleDot/>VOD Platform Onboarding: Amazon, Hulu, Tubi, etc.</li>
</ul>
</p>
               
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={PhotoScanningimg} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
          <Col xs="6" gap-2>
              <div className="image">
                <img src={FilmTransferimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Film Transfer
                </h3>
                <p className="para">Your super 8, 8mm film is your history and must be preserved. The broadcast store
can take all your reels of unseen print film, and safely make high-definition
digital video files of your memories. We hand-clean all film and enhance
the video quality to revitalize the film images and bring them back to life.</p>
              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>


    <div id="abt-text" className="flx-img">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">
                Photo Scanning
                </h3>
                <p className="para">
                Capture your photos and photo albums into high-quality digital files that can
be kept forever and shared with family and friends. All photo scanning is
completed by hand on the highest quality scanners that will deliver quality
digital files.

</p>
               
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={PhotoScanningimg02} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
          <Col xs="6" gap-2>
              <div className="image">
                <img src={HomeVideoMediaimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Home Video Media
                </h3>
                <p className="para">
Transfer your old videos on tape to digital formats, we will transfer your
videos onto drives or discs, where they will be permanently archived. We
convert all types of video tape formats to digital files where you can store
and preserve them for the future.
</p>
<p className="para">Our video transfer service is also affordable so that you can preserve your
memories at a reasonable cost.
</p>
              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>

    <div id="abt-text" className="flx-img">
      <Container>
        <div className="headcontent">
          <Row>
            <Col xs="6">
              <div className="innerContent">
                <h3 className="sec-head">
                Highest Quality
                </h3>
                <p className="para">
                Our technicians provide a high level of service with attention to detail. We
capture all tapes in uncompressed file format and work down from
there.....not just the standard MP4 compressed files you find at the Home
Video websites. Our technicians take personal care of your media, and if
something goes wrong, we will get it diagnosed and fixed, our years of
experience give us the technical know-how to complete your project.


</p>
               
              </div>
            </Col>
            <Col xs="6">
              <div className="image">
                <img src={HighestQualityimg} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div id="abt-text">
      <Container>
        <div className="headcontent">
          <Row>
          <Col xs="6" gap-2>
              <div className="image">
                <img src={whyusimg} alt="" />
              </div>
            </Col>
            <Col xs="6">
              <div className="innerContent" >
                <h3 className="sec-head">
                Why The Broadcast store?
                </h3>
                <p className="para">
                Our technical staff and upper management have 30-plus years in the Post
Production industry. We pride ourselves on the quality of work we do and
we strive to exceed our client's expectations. Our custome  rs enjoy doing
business with us because of our friendly, professional and knowledgeable technicians.

</p>

              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
   






  </Grid>
  )
}

export default LargeScaleMediaMigration