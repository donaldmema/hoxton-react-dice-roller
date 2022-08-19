import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ImageWrapper } from "./components/ImageWrapper";

function App() {
  const [dice, setDice] = useState(0);

  function rollDice() {
    setDice(Math.floor(Math.random() * 6) + 1);
  }

  function handleRollDice() {
    setDice(7);
    setTimeout(rollDice, 2500);
  }

  return (
    <div className="App">
      <ImageWrapper dice={dice} />
      <Button variant="primary" onClick={handleRollDice}>
        Roll the Dice!
      </Button>
    </div>
  );
}

export default App;
