import React, { useState, useEffect } from 'react';

const ProductDetails = ({ slug }) => {
  const [product, setProduct] = useState(null);

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
  }, [slug]);
  


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductDetails;
