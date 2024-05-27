import { Grid, Typography, Container, Button, Link } from "@mui/material";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NexioNxAmpImage from "../assets/images/NexioNxAmpImage.png";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import AOS from "aos";
const NexioNxAmp = () => {
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
                  <img src={NexioNxAmpImage} alt="" />
                </div>
              </Col>
              <Col xs="6">
                <div className="innerContent">
                  <h3 className="sec-head">Harris NEXIO NX AMP 3801 HDI</h3>
                  <p className="para">
                    <strong>Equipment Description:</strong> Fair Condition -
                    Broadcast video server integrated with 8SD or 4 HD channels,
                    with channelView option and 4TB RAID
                  </p>
                  <p className="para">
                    <strong>Equipment Description:</strong> Fair Condition -
                    Broadcast video server integrated with 8SD or 4 HD channels,
                    with channelView option and 4TB RAID
                  </p>
                  <p className="price">$4,562.28</p>
                  <p className="del">
                    <del>$4,662.28</del>
                  </p>

                  <div className="meta">
                    <div className="category">
                      in <strong>Computers & Accessories</strong>
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
                    <Link href="/Enquiry" >Send Enquiry</Link>
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
                  <h3 className="sec-head">Equipment Details</h3>
                  <p className="para">
                    Broadcast video server integrated with 4 HD channels, with
                    channelView option.
                  </p>
                  <p className="para">30 days limited warranty</p>

                  <p>
                    <strong>Detail: AMP Gen 5</strong>
                  </p>
                  <p className="para">
                    <ul>
                      <li>
                        <FaRegCircleDot />
                        2x AMD 2425 (6 core) CPU (12 cores total)
                      </li>
                      <li>
                        <FaRegCircleDot />
                        16 GB RAM
                      </li>
                      <li>
                        <FaRegCircleDot />
                        8x500 GB Media drives 4TB (RAID3 3.5TB available)
                      </li>
                      <li>
                        <FaRegCircleDot />
                        120GB SSD System drive (non mirrored)
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>SW: Release 7.0</strong>
                  </p>
                  <p className="para">
                  <ul>
<li> <FaRegCircleDot />SLK (software license keys):</li>
<li> <FaRegCircleDot />4CH HD (1080i)</li>
<li> <FaRegCircleDot />ChannelView</li>
<li> <FaRegCircleDot />Unit can be upgraded from 4TB to 8 or 16TB media storage.</li>
</ul>
                  </p>
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
                  NEXIO AMPTM Generation 5 integrated storage server.
                  </p>
                  <p className="para">NEXIO AMPTM Generation 5 integrated storage server.

NEXIO AMP is an award winning broadcast video server integrated with SD and HD
I/O, “agile” software-based codecs, high performance IT connectivity, and access to NEXIO's shared storage system via NEXIO's RAIDsoftTM software RAID controller.

NEXIO AMP is software configurable, and uses software codec technology to
encode and decode HD and SD content. NEXIO AMP supports real-time I/O and
redundant network interfaces.

Option included: NEXIO AMP Channelview Optional software that provides multiviewer I/O monitoring, enabling up to two NEXIO AMP inputs and four NEXIO AMP outputs to be viewed in real time on a computer monitor.</p>

                  <p>
                    <strong>Model: NXAM3801HDI</strong>
                  </p>
                  <p className="para">Detail: AMP Gen 5</p>
                  <p className="para">
                  <ul>
<li> <FaRegCircleDot />2x AMD 2425 (6 core) CPU (12 cores total)</li>
<li> <FaRegCircleDot />16 GB RAM</li>
<li> <FaRegCircleDot />8x500 GB Media drives 4TB (RAID3 3.5TB available)</li>
<li> <FaRegCircleDot />120GB SSD System drive (non mirrored)</li>
</ul>
                  </p>
                  <p>
                    <strong>SW: Release 7.0</strong>
                  </p>
                  <p className="para">
                  <ul>
<li> <FaRegCircleDot />SLK (software license keys):</li>
<li> <FaRegCircleDot />4CH HD (1080i)</li>
<li> <FaRegCircleDot />ChannelView</li>
<li> <FaRegCircleDot />Unit can be upgraded to 8 or 16TB media storage</li>
</ul>
                  </p>
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
                  <h3 className="sec-head">Features:</h3>
                  <p className="para">
                  The following list outlines some of the key features of NEXIO AMP:
                  </p>
                  
                
                  <p className="para">
                  <ul>
<li> <FaRegCircleDot />3RU form factor</li>
<li> <FaRegCircleDot />Two Six-Core AMD OpteronTM 64-bit processors</li>
<li> <FaRegCircleDot />Dual mirrored boot drives</li>
<li> <FaRegCircleDot />Dual hot-swappable power supplies</li>
<li> <FaRegCircleDot />USB ports on the front and rear of the chassis</li>
<li> <FaRegCircleDot />10/100/1000BaseT Ethernet ports</li>
<li> <FaRegCircleDot />Software-based codecs for coding and decoding SD and HD media</li>
<li> <FaRegCircleDot />Supports up to 8 SD channels, or up to 4 HD channels (with software license key)</li>
<li> <FaRegCircleDot />Supports SD (525i, 625i) and HD (1080i, 1080p, 720p) content on the same chassis</li>
<li> <FaRegCircleDot />Supports SDI (SMPTE-259M) and AES/EBU interfaces</li>
</ul>
                  </p>
                  
                 
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
                  <h3 className="sec-head">NEXIO AMP:</h3>
                  <p className="para">
                  The following list outlines some of the key features of NEXIO AMP:
                  </p>
                  
                
                  <p className="para">
                  <ul>
<li> <FaRegCircleDot />ChannelView</li>
<li> <FaRegCircleDot />Optional software that provides multiviewer I/O monitoring, enabling up to two NEXIO AMP inputs and four NEXIO AMP outputs to be viewed in real time on a computer monitor.</li>
<li> <FaRegCircleDot />NEXIO AMP Logo Optional software that enables the display of up to 4 layers of static or animated logo graphics per video output.</li>
<li> <FaRegCircleDot />Requires NEXIO AMP Channel View.</li>
<li> <FaRegCircleDot />NEXIO Track</li>
</ul>
                  </p>
                  
                 
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
                  <h3 className="sec-head">Router</h3>
                  <p className="para">
                  Optional software for NEXIO Remote and NXOS that

controls the routing of audio on ingest, the addition of

external audio and closed captions to stored media, and

audio routing rules on playout for multilingual broadcasts.
                  </p>
                  
                
                  
                  
                 
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
                  <h3 className="sec-head">Application Description</h3>
                  <p className="para">
                  Optional software for NEXIO Remote and NXOS that

controls the routing of audio on ingest, the addition of

external audio and closed captions to stored media, and

audio routing rules on playout for multilingual broadcasts.
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

export default NexioNxAmp;
