import React, { useState } from "react";
import { useEffect } from "react";
import "../style.css";

function Game() {
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));

    // for (let i=0 ; i < 5 ; i++){
    //     que
    // }
  }, []);

  return <div>Hello</div>;
}

export default Game;
