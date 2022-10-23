import { useEffect, useState } from "react";
import Game from "./Components/Game";
import Landing from "./Components/Landing";

function App() {
  const [started, setStarted] = useState(false);

  function startGame() {
    setStarted(true);
  }

  return (
    <div>
      {started ? <Game started={started} /> : <Landing start={startGame} />}
    </div>
  );
}

export default App;
