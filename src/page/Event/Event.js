import React, { Component } from 'react';
import './Event.css';
import * as bootstrap from 'react-bootstrap'

//import EventItem from '../../components/eventItem';


class Events extends Component {
   
    render() {
        return (
          <div className="contact-us-bakhour">
              <form className="form-bakhour"  method="POST" action="https://formspree.io/f/xpzklraw">
  <div>
  <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"/>
   </div>
  <input type="text" placeholder="First Name:" required/>
  <input type="text" placeholder="Last Name:" required/>
  <input type="text" placeholder="Email:" required/>
  <input type="text" placeholder="phone number:" required/>
  <textarea placeholder="Messages:" required></textarea>
  <input type="submit" value="Send" />
</form>

            </div>
        );
    }
}
export default Events;