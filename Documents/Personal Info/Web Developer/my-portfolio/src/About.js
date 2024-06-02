// src/About.js
import React, { useState } from 'react';

const About = () => {
  const [name, setName] = useState('Nelson Gmode'); // Initialize with a default value

  return (
    <div>
      <h2>About Me</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on change
      />
      <p>My name is {name}.</p>
      <p>Results-driven Software/Web Developer with over three years of experience specializing in front-end and back-end development, and technical SEO. Proven ability to develop innovative web solutions that improve efficiency and customer satisfaction. Seeking to leverage my expertise and continue growing in a dynamic and collaborative environment.</p>
    </div>
  );
};

export default About;
