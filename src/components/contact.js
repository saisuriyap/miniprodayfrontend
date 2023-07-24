import React from 'react';
import'./contact.css';
const ContactUs = () => {
  return (
    <div className='con'>
    <div className="contact-us">
        <div className='te'>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please feel free to reach out to us.</p>
      <form >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="5"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ContactUs;
