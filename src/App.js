import React ,{ useState } from "react";
import "./styles.css";

//状態変数countの初期状態
const INITIAL_COUNT = 0;

//状態変数nameの初期状態
const INITIAL_NAME = "JavaScript";

const SampleComponent = () => {
  //useState: 状態を保持するcountと更新を行なう関数setCount
  const [count, setCount] = useState(INITIAL_COUNT);

  //useState: 状態を保持するnameと更新を行なう関数setName
  const [name, setName] = useState(INITIAL_NAME);

  //countを1ずつカウントアップを行なう
  const countIncrement = () => {setCount((prevCount) => prevCount + 1)};

  //countを1ずつカウントダウンする
  const countDecrement = () => {setCount((prevCount) => prevCount - 1)};

  //countの値を初期化する
  const countReset = () => {setCount(INITIAL_COUNT)}

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <p>
        現在のカウント数：<b>{count}</b><br />
        countの初期値：<b>{INITIAL_COUNT}</b>
      </p>

      <button onClick={countIncrement}>+1</button>
      <button onClick={countDecrement}>-1</button>
      <button onClick={countReset}>Reset</button>

      <p>
        Hello,<b>{name}!!</b><br />
        nameの初期値：<b>{INITIAL_NAME}</b>
      </p>

      <input type="text" onChange={handleChangeName} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <SampleComponent></SampleComponent>
    </>
  );
}
