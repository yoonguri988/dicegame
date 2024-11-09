import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory, className }) {
  // num과 sum을 직접 계산해서 사용
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  const classNames = `Board ${className}`;
  const h2ClassNm = "Board-heading";
  return (
    <div className={classNames}>
      <h2 className={h2ClassNm}>{name}</h2>
      <Dice color={color} num={num} />
      <h2 className={h2ClassNm}>기록</h2>
      <p>{gameHistory.join(", ")}</p>
      <h2 className={h2ClassNm}>총점</h2>
      <p>{sum}</p>
    </div>
  );
}

export default Board;
