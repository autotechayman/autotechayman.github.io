import React, { Component } from 'react';
import './Event.css';
import * as bootstrap from 'react-bootstrap'

//import EventItem from '../../components/eventItem';


class Events extends Component {
   
    render() {
        return (
          <div className="contact-us-bakhour">
              <form className="form-bakhour">
  <div>
  <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"/>
   </div>
  <input type="text" placeholder="Name (required)" required/>
  <input type="text" placeholder="Return address (required)" required/>
  <input type="text" placeholder="Topic (required)" required/>
  <textarea placeholder="Subject (required)" required></textarea>
  <input type="submit" value="Send"/>
</form>

            </div>
        );
    }
}
export default Events;