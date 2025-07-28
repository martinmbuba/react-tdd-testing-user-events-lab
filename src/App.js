import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    Technology: false,
    Sports: false,
    Art: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(interests).filter(
    (interest) => interests[interest]
  );

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <fieldset>
          <legend>Interests</legend>
          <label>
            <input
              type="checkbox"
              name="Technology"
              checked={interests.Technology}
              onChange={handleCheckboxChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              name="Sports"
              checked={interests.Sports}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="Art"
              checked={interests.Art}
              onChange={handleCheckboxChange}
            />
            Art
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Thank you for signing up, {name}!{" "}
          {selectedInterests.length > 0 && (
            <>Your interests: {selectedInterests.join(", ")}</>
          )}
        </p>
      )}
    </main>
  );
}

export default App;
