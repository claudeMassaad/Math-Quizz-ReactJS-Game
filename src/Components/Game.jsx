import React, { useState } from "react";
import { useEffect } from "react";
import Answer from "./Answer";
import Field from "./Field";

function Game(props) {
  //refactored data that I am going to use with this form:
  // field = [
  //   {
  //     question: q,
  //     correctAnswer: correct_answer,
  //     incorrectAnswers: incorrect_answers,
  //     isHeld:false
  //     id: ...,
  //   } ,
  //   ...
  // ]
  const [field, setField] = useState(props.data);

  // function refactorData() {
  //   const ans = [];
  //   for (let i = 0; i < data.length; i++) {
  //     let currData = data[i];
  //     ans.push(
  //       generateNewField(
  //         currData.question,
  //         currData.correct_answer,
  //         currData.incorrect_answers
  //       )
  //     );
  //   }
  //   return ans;
  // }

  // function generateNewField(q, correct_answer, incorrect_answers) {
  //   return {
  //     question: q,
  //     correctAnswer: correct_answer,
  //     incorrectAnswers: incorrect_answers,
  //     isHeld: false,
  //     id: nanoid(),
  //   };
  // }

  {
    /* <Field
          question={data.question}
          correctAnswer={data.correctAnswer}
          // answers={data.answers}
          // holdField={() => holdField(selectedAnswer)}
        /> */
  }
  let allFields = field.map((instance) => {
    let gg = instance.answers;
    console.log(gg);
    let finalAnswers = gg.map((option) => {
      return (
        <Answer
          ans={option.answer}
          isHeld={option.isHeld}
          holdField={() => holdField(instance.question, option.answer)}
        />
      );
    });
    return (
      <div className="oneField">
        <p className="question">{instance.question}</p>
        <p className="answers">{finalAnswers}</p>
      </div>
    );
  });

  function holdField(question, selectedAnswer) {
    setField((oldField) =>
      oldField.map((field) => {
        return field.question === question
          ? field.answers.map((answer) => {
              return answer === selectedAnswer
                ? { ...answer, isHeld: !answer.isHeld }
                : answer;
            })
          : field;
      })
    );
  }

  return (
    <body>
      <div className="quizzPage">
        <div>{allFields}</div>
        <button className="checkAnswers">Check Answers</button>
      </div>
    </body>
  );
}

export default Game;
