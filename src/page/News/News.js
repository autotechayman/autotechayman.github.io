import React,{Component} from 'react';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  NewsItem  from '../../components/newItem';
//import {Col,Image } from 'react-bootstrap';

class News extends Component {
 
    render() {
    return (
      <div className="bakhour--about-us">
    <div class="about-section-bakhour">
  <div class="inner-container-bakhour">
    <h1>About Us</h1>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    </p>
    <div class="skills">
      <span>Web Design</span>
      <span>Photoshop & Illustrator</span>
      <span>Coding</span>
    </div>
  </div>
</div>
      </div>
    );
  }
}
export default News;
