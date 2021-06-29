import React, { Component } from 'react';
import './Event.css';
import * as bootstrap from 'react-bootstrap'

//import EventItem from '../../components/eventItem';


class Events extends Component {
   
    render() {
        return (
          <div className="contact-us-bakhour">
              <form className="form-bakhour" action="https://formspree.io/forms">
  <div>
  <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"/>
   </div>
  <input type="text" placeholder="Full Name:" required/>
  <input type="text" placeholder="Email:" required/>
  <input type="text" placeholder="phone number:" required/>
  <textarea placeholder="Messages:" required></textarea>
  <input type="submit" value="Send"/>
</form>

            </div>
        );
    }
}
export default Events;