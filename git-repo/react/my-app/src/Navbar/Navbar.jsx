import React from 'react';
import './Navbar.css';
import img from "../Navbar/images1-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img className="top_img" src={img} alt="Logo" />
          <h6 className="footer_titleone ms-2">FLIP<b className="footer_titletwo">Zone</b></h6>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Kids</a>
            </li>
            <li className="nav-item">
            <Link to='/home' className="nav-link text-light" href="#">Home & Living</Link> 
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Beauty</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="position-relative search-bar ms-3">
              <i className="fas fa-search search-icon"></i>
              <input type="text" className="form-control search-input" placeholder="Search for products, brands and more" />
            </div>
          </div>
          <div className="d-flex align-items-center ms-4">
            <button className="btn btn-outline-danger rounded-pill me-3">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Wishlist
            </button>
            <button className="btn btn-outline-danger rounded-pill">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              View Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;