import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import canon2 from "../../assets/images/Canon2.avif";

import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";
const CanonXL2 = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    window.scrollTo(0, 0);
}, [])
  return (
    <Grid>
      <div id="product">
        <Container>
          <div className="pro-inner">
            <Row>
              <Col xs="6">
                <div className="image">
                  <img src={canon2} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Canon XL2</h3>
                  <p className="para">3 CCD Digital Video Camera</p>

                  <p className="price">$4,985.20</p>

                  <div className="meta">
                    <div className="category">
                      in <strong>Videotape</strong>
                    </div>
                    <div className="rating">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                    </div>
                  </div>
                  <Button className="theme-btn">
                    <Link href="/Enquiry">Send Enquiry</Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div id="pro-text">
        <Container>
          <div className="headcontent">
            <Row>
              <Col xs="12">
                <div className="pro-inner">
                  <h3 className="sec-head">Model Details</h3>
                  <p className="para">
                    The Canon XL2 allows you to capture images closer to the
                    finished product than ever before. Work that previously was
                    limited to post-production can be simply and effectively
                    accomplished in the field, in the camcorder.
                  </p>

                  <p className="para">
                    An Open Architecture philosophy, performance found only in
                    much more expensive video cameras, Total Image Control and
                    the solid foundation of Genuine Canon Optics,
                    interchangeable lens capability and superb Canon image
                    processing quality are united in the XL2.
                  </p>

                  <p className="para">
                    The XL2 brings a host of performance and convenience
                    features to this class of video camcorder- benefits that
                    can't be found in this combination on other high-end video
                    cameras. They include: Canon Super Range Optical Image
                    Stabilization in the standard lens; dual aspect ratios;
                    various frame rate capabilities; image gamma and detail
                    controls; skin detail control and convertible LCD display
                    among others.
                  </p>

                  <p className="para">
                    Unprecedented image control coordination between two XL2
                    cameras, remote computer camera control and direct video
                    recording to computer are just a part of the capabilities of
                    the XL2. Never before has so much creative power been put in
                    the hands of the film maker, video artist, and corporate and
                    event videographer.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">
                    16:9 and 4:3 aspect ratio shooting formats
                  </h3>
                  <p className="para">
                    With an increasing consumer shift towards widescreen TVs
                    that deliver the full width of film-based theatrical movies,
                    plus the resulting need for productions in the 16:9 aspect
                    ratio, Canon's XL2 offers both the standard 4:3 aspect ratio
                    and the 16:9 widescreen TV aspect ratio. Representing the
                    ratio of the screen width to its height, the 4:3 aspect
                    ratio is that of the common TV screen, and is the most
                    commonly used aspect ratio in broadcasting today.
                  </p>
                  <p className="para">
                    The 16:9 aspect ratio is the more common aspect ratio for
                    film-based movies, and produces full screen playback on
                    widescreen TVs. 16:9 also is the world standard aspect ratio
                    for HDTV.
                  </p>
                  <p className="para">
                    By offering a camcorder that is able to be switched between
                    the two aspect ratios, Canon opens the door for multiple
                    production options with the same camera -- the XL2.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">Variable frame rates</h3>
                  <p className="para">
                    60i / 30p / 24p (2:3 and 2:3:3:2 both with 1/48th second
                    shutter speed) frame rates are available in the XL2.
                  </p>
                  <p className="para">
                    The demands being made on the video production community to
                    be able to provide solutions under a multitude of different
                    scenarios have been met with the Canon XL2. It delivers 60i,
                    30p, 24p (2:3 and 2:3:3:2) frame rates. 60i (interlaced) is
                    the standard video frame rate that has been in use for
                    decades; it's what you see on your home TV, and is captured
                    by handheld consumer camcorders. Progressive
                    (non-interlaced) scanning mimics a film camera's
                    frame-by-frame image capture. 30p, or 30-frame progressive,
                    a non-interlaced format, produces video at the rate of 30
                    frames per second, delivering spectacular clarity for high
                    speed subjects. Shooting in 30P mode offers video with no
                    interlace artifacts.
                  </p>
                  <p className="para">
                    The 24p frame rate, for example, is now widely adopted by
                    those planning on transferring the video signal to film. But
                    film/videomakers turn to 24p for the "cine" look even if
                    their productions are not going to be transferred to film,
                    simply because of the "look" of the frame rate. Also just as
                    important as 24p, is the shutter speed of 1/48th per second.
                    This is the standard shutter speed that movie cameras use.
                    The combination of 24p frame rate and 1/48th perfectly mimic
                    a motion film camera.
                  </p>
                  <p className="para">
                    24p with 2:3 pulldown produces video with the look and
                    motion of film. (24p, used in conjunction with a cine gamma
                    curve on the XL2, produces images that have similar tonal
                    characteristics as film. This mode is used when the finished
                    video will be shown on television. 24p with 2:3:3:2
                    pulldown, is used when the video is going to be transferred
                    to film. The 2:3:3:2 pulldown allows to editing software to
                    extract true 24 frames a second.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">Customizable Cine Look</h3>
                  <p className="para">
                    With "big name" and not so well known producers turning to
                    digital video for their "films," increasing emphasis has
                    been placed on delivering the cine look to video. The Canon
                    XL2 offers its users the ability to customize their video
                    recordings using a number of variables: color matrix, gamma,
                    knee, black stretch, vertical detail, coring, sharpness,
                    noise reduction, color gain, hue, and film grain. Each one
                    of these can be adjusted independently, thereby giving you
                    precise control over the "film-like" appearance of your
                    video. Because Canon utilizes a 12 bit DSP (Digital Signal
                    Processor) maximum image quality is preserved.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">Total Image Control</h3>
                  <p className="para">
                    Professional videographers need to have control over the
                    set-up of their camcorder. From complete automatic setting
                    to fine adjustments of Master RGB, Setup Level, Master
                    Pedestal, Skin Tone Detail, Program AE, Gain, AE Shift and
                    Lock, White Balance, Shutter Speeds, Aperture Control, Zebra
                    Patterns Clear Scan and Interval Timer the XL2 has the total
                    image control that professionals need.Because Canon utilizes
                    a 12 bit DSP (Digital Signal Processor) maximum image
                    quality is preserved.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">
                    XL Mount Interchangeable Lens System
                  </h3>
                  <p className="para">
                    A key feature of the Canon XL-series camcorders (and the
                    only MiniDV format camcorders with this feature), is the XL
                    mount interchangeable lens system. Unlike other systems, the
                    XL2 offers users the ability to change lenses, whether from
                    within the XL series of video lenses, third-party cine
                    lenses, or Canon's extensive range of photo lenses. This not
                    only makes the XL2 a far more versatile camera, it also
                    opens up incredible opportunities for the XL2 user.
                  </p>
                  <p className="para">
                    Within the Canon XL system alone there are four lenses: the
                    new 20x OIS, 16x OIS, 16x Manual, and 3x Wide. Then, using
                    an XL system adapter, the entire range of Canon photo lenses
                    is available -- a tremendous boon to those producing
                    wildlife and nature documentaries, for example. Other
                    companies also offer a variety of specialty cine lenses that
                    can be used on the XL2.
                  </p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">Flourite Zoom Lens with Optical Image Stabilization
</h3>
                  <p className="para">Canon is known worldwide for its optics -- its broadcast and photo lenses, for example. The new 20x Professional L-Series Fluorite optical zoom lens for the XL2 is an outstanding lens, using fluorite to deliver outstanding resolution, contrast and color reproduction. In addition, the lens features Canon's superb optical stabilization system. This corrects camera shake instantly and, with its SuperRange feedback system, even catches low-frequency vibrations, refining the movement of the vari-angle prism, delivering the most advanced optical image stabilization available today.

</p>
                
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">SMPTE time code
</h3>
                  <p className="para">The Canon XL2 offers many on-camera enhancements to help capture high-quality footage, including features commonly found on broadcast camcorders. Among these is the placement of a SMPTE time code on the tape. SMPTE (Society of Motion Picture and Television Engineers) time code is a digital signal that assigns a number to every frame of video, representing hours, minutes, seconds, frames, plus some additional information. The SMPTE time code is used to identify a precise location on a video tape, a mainstay of professional editing allowing all tape and equipment to work together for precise editing.

</p>
                  <p className="para">You can choose Drop, Non-Drop, Rec Run and Free Run modes. Also provided is User bit settings, allowing the inclusion of reel number or other user data.

</p>
                  <p className="para">The XL2 also generates SMPTE color bars with 1 KHz tone (-12dB and -20dB). SMPTE color bars with tone are the standard method of setting up video and audio monitors and edit suites. By using industry standard color bars and tone, the XL2 fits in with all production equipment.

</p>
                </div>
                <div className="pro-inner">
                  <h3 className="sec-head">Custom Presets
</h3>
                  <p className="para">Three custom presets are provided on the XL2, and each can be assigned any one of a number of functions, accessible at the touch of a button, for faster and easier camera operation. Among the functions are: color gain, color phase, sharpness, setup level, V detail, color matrix, gamma, knee, black stretch, skin detail (hue, gain, area, Y level).

</p>
                  <p className="para">These custom presets can be transferred to another XL2, or to a computer (3rd party software required), using the IEEE1394 connection.

</p>
                
                </div>
                
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Grid>
  );
};

export default CanonXL2;
