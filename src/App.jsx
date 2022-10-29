import { useEffect, useState } from "react";
import Game from "./Components/Game";
import Landing from "./Components/Landing";
import { nanoid } from "nanoid";

function App() {
  const [started, setStarted] = useState(false);
  const [data, setData] = useState([]);

  function startGame() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(refactorData(data.results));
      });
  }

  //data will look like this:
  // [
  //   {
  //     question: "",
  //     correctAnswer: "",
  //     asnwers: [
  //                 {
  //                    answer:'answer1',
  //                    isHeld: false,
  //                 };
  //                 {
  //                    answer:'answer2',
  //                    isHeld: false,
  //                 };
  //              ],
  //   },
  // ]

  function refactorData(data) {
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
      answers: createArrayAndShuffle(correct_answer, incorrect_answers),
    };
  }

  function createArrayAndShuffle(correct_answer, incorrect_answers) {
    let answers = incorrect_answers;
    answers.push(correct_answer);

    //Shuffle array in the future

    let final = [];
    for (let i = 0; i < answers.length; i++) {
      let curr = answers[i];
      final.push({
        answer: curr,
        isHeld: false,
      });
    }
    return final;
  }

  useEffect(() => {
    if (data.length) {
      setStarted(true);
      // console.log(data);
    }
  }, [data]);

  return (
    <div>{started ? <Game data={data} /> : <Landing start={startGame} />}</div>
  );
}

export default App;
