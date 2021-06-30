import React,{Component} from 'react';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  NewsItem  from '../../components/newItem';
//import {Col,Image } from 'react-bootstrap';

class News extends Component {
 
    render() {
    return (
      <div className="bakhour--about-us">
   <main>
  <section className="lp">
    <section className="lp__header">
    {/* <h1 className="name--lp" >Bakhour</h1> */}
    {/* <p>All the latest news about your favorite artists and releases.</p> */}
    </section>
    
<section class="lp__grid">
  <div class="lp__gridItem lp__gridItem__image">
  </div>
    <div class="lp__gridItem lp__gridItem__text">
      <p class="lp__gridItemText-sm">Bakhour Auto tech</p>
      <h2 class="lp__gridItemText-lg">Bakhour Company was established in 2011</h2>
      <p class="lp__gridItemText-md">Al-Bukhoury Company aims to develop damaged car structures through careful repair and restore them correctly and with a guarantee. Until now, we are cooperating with many insurance companies and aspire to the best and highest....</p>
      <p class="lp__gridItemText-sm lp__gridItemText-sm-bw"><strong>Our company leads itself to development and prosperity .</strong> </p>
  </div>
    </section>
      
  

</section>    
                   
     </main>

     </div>
  
    );
  }
}
export default News;
