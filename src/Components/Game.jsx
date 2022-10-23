import React, { useState } from "react";
import { useEffect } from "react";
import "../style.css";
import Field from "./Field";
import Question from "./Question";

function Game(props) {
  //fetched data from api
  const [data, setData] = useState([]);

  //refactored data that I am going to use with this form:
  // field = [
  //   {
  //     question: q,
  //     correctAnswer: correct_answer,
  //     incorrectAnswers: incorrect_answers,
  //     isHeld:false
  //   } ,
  //   ...
  // ]
  const [field, setField] = useState([
    {
      question: "hih",
      correctAnswer: "",
      incorrectAnswers: "",
      isHeld: false,
    },
  ]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  useEffect(() => {
    console.log(`data length is ${data.length}`);
    if (data.length > 0) {
      setField(refactorData());
      console.log("Field  is: ");
      console.log(field);
      // allFields = ()=>{
      //   for (let i = 0 ;i<field.length;i++){
      //     let curr = field[i];
      //     retur
      //   }
      // }
      allFields = field.map((instance) => {
        return (
          <Field
            question={instance.question}
            correctAnswer={instance.correctAnswer}
            incorrectAnswers={instance.incorrectAnswers}
          />
        );
      });
    }
  }, [data]);

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

  function generateNewField(q, correct_answer, incorrect_answers) {
    return {
      question: q,
      correctAnswer: correct_answer,
      incorrectAnswers: incorrect_answers,
      isHeld: false,
    };
  }

  let allFields = field.map((instance) => {
    return (
      <Field
        question={instance.question}
        correctAnswer={instance.correctAnswer}
        incorrectAnswers={instance.incorrectAnswers}
      />
    );
  });

  return <>{allFields}</>;
}

export default Game;
