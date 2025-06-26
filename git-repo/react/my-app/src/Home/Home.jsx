import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get(api);
        setProducts(response.data);
      } catch (err) {
        console.log("err", err);
      }
    }
    fetchApi();
  }, []);

  return (
    <div className="home-background">
      <h1 className="home-title">Featured Products</h1>
      <div className="product-container">
        {products.map((item) => (
          <Link to={`/productdetails/${item.id}`} key={item.id} className="card-link">
            <div className="card1">
              <img className="card-image" src={item.image} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
