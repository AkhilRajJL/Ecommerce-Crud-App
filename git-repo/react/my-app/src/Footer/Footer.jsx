import React from 'react';
import './Footer.css';
import img from "../Navbar/images1-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-start">
          <div className="col-md-3 mb-4">
            <img className="top_img" src={img} alt="Left" />
            <h6 className="footer_titleone">FLIP<b  className="footer_titletwo">Zone</b></h6>
            <div className="container">
        <div className="social_icons text-center">
          <h6>Follow as on;</h6>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="social_icon" />
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook}className="social_icon" />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="social_icon" />
          </a>
          <a href="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} className="social_icon" />
          </a>
        </div>
      </div>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Quick Links</h6>
          <Link to="/home"className="footer_content">Home</Link>
           <Link to="/about"className="footer_content">About</Link>
           <Link to="/contact"className="footer_content">Contact</Link>
           <Link to="/login"className="footer_content">Login</Link>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Terms & Policies</h6>
            <a className="footer_content" href="#">Terms of Conditions</a>
            <a className="footer_content" href="#">FAQs</a>
            <a className="footer_content" href="#">Privacy Policy</a>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Get In Touch</h6>
            <a className="footer_content" href="#">0471-2525777</a>
            <a className="footer_content" href="#">FlipZone@gmail.com</a>
          </div>
        </div>
        <footer className="footer bg-dark text-light text-center py-3">
          <small>© 2025 FlipZone. All rights reserved.</small>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
