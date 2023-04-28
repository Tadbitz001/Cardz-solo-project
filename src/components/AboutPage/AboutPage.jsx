import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div>
        <p>A little ABOUT ME</p>
        <p>Cardz was created by me to help individuals manage cards that they aquired. It was intended to help people get rid of those big thick clunky wallets and messy purses by storing and managing those contacts in a convient simple way.  </p>
        <h3>Technologies used in this app include..</h3>
        <ul>
          <li> React</li>
          <li> Redux</li>
          <li> Node</li>
          <li> Express</li>
          <li> Material UI</li>
        </ul>
        <h3>Reach me at my LinkedIn</h3>
        <p>https://www.linkedin.com/in/lee-xiong-069ab7154/</p>



      </div>
    </div>
  );
}

export default AboutPage;
