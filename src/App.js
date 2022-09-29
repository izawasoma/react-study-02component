//必要なライブラリを読み込む
import React ,{ useState } from "react";
import "./styles.css";

//コンポーネントをインポート
import { Counter } from "./Counter";
import { Hello } from "./Hello";

//状態変数countの初期状態
const INITIAL_COUNT = 0;

//状態変数nameの初期状態
const INITIAL_NAME = "JavaScript";

export default function App(){
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
    <>
      <Counter
      count={count}
      countIncrement={countIncrement}
      countDecrement={countDecrement}
      countReset={countReset}
      initialCount={INITIAL_COUNT}
      />
      <Hello
      name={name}
      handleChangeName={handleChangeName}
      initialName={INITIAL_NAME}
      />
    </>
  );
}
