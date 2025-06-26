import React, { useEffect } from 'react';
import './LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

import img from "../../Pages/LandingPage/h-co-Gviz3cFSf_Y-unsplash.jpg";
import img1 from "../../Pages/LandingPage/img11.jpg";
import img2 from "../../Pages/LandingPage/img1.jpg";
import img3 from "../../Pages/LandingPage/img3.jpg";
import img4 from "../../Pages/LandingPage/img4.jpg";
import img5 from "../../Pages/LandingPage/img5.jpg";
import img6 from "../../Pages/LandingPage/img6.jpg";
import img7 from "../../Pages/LandingPage/img7.jpg";
import img8 from "../../Pages/LandingPage/img8.jpg";
import img9 from "../../Pages/LandingPage/img9.jpg";

function LandingPage() {
  useEffect(() => {
    const bg = document.querySelector('.landing_img');
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bg.style.transform = `scale(1.05) rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const bg = document.getElementById("bgAnim");
    const moveBackground = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      bg.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    };
    window.addEventListener("mousemove", moveBackground);
    return () => window.removeEventListener("mousemove", moveBackground);
  }, []);

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const products = [
    { title: "Kids Fashion", subtitle: "Top Sellers", img: img1, discount: "50%-70% off", description: "Mickey Girls Dress (Pink, Short Sleeve)" },
    { title: "Mens Wear", subtitle: "Recommended", img: img2, discount: "80% off", description: "Men Regular Fit Self Design Shirt" },
    { title: "Casual Shoes", subtitle: "Widest Range", img: img3, discount: "30%-50% off", description: "Stylish Sneakers For Men (White, Green)" },
    { title: "Washing Machine", subtitle: "Exclusive Sale", img: img4, discount: "30% off", description: "SAMSUNG 9kg Digital Inverter Front Load" },
    { title: "LED TV", subtitle: "Recent", img: img5, discount: "50% off", description: "SONY 55 inch Ultra HD Smart Google TV" },
    { title: "Kitchen Appliances", subtitle: "Low Rate", img: img6, discount: "80%-90% off", description: "LIMETRO STEEL Dinner Plate Set" },
    { title: "Ladies Bag", subtitle: "Top 5", img: img7, discount: "50% off", description: "Women Grey Sling Bag - Extra Spacious" },
    { title: "MakeUp Set", subtitle: "Trending", img: img8, discount: "50%-60% off", description: "DAIMANPU All in One Elite Makeup Combo" },
    { title: "Eyeliner", subtitle: "Specials", img: img9, discount: "70% off", description: "Hilary Rhoda Deep Black Waterproof Eyeliner" }
  ];

  return (
    <div className="container-fluid p-0 position-relative" style={{ backgroundColor: '#111' }}>
      {/* Hero section */}
      <div className="position-relative">
        <img className="img-fluid w-100 landing_img" src={img} alt="Landing" />
        <div className="over_content right_aligned">
          <h1 className="landing_title animated_title">
            <span className="flip_blue">Flip</span><span className="zone_red">zone</span>
          </h1>
          <div className="hero_subtitles_centered">
            <p className="hero_subtitle">Your one-stop shop for everything!</p>
            <p className="hero_subtitle">Your product our concern$</p>
          </div>
          <div className="btn-group hero_btns">
            <button className="btn btn-warning rounded-pill px-4 py-2 me-3">Shop Now</button>
            <Link to="/login">
              <button className="btn btn-info rounded-pill px-4 py-2">Log-in</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="card-section">
        <div className="background_animation" id="bgAnim" />
        <div className="container-fluid">
          <div className="row justify-content-center gx-4 gy-4">
            {products.map(({ title, subtitle, img, discount, description }, index) => (
              <div key={index} className="col-md-4 d-flex justify-content-center landing_card_wrapper">
                <div
                  className="card landing_card"
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="img_container position-relative">
                    <img className="card-img-top landingproducts_img" src={img} alt={title} />
                    <div className="icon-overlay">
                      <i className="fas fa-heart wishlist-icon" title="Add to Wishlist"></i>
                      <i className="fas fa-shopping-cart cart-icon" title="Add to Cart"></i>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h2>{title}</h2>
                    <h5>{subtitle}</h5>
                    <h4 className="card-title text-warning">{discount}</h4>
                    <p className="card-text flex-grow-1">{description}</p>
                    <a href="#" className="btn btn-outline-light rounded-pill px-4 mt-auto align-self-start">See More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
