export const Counter = ({
    count,
    countIncrement,
    countDecrement,
    countReset,
    initialCount,
}) => {
    return (
        <>
            <p>
        		現在のカウント数：<b>{count}</b><br />
        		countの初期値：<b>{initialCount}</b>
      		</p>
      		<button onClick={countIncrement}>+1</button>
      		<button onClick={countDecrement}>-1</button>
      		<button onClick={countReset}>Reset</button>
        </>
    );
};