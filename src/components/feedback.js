import React, { useState } from 'react';
import axios from 'axios';
import './feedback.css';
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/usersslice";
const FeedbackPage = () => {
 

  const [feedback, setFeedback] = useState('');
  const user=useSelector(selectUser);
//   const pass=localStorage.getItem('password');
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
        email:user.name,
      feedback: feedback,
    }
    axios.post('http://localhost:8082/api/v1/feed/addFeedback', dataToSend)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      // window.location.reload();
      alert("Your Feedback is submited");
  };



  return (
    <div>
      <div className='feedback-body'>
          <div className='feedback-container'>
      <h2 className='feedback-heading'>Feedback </h2>
      <p className='port'>We value your feedback and would love to hear from you!</p>

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="feedback"  className='ports'>Fill Your Feedback:</label>
        <input
        className='feedback-input'
          type="text"
          id="feedback"
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
          placeholder="Enter your feedback "
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <p>Thank you for taking the time to provide your valuable feedback!</p>
    </div>
    </div>
    </div>
  );
};

export default FeedbackPage;