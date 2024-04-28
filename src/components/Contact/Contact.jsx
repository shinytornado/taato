import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/email-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import email_icon from '../../assets/msg-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
   
    formData.append("access_key", import.meta.env.VITE_SOME_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach us out and let us know what we can improve, 
        Your feedback provides us improve and provide better for the community</p>
        <ul>
            <li><img src={email_icon} alt="" />Contact@taato.org</li>
            <li><img src={phone_icon} alt="" />+1 234-567-890</li>
            <li><img src={location_icon} alt="" />AP,INDIA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name'
            required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number'
            required/>
            <label>Write Your Message Here</label>
            <textarea name="message"rows="6" placeholder='Enter your message'
            required></textarea>
            <button type='submit' className='dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
