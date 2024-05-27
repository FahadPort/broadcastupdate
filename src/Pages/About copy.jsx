// ProductList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';



const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/all-products") // Directly specify the base URL
      .then((response) => {
        console.log("Response:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Grid className="all-prod-sec inn-pg-prod" container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Link to={`/${product.slug}`}>
              <Grid className="ftrd-slide">
                <Grid className="ftrd-slide-blk">
                  <Grid className="prod-img">
                    <Typography variant="h6">-20%</Typography>
                    <img
                      src={`http://127.0.0.1:8000/${product.img_path}`}
                      alt={product.title}
                    />
                  </Grid>
                  <Grid className="pro-disp">
                    <Grid className="prod-sku">
                      <Typography variant="body">SKU#</Typography>
                      <Typography variant="body">{product.sku}</Typography>
                    </Grid>
                    <Typography variant="h5">{product.title}</Typography>
                    <div
                      dangerouslySetInnerHTML={{ __html: product.long_desc }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
