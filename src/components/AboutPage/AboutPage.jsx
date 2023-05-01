import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div>
        <h2>About Cardz</h2>
        <p>Cardz is aimed at helping people manage their growing collection of cards in a hassle-free manner. The idea behind Cardz was to simplify the lives of individuals by reducing the clutter in their wallets and purses, while also providing a convenient way to manage their contacts.

With Cardz, you no longer have to deal with those big, thick, and clunky wallets that are difficult to manage. Instead, you can store and manage your cards with ease and simplicity. Whether it's business cards, personal cards, or loyalty cards, Cardz has got you covered.

I'm thrilled to share this innovative solution with you, and I hope that it will make your life easier and more organized. Cardz - your go-to card management tool!</p>
        {/* <p>Cardz was created by me to help manage cards you aquire over time. It was intended to help people get rid of those big thick clunky wallets and messy purses by storing and managing contacts in a convient simple way.  </p> */}
        <h3>Technologies used in this app include..</h3>
        <ul>
          <li> React</li>
          <li> Redux</li>
          <li> Node. js</li>
          <li> Express</li>
          <li> PostgreSQL</li>
          <li> JavaScript</li>
          <li> Material-UI</li>
        </ul>
        <h3>Reach me on LinkedIn</h3>
        <a href="https://www.linkedin.com/in/lee-xiong-069ab7154/" target="_blank">https://www.linkedin.com/in/lee-xiong-069ab7154/ </a>

        <h3>Special thanks to Prime Digital Academy, the instructors, the aquamarine cohorts, and my supportive family!</h3>

      </div>
    </div>
  );
}

export default AboutPage;
