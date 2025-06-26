import React from 'react'
import './About.css'
import img from "../../Pages/About/chatgpt.png";
import img1 from "../../Pages/About/img1.jpg";
import img2 from "../../Pages/About/img2.png";
function About() {
  return (
      
<div class="heading_one container-fluid text-center mt-3">

<div class=" container-fluid "><h1>About US........</h1></div>
  <div class="row">
    <div class="col-sm-12 col-lg-6 p-3 bg-dark text-white">  
           <div className="container mt-3">
             <div className="card" style={{ width: '500px' }}>
             <img className="about_img" src={img} alt="about" style={{width: '100%',height: '400px',}} />
               <div className="card-body">
               <h4 className="card-title">Who We Are?</h4>
                 <p className="card-text">
                 FlipZone is India's largest online e-commerce marketplace, established in 2007 by Sachin Bansal and Binny Bansal.
                 Initially focused on online book sales, it expanded into various product categories like fashion, electronics, home essentials, and groceries.
                 </p>
               </div>
             </div>
           </div> 
    </div>
    <div class="col-sm-12 col-lg-6 p-3 bg-dark text-white">
           <div className="container mt-3">
             <div className="card" style={{ width: '500px' }}>
             <img className="about_img" src={img1} alt="about" style={{width: '100%',height: '400px',}} />
               <div className="card-body">
               <h4 className="card-title">Shift to Electric Vehicles</h4>
                 <p className="card-text">
                 FlipZone has deployed over 10,000 Electric Vehicles in its delivery fleet, aiming for a fully electric
                 logistics last-mile fleet by 2030 as part of the Climate Group's EV100 initiative, with 75% of its EVs in Tier-I 
                 cities including a 20% improvement in last-mile delivery speed.
                 </p>
               </div>
             </div>
           </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-lg-4 p-3 bg-dark text-white">
    <div className="container mt-3">
             <div className="card" style={{ width: '500px' }}>
             <img className="about_img" src={img2} alt="about" style={{width: '100%',height: '400px',}} />
               <div className="card-body">
               <h4 className="card-title">Wide Product Range</h4>
                 <p className="card-text">
                 FlipZone offers over 80 million products across various categories, including electronics, fashion,
                 home essentials, groceries, and more. 
                 </p>
               </div>
             </div>
           </div>
    </div>
    <div class="col-sm-12 col-lg-4 p-3 bg-dark text-white">.col</div>
    <div class="col-sm-12 col-lg-4  p-3 bg-dark text-white">.col</div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-lg-6 p-3 bg-dark text-white">.col</div>
    <div class="col-sm-12 col-lg-6 p-3 bg-dark text-white">.col</div>
  </div>
</div>
  )
}

export default About
