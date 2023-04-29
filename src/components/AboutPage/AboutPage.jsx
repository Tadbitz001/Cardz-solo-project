import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div>
        <h2>About Me</h2>
        <p>Cardz was created by me to help manage those cards you aquire over time. It was intended to help people get rid of those big thick clunky wallets and messy purses by storing and managing contacts in a convient simple way.  </p>
        <h3>Technologies used in this app include..</h3>
        <ul>
          <li> React</li>
          <li> Redux</li>
          <li> Node</li>
          <li> Express</li>
          <li> Material UI</li>
        </ul>
        <h3>Reach me on LinkedIn</h3>
        <a href="https://www.linkedin.com/in/lee-xiong-069ab7154/" target="_blank">https://www.linkedin.com/in/lee-xiong-069ab7154/ </a>

        <h3>Special thanks to Prime Digital Academy, the instructors, the aquamarine cohorts, and my supportive family!</h3>


      </div>
    </div>
  );
}

export default AboutPage;
