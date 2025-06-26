import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product details", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-card">
        <div className="image-container">
          <img className="product-img" src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: <span>${product.price}</span></p>
          <div className="button-group">
            <button className="btn add-cart">Add to Cart</button>
            <button className="btn buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
