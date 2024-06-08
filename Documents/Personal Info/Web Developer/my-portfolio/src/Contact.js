import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
