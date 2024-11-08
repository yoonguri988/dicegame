import { useState } from "react";
import Button from "./Button";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  //참조형 state
  const [gameHistory, setGameHistory] = useState([]);

  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  //참조형 state
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOhterNum = random(6);

    setNum(nextNum);
    setSum(sum + nextNum);
    // 참조형 state
    setGameHistory([...gameHistory, nextNum]);

    setOtherNum(nextOhterNum);
    setOtherSum(otherSum + nextOhterNum);
    // 참조형 state
    setOtherGameHistory([...otherGameHistory, nextOhterNum]);
  };
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);

    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board
          name="나"
          color="blue"
          num={num}
          sum={sum}
          gameHistory={gameHistory}
        />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          sum={otherSum}
          gameHistory={otherGameHistory}
        />
      </div>
    </div>
  );
}

export default App;
