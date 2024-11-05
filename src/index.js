import React from "react";
import ReactDOM from "react-dom/client";

const product = "macbook";
const model = "Air";
const item = product.toUpperCase() + " " + model;
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png";

function handleClick(e) {
  alert("곧 도착합니다!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </React.StrictMode>
);
