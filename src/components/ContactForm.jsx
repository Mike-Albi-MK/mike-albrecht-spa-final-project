import React from 'react';
import Header from './Header';
import '../ContactForm.css';

const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log('Email:', email);
    console.log('Message:', message);

    alert('Your message has been sent. Thank you!')
  };

  return (
    <div>
          <div className="logo">
    <a href="/">
      <h3 id="logo-name">chord spotter</h3>
    </a>
    </div>
        <Header />
   

    <div className="form-container">
      
      <h2>Contact Us</h2>

      <form id="contactForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Please enter your email address"
              required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
              id="message" 
              name="message"
              placeholder="Let us know your thoughts" 
              required></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
    </div>
  );
};

export default ContactForm;
