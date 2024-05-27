import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import { IoStarSharp } from "react-icons/io5";  // Assuming this is the correct import for the star icon

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const query = useQuery();
  const searchQuery = query.get('q');

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://thebroadcaststore.co/admins/api/products/search?q=${searchQuery}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error searching products:", error);
        });
    }
  }, [searchQuery]);

  const handleProductSelect = (product, event) => {
    event.preventDefault();
    setSelectedProduct(product);
  };

  return (
    <div>
      {!selectedProduct ? (
        <div className="products">
          <Grid className="all-prod-sec inn-pg-prod">
            <Container>
              <Grid container spacing={2}>
                {searchResults.map((product) => (
                  <Grid item xs={3} key={product.id}>
                    <Grid className="ftrd-slide">
                      <Grid className="ftrd-slide-blk">
                        <Grid className="prod-img">
                          <Typography variant="h6">-20%</Typography>
                          <img
                            src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
                            alt={product.title}
                            className="product-image"
                          />
                        </Grid>
                        <Grid className="pro-disp">
                          <Grid className="prod-sku">
                            <Typography variant="body">SKU#</Typography>
                            <Typography variant="body">{product.sku}</Typography>
                          </Grid>
                          <Typography variant="h5">{product.title}</Typography>
                          <p className="body">{product.short_desc}</p>
                          <Button className="theme-btn">
                            <Link
                              to={`/${product.slug}`}
                              onClick={(event) => handleProductSelect(product, event)}
                              className="product-link"
                            >Read More</Link>
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
                    <img src={`https://thebroadcaststore.co/admins/public/${selectedProduct.img_path}`} alt={selectedProduct.title} />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="innerContent">
                    <h3 className="sec-head">{selectedProduct.title}</h3>
                    <p className="para">{selectedProduct.short_desc}</p>
                    <p className="price">${selectedProduct.price}</p>
                    <div className="meta">
                      <div className="rating">
                        {Array.from({ length: selectedProduct.rating }, (_, index) => (
                          <IoStarSharp key={index} />
                        ))}
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
                    <p className="para" dangerouslySetInnerHTML={{ __html: selectedProduct.long_desc }}></p>
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

export default SearchResult;
