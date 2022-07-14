import { useCounter } from "./hooks"
import {CounterText} from "./CounterText"

export const CounterA = () => {
    const {count, countAdd, countSub, countReset } = useCounter(0)
    return (
        <div className="counterCountainer">
            <h1>カウンターA</h1>
            <p>
                現在のカウント数：<b>{count}</b>
            </p>
            <button onClick={countAdd}>ボタン+1</button>
            <button onClick={countSub}>ボタン-1</button>
            <button onClick={countReset}>リセット</button>
        </div>
    )
}