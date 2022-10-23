import React, { useState } from "react";
import Answers from "./Answers";
import Question from "./Question";

function Field(props) {
  return (
    <>
      <p>
        <Question question={props.question} />
      </p>
      <p>
        <Answers
          correctAnswer={props.correctAnswer}
          incorrectAnswers={props.incorrectAnswers}
        />
      </p>
    </>
  );
}

export default Field;
