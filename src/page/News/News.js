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
  <section class="lp">
    <section class="lp__header">
    <h1>News</h1>
    <p>All the latest news about your favorite artists and releases.</p>
    </section>
    
<section class="lp__grid">
  <div class="lp__gridItem lp__gridItem__image">
  </div>
    <div class="lp__gridItem lp__gridItem__text">
      <p class="lp__gridItemText-sm">News</p>
      <h2 class="lp__gridItemText-lg">Melody Moore, Artist in the Spotlight</h2>
      <p class="lp__gridItemText-md">New DSD Release! "An American Song Album". This album is a fine collection of songs by America composers presented...</p>
      <p class="lp__gridItemText-sm lp__gridItemText-sm-bw"><strong>Floor van der Holst</strong> on May 02, 2019</p>
  </div>
    </section>
      
  

</section>    
                   
     </main>

     </div>
  
    );
  }
}
export default News;
