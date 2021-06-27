import React, { Component } from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './page/News/News'
import Event from './page/Event/Event'
import Footer from './components/footer'
import Home from './page/home/home'
//import Orders from './page/Admin/Orders'


import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import EventsA from "./page/Admin/Events"
import Scroll from './components/Scroll'
//import ProductsA from './page/Admin/productA'
//import NewsA from './page/Admin/NewsA'
 class App extends Component {

  render() {

    return (

      <BrowserRouter>
         
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/products" component={Nproducts} />
           
            <Route path="/News" component={News} />
           
            <Route path="/Events" component={Event} />
           
            <Route exact path="/" component={Home} />
          </Switch> 
         </div>
        <Footer />
       {/* <Scroll/> */}
      </BrowserRouter>

    );
  }
}
export default App;


