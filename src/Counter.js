export const Counter = ({
    count,
    countIncrement,
    countDecrement,
    countReset,
    initialCount
}) => {
    return (
        <div className="App">
            <p>
                現在のカウント数：<b>{count}</b>
                <br />
                count の初期値：<b>{initialCount}</b>
            </p>
            <button onClick={countIncrement}>increment</button>
            <button onClick={countDecrement}>decrement</button>
            <button onClick={countReset}>reset</button>
        </div>
    );
};