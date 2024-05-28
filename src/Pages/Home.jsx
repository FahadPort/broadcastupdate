import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import {
  Grid,
  Typography,
  Container,
  Button,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headset01 from "../assets/images/hero-img.png";
import bannerimg from "../assets/images/ubiquiti-transparent1.png";
import bannerimg2 from "../assets/images/89161553346861.png";
import productimg from "../assets/images/product-img.png";
import product01 from "../assets/images/ctgr-img1.jpg";
import product02 from "../assets/images/ctgr-img2.jpg";
import product03 from "../assets/images/ctgr-img3.jpg";
import product04 from "../assets/images/ctgr-img4.jpg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import man from "../assets/images/pexels-photo.png";
import { gsap } from "gsap";
import items from "../assets/images/items.png";
import TextField from "@mui/material/TextField";
import HDK79EC2 from "../assets/images/HDK-79EC2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import JVCAV from "../assets/images/JVCAV.jpg";
import JVCAVPRO from "../assets/images/JVCAVPRO.jpg";
import JVCDV from "../assets/images/JVCDV.jpg";
import JVCKV from "../assets/images/JVCKV.jpg";
import NexioNxAmpImage from "../assets/images/NexioNxAmpImage.png";
import canon1 from "../assets/images/Canon1.jpg";
import canon2 from "../assets/images/Canon2.avif";
import canon3 from "../assets/images/Canon3.avif";
import canon4 from "../assets/images/Canon4.jpg";
import sony from "../assets/images/sony.png";
import KOMODO from "../assets/images/KOMODO.png";
import Manfrotto from "../assets/images/Manfrotto.png";
import Steadicam from "../assets/images/Steadicam.png";
import AOS from "aos";
import cameraabt from "../assets/images/cameraabt.png"




// icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]); // Define products state
  const [selectedCategory, setSelectedCategory] = useState(null); // Define selectedCategory state
  const location = useLocation();

  const photoRef = useRef(null);

  const initialState = () => {
    console.log("initial state");
    // navigate('/');
    setFeaturedProducts([]);
    setSelectedProduct(null);
    setProducts(null);
    setSelectedCategory(null);
  };
  useEffect(() => {
    initialState();
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOO");
    axios
      .get("https://thebroadcaststore.co/admins/api/all-feature-products")
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []); // Empty dependency array to run once on component mount

  const handleProductSelect = (product, event) => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedProduct(selectedProduct === product ? null : product);
    window.history.pushState(null, null, `/${product.slug}`);
  };

  useEffect(() => {
    // Clear products and selected product when navigating away from the current page
    setProducts([]);
    setSelectedProduct(null);
    setSelectedCategory(null); // Clear selected category when navigating away
  }, [location.pathname]);

  const [title, setTitle] = useState(
    "The BroadCast Store - Buy Professional Equipment for Video Production"
  );
  const [description, setDescription] = useState(
    "Broadcast Store provides a wide selection of professional audiovisual equipment at competitive prices, allowing customers to get top-notch service department."
  );

  useEffect(() => {
    document.title = title;
    document
      .getElementById("meta-description")
      .setAttribute("content", description);
  }, [title, description]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("London");
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      gsap.to(photoRef.current, {
        duration: 0.6,
        rotationY: 5 * x,
        rotationX: 5 * y,
        ease: "power1.out",
        transformPerspective: 500,
        transformOrigin: "center",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var logos = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };

  return (
    <Grid>
      {!selectedProduct && (
        <>
          {/* <Grid className="banner">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid className="prod-banner">
                  <Grid className="prod-banner-txt">
                    <Typography variant="h1">
                      Professional WiFi at your business?
                    </Typography>
                    <Typography variant="p">
                      Wireless network and internet connections are becoming increasingly important.
                    </Typography>
                    <Button className="theme-btn">
                      <Link to={"/Wifi"}>Read More</Link>
                    </Button>
                  </Grid>
                  <img src={bannerimg} alt="" />
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid className="prod-banner2">
                  <Grid className="prod-banner-txt2">
                    <Typography variant="h2">
                      Google Chromecast With Google TV{" "}
                    </Typography>
                    <img src={bannerimg2} alt="" />
                    <Typography variant="h3">$123.00</Typography>
                  </Grid>
                  <Button>
                    <Link to={"/Chromecast"}>
                      <FaArrowRight />
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid> */}

          <div id="hero">
            <Container>
              <div className="hero-content">
                <div className="head">
                  <h1>CAMERA</h1>
                </div>
                <div className="image wrapper">
                  <img
                    className="photo"
                    ref={photoRef}
                    src={headset01}
                    alt=""
                  />
                </div>
                <div className="head-stroke">
                  <h1 data-text="HEADSET">CAMERA</h1>
                </div>
              </div>
            </Container>
          </div>

          <div id="About">
            <div className="abt-content">
              <Row>
                <Col xs={7}>
                  <div className="inner-column content">
                    <h2>About</h2>
                    <h3>New and Used Professional Equipment.</h3>
                    <p>
                      BroadcastStore or BroadcastStore.co has an extensive
                      inventory of new & used professional audiovisual equipment
                      available at a discounted price to our customers.
                    </p>
                    <p>
                      BroadcastStore.co is the premiere site to list consign, or
                      trade your equipment. Whether rotating out your existing
                      equipment, or clearing out your storage area,
                      BroadcastStore.co can assist you in securing maximum value
                      on your investments.
                    </p>
                    <p>
                      Our service department is second to none. We service all
                      makes and models; digital, analog and HD.
                    </p>
                    <Button className="lrn-more">
                      <Link to={"#"}>learn More</Link>
                    </Button>
                  </div>
                </Col>
                <Col xs={5}>
                  <div className="inner-column">
                    <img src={cameraabt}/>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <Grid className="ftured-sec">
            <Container>
              <Grid className="head-title">
                <Typography variant="h2">Featured Products</Typography>
              </Grid>
              <Slider {...settings}>
                {featuredProducts.map((product) => (
                  <Grid className="ftrd-slide" key={product.id}>
                    <Grid className="ftrd-slide-blk">
                      <Grid className="prod-img">
                        <Typography variant="h6">-20%</Typography>
                        <img
                          src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
                          alt=""
                        />
                      </Grid>
                      <Grid className="pro-disp">
                        <Grid className="prod-sku">
                          <Typography variant="body">SKU#</Typography>
                          <Typography variant="body">{product.sku}</Typography>
                        </Grid>
                        <Typography variant="h5">{product.title}</Typography>
                        <p className="body">{product.short_desc}</p>
                        <Typography variant="h6">${product.price}</Typography>
                        <Button className="theme-btn">
                          <Link
                            to={`/${product.slug}`}
                            onClick={(event) =>
                              handleProductSelect(product, event)
                            }
                            className="product-link" // Add a class for styling
                          >
                            READ MORE
                          </Link>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Slider>
            </Container>
          </Grid>

          <Grid className="partners-sec">
            <Slider {...logos}>
              <Grid className="slide-logo">
                <img src={logo1} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo2} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo3} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo4} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo5} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo6} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo7} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo8} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo9} alt="" />
              </Grid>
              <Grid className="slide-logo">
                <img src={logo1} alt="" />
              </Grid>
            </Slider>
          </Grid>

          <Grid className="all-prod-sec">
            <Container>
              <Grid className="head-title">
                <Typography variant="h2">All Products</Typography>
              </Grid>

              <Grid
                id="London"
                className={`tabcontent ${
                  activeTab === "London" ? "active" : ""
                }`}
              >
                <Grid container spacing={2}>
                  {featuredProducts.slice(0, 8).map((product) => (
                    <Grid item xs={3} key={product.id}>
                      <Grid className="ftrd-slide">
                        <Grid className="ftrd-slide-blk">
                          <Grid className="prod-img">
                            <Typography variant="h6">-20%</Typography>
                            <img
                              src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
                              alt=""
                            />
                          </Grid>
                          <Grid className="pro-disp">
                            <Grid className="prod-sku">
                              <Typography variant="body">SKU#</Typography>
                              <Typography variant="body">
                                {product.sku}
                              </Typography>
                            </Grid>
                            <Typography variant="h5">
                              {product.title}
                            </Typography>
                            <p className="body">{product.short_desc}</p>{" "}
                            {/* Render HTML content */}
                            <Typography variant="h6">
                              ${product.price}
                            </Typography>
                            <Button className="theme-btn">
                              <Link
                                to={`/${product.slug}`}
                                onClick={(event) =>
                                  handleProductSelect(product, event)
                                }
                                className="product-link" // Add a class for styling
                              >
                                READ MORE
                              </Link>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </>
      )}

      {selectedProduct && (
        <div id="product" className="selected-product">
          <Container>
            <div className="pro-inner">
              <Row>
                <Col xs="6">
                  <div className="image">
                    <img
                      src={`https://thebroadcaststore.co/admins/public/${selectedProduct.img_path}`}
                      alt={selectedProduct.title}
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="innerContent">
                    <h3 className="sec-head">{selectedProduct.title}</h3>
                    <p className="body">{selectedProduct.short_desc}</p>
                    <p className="price">${selectedProduct.price}</p>
                    <div className="meta">
                      <div className="rating">
                        {Array.from(
                          { length: selectedProduct.rating },
                          (_, index) => (
                            <IoStarSharp key={index} />
                          )
                        )}
                      </div>
                    </div>
                    <Button className="theme-btn">
                      <Link to="/Enquiry">Send Enquiry</Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div id="pro-text"></div>
            <div className="headcontent">
              <Row>
                <Col xs="12">
                  <div className="innerContent" data-aos="fade-right">
                    <h3 className="sec-head">Model Details</h3>
                    <p
                      className="para"
                      dangerouslySetInnerHTML={{
                        __html: selectedProduct.long_desc,
                      }}
                    ></p>{" "}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}

      {!selectedProduct && (
        <>
          <Grid id="pro-cards">
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Grid id="inner-card" className="blue">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid className="content">
                          <Typography variant="h2">
                            A4Tech HS-8i Stereo Headset
                          </Typography>
                          <Typography variant="body1">
                            The soft ear-pad covers comfortably on the ear to
                            provide absolute sound quality as if you're in your
                            own world.
                          </Typography>
                          <Button className="arrow-btn">
                            <Link to={"/A4Techheadset"}>
                              Buy Now <FaArrowRightLong />{" "}
                            </Link>
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid className="image">
                          <img src={man} alt="" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid id="inner-card" className="yellow">
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <Grid className="content">
                          <Typography variant="h2">
                            iPad Pro Supercharged by
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={7}>
                        <Grid className="content">
                          <Button className="arrow-btn">
                            <Link to={"/Ipadpro"}>
                              Buy Now Instantly <FaArrowRightLong />{" "}
                            </Link>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid className="image">
                          <img src={Manfrotto} alt="" />
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid className="image image-mob">
                          <img src={Steadicam} alt="" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid id="pro-cards">
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid id="inner-card" className="green">
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <Grid className="content">
                          <Typography variant="h2">Sony HDC-3500L</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={7}>
                        <Grid className="content">
                          <Button className="arrow-btn">
                            <Link to={"/Applemonitor"}>
                              Click Here To View All <FaArrowRightLong />{" "}
                            </Link>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid className="image">
                          <img src={sony} alt="" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7}>
                  <Grid id="inner-card" className="d-blue">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid className="content">
                          <Typography variant="h2">
                            RED DIGITAL CINEMA <br />
                            KOMODO-X
                          </Typography>
                          <Typography variant="body1">
                            KOMODO-X™ is the next evolution in the KOMODO
                            family, multiplying the frame rates, dynamic range,
                            and usability of the original KOMODO to break new
                            grounds.{" "}
                          </Typography>
                          <Button className="arrow-btn">
                            <Link to={"/SpeakerAlesis"}>
                              Click Here To View All <FaArrowRightLong />{" "}
                            </Link>
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid className="image">
                          <img src={KOMODO} alt="" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>

          <Grid id="newsletter">
            <Container>
              <Grid className="news-con">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h2">Sign Up for Newsletter</Typography>
                    <Typography variant="body1">
                      Receive new updates on seasonal update,
                      <br /> security updates, promotional updates.{" "}
                    </Typography>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Grid className="textField">
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid className="textField">
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid className="sbmt-btn">
                        <Button className="submt">
                          <Link to={"/"}>Submit</Link>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
