import React, { useState } from "react";
import { useEffect } from "react";
import "../style.css";

import Field from "./Field";

function Game() {
  //fetched data from api
  const [data, setData] = useState([]);

  //refactored data that I am going to use with this form:
  const [field, setField] = useState(refactorData());

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
    console.log(data);
    console.log(`Data length is ${data.length}`);
  }, []);

  function refactorData() {
    const ans = [];
    for (let i = 0; i < data.length; i++) {
      let currData = data[i];
      ans.push(
        generateNewField(
          currData.question,
          currData.correct_answer,
          currData.incorrect_answers
        )
      );
    }
    return ans;
  }

  function generateNewField(question, correct_answer, incorrect_answers) {
    return {
      question: question,
      correctAnswer: correct_answer,
      incorrectAnswers: incorrect_answers,
    };
  }

  console.log(`field is ${field}`);

  // const questionAnswerField = data.map((field) => {} <Field question={field.question} choices={} />);

  // console.log(`QUESTIONS is ${questions}`);

  return <></>;
}

export default Game;
