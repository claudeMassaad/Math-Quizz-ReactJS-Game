import React from "react";
import "../style.css";

function Landing(props) {
  return (
    <body>
      <main>
        <h1>Quizzical</h1>
        <p>Welcome to the ultimate Math Quizz</p>
        <button onClick={props.start}>Start Quizz</button>
      </main>
    </body>
  );
}

export default Landing;
