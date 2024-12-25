import React from 'react';
import '/Users/mahaattique/Documents/GitHub/mahaattique.github.io/portfolio-website/src/styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Message</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
