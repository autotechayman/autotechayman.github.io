import React, { Component } from 'react';
import './home.css';
//import * as bootstrap from 'react-bootstrap'
//import { SocialIcon } from 'react-social-icons';

class home extends React.Component {
    render() {
        return (
          
            <div id='home--bakhour-container'>
             
   <main className="main--bakhour">
   <div className="wordart rainbow">
     <h3 className="text">Auto Tech</h3>
     </div>
     
    <main id="main">
      <div id="title">
        {/* <h1>Elon Musk</h1> */}
        <p className="main-titile-tech">bakhour Auto Tech</p>
      </div>
      <figure id="img-div">
        <img
          id="image"
          src='/Image/home.jpg'
          alt="pic"
          className="image-bakhour"
        />
        {/* <figcaption id="img-caption">Elon Musk</figcaption> */}
      </figure>
      <section id="tribute-info">
        <h3 id="headline" className="main-titile-tech">Our services:</h3>
        <ul>
          <li className="li-text">-Repair of all types of cars.</li>
          <li className="li-text"> - Car Paint.</li>
          <li className="li-text">- Car Polishing.</li>
          <li className="li-text">- Car Washing.</li>
          <li className="li-text">- Car Interior Wash.</li>
          <li className="li-text">- Car Mechanic.</li>
          <li className="li-text">- Car electricity.</li>
          </ul>
       </section> 
    </main>
    </main>


    
  </div>
          
           
        );
    }
}


export default home;