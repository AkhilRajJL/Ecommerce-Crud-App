import React from 'react'
import './Contact.css'
import img from "./girl-speaking-old-phone-black-white-wall.jpg";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 position-relative">
          <img className="img-fluid w-100 contact_img" src={img} alt="contact" />
          <div className="contact_content text-center position-absolute top-50 start-0 translate-middle-y p-4">
            <h1 className="text-warning">Contact Us....</h1>
            <p>We're here to help! Whether you have a question, feedback, or are interested in collaboration, we'd love to hear from you.Reach out to us via e-mail, phone, or social media, and we'll get back to you as soon as possible. Our team is available Monday to Friday from 9 AM to 6 PM. Feel free to share your thoughts—your input helps us grow and improve!</p>
            <button className="btn btn-success mt-3 me-3 rounded-pill px-4">Contact Us Now</button>
            <button className="btn btn-info mt-3 rounded-pill px-4">FlipZone@gmail.com</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
