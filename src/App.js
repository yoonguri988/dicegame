import { useState } from "react";
import Button from "./Button";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOhterNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOhterNum]);
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
