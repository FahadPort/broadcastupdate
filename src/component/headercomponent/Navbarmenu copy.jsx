import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoStarSharp } from "react-icons/io5";

const Navbarmenu = () => {
  const [productCat, setProductCat] = useState([]);
  const [topBrands, setTopBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [SelectedTopBrands, setSelectedTopBrands] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/all-category")
      .then((response) => {
        setProductCat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/all-top-products")
      .then((response) => {
        setTopBrands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  const handleReload = (e) => {
    navigate("/");
    // if (location.pathname === '/') {
    e.preventDefault();
    window.location.reload();
    // }
  };
  const handleCategorySelect = (category) => {
    axios
      .get(`http://127.0.0.1:8000/api/products/category/${category.id}`)
      .then((response) => {
        setProducts(response.data);
        setSelectedProduct(null); // Reset selected product when a category is selected
        setSelectedCategory(category); // Set the selected category
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleTopBrandsSelect = (category) => {
    axios
      .get(`http://127.0.0.1:8000/api/all-top-products`)
      .then((response) => {
        setTopBrands(response.data);
        setSelectedProduct(null); // Reset selected product when a category is selected
        setSelectedTopBrands(category); // Set the selected category
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleProductSelect = (product, event) => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedProduct(selectedProduct === product ? null : product);
    window.history.pushState(null, null, `/${product.slug}`);
  };

  const handleTopBrands = (product, event) => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedTopBrands(setTopBrands === product ? null : product);
    window.history.pushState(null, null, `/${product.slug}`);
  };

  useEffect(() => {
    // Clear products and selected product when navigating away from the current page
    setProducts([]);
    // setTopBrands([]);
    setSelectedProduct(null);
    // setSelectedTopBrands(null);
    setSelectedCategory(null); // Clear selected category when navigating away
  }, [location.pathname]);

  return (
    <div id="navbar">
      <div className="container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="menubar"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Product Categories"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="dropdown-hd">
                    Categories
                  </NavDropdown.Item>
                  <div className="sidemenu">
                    {productCat.map((category) => (
                      <Link
                        key={category.id}
                        to={`/${category.slug}`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                  <NavDropdown.Item className="dropdown-hd">
                    Top brands
                  </NavDropdown.Item>
                  <div className="sidemenu">
                    {topBrands.map((category) => (
                      <Link
                        key={category.id}
                        to={`/${category.slug}`}
                        onClick={() => handleTopBrandsSelect(category)}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </NavDropdown>

                <Link to="/" onClick={handleReload}>
                  Home
                </Link>
                <Link to="/about">About Us</Link>
                <Link to="#action1">Recent Searches</Link>
                <Link to="#action1">New Product Catalog</Link>
              </Nav>
              <div className="btns">
                <Button className="theme-btn">
                  <Link to="/contact"> Contact Us</Link>
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Render "About Us" section when a category is selected */}
      {selectedCategory && !selectedProduct && (
        <Container>
          <div className="abtcontent">
            <h1 className="heading" data-aos="fade-up">
              {selectedCategory.title}
            </h1>
          </div>
        </Container>
      )}

      {/* Render products based on the selected category */}
      {!selectedProduct ? (
        <div className="products">
          <Grid className="all-prod-sec inn-pg-prod">
            <Container>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid item xs={3} key={product.id}>
                    <Grid className="ftrd-slide">
                      <Grid className="ftrd-slide-blk">
                        <Grid className="prod-img">
                          <Typography variant="h6">-20%</Typography>
                          <img
  src={`http://127.0.0.1:8000/public/${product.img_path}`} // Add 'public/' to the path
  alt={product.title}
  className="product-image" // Add a class for styling
/>
                        </Grid>
                        <Grid className="pro-disp">
                          <Grid className="prod-sku">
                            <Typography variant="body">SKU#</Typography>
                            <Typography variant="body">
                              {product.sku}
                            </Typography>
                          </Grid>
                          <Typography variant="h5">{product.title}</Typography>
                          <p className="body">{product.short_desc}</p>{" "}
                          {/* Render HTML content */}
                          <Button className="theme-btn">
                            <Link
                              to={`/${product.slug}`}
                              onClick={(event) =>
                                handleProductSelect(product, event)
                              }
                              className="product-link" // Add a class for styling
                            >
                              Read More
                            </Link>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </div>
      ) : (
        <div id="product" className="selected-product">
          <Container>
            <div className="pro-inner">
              <Row>
                <Col xs="6">
                  <div className="image">
                    <img
                      src={`http://127.0.0.1:8000/public/${selectedProduct.img_path}`}
                      alt={selectedProduct.title}
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="innerContent">
                    <h3 className="sec-head">{selectedProduct.title}</h3>
                    <p className="para">{selectedProduct.short_desc}</p>

                    <p className="price">${selectedProduct.price}</p>
                    <div className="meta">
                      {/* Assuming you have a 'rating' field in your product data */}
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
      {!SelectedTopBrands ? (
        // <div className="products">
        //   <Grid className="all-prod-sec inn-pg-prod">
        //     <Container>
        //       <Grid container spacing={2}>
        //         {topBrands.map((product) => (
        //           <Grid item xs={3} key={product.id}>
        //             <Grid className="ftrd-slide">
        //               <Grid className="ftrd-slide-blk">
        //                 <Grid className="prod-img">
        //                   <Typography variant="h6">-20%</Typography>
        //                   <img
        //                     src={`http://127.0.0.1:8000/${product.img_path}`}
        //                     alt={product.title}
        //                     className="product-image" // Add a class for styling
        //                   />
        //                 </Grid>
        //                 <Grid className="pro-disp">
        //                   <Grid className="prod-sku">
        //                     <Typography variant="body">SKU#</Typography>
        //                     <Typography variant="body">
        //                       {product.sku}
        //                     </Typography>
        //                   </Grid>
        //                   <Typography variant="h5">{product.title}</Typography>
        //                   <p className="body">{product.short_desc}</p>{" "}
        //                   {/* Render HTML content */}
        //                   <Button className="theme-btn">
        //                     <Link
        //                       to={`/${product.slug}`}
        //                       onClick={(event) =>
        //                         handleTopBrands(product, event)
        //                       }
        //                       className="product-link" // Add a class for styling
        //                     >
        //                       Read More
        //                     </Link>
        //                   </Button>
        //                 </Grid>
        //               </Grid>
        //             </Grid>
        //           </Grid>
        //         ))}
        //       </Grid>
        //     </Container>
        //   </Grid>
        // </div>
        <div></div>
      ) : (
        <div id="product" className="selected-product">
          <Container>
            <div className="pro-inner">
              <Row>
                <Col xs="6">
                  <div className="image">
                    <img
                      src={`http://127.0.0.1:8000/public/${SelectedTopBrands.img_path}`}
                      alt={SelectedTopBrands.title}
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="innerContent">
                    <h3 className="sec-head">{SelectedTopBrands.title}</h3>
                    <p className="para">{SelectedTopBrands.short_desc}</p>

                    <p className="price">${SelectedTopBrands.price}</p>
                    <div className="meta">
                      {/* Assuming you have a 'rating' field in your product data */}
                      <div className="rating">
                        {Array.from(
                          { length: SelectedTopBrands.rating },
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
            <div className="headcontent">
              <Row>
                <Col xs="12">
                  <div className="innerContent" data-aos="fade-right">
                    <h3 className="sec-head">Model Details</h3>
                    <p
                      className="para"
                      dangerouslySetInnerHTML={{
                        __html: SelectedTopBrands.long_desc,
                      }}
                    ></p>{" "}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Navbarmenu;
