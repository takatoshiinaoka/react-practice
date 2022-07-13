import React,{useContext} from "react"
import { CountContext } from "./CountProvier"

// 他のファイルで Thirdコンポーネントを利用できるようにするため
// exportしておく
// Thirdコンポーネントは、Contextオブジェクトから値を取得できる
// Consumerコンポーネント
export const Third = () => {
    // useCntext()を利用して、Contextオブジェクトから値を取得
    // useContext()はContextオブジェクトの値を取得できるReactフック
    const [count, setCount] = useContext(CountContext)

    // textDataには、useContext(TextContext)の値が入っている
    // textDataはProviderコンポーネントから取得したvalueの値
    // Thirdコンポーネント内で、Contextオブジェクトの値を取得できる
    console.log(`現在のカウント：${count}`)
    
    const handleClick = () => setCount((prevCount)=>prevCount + 1)

    return (
        <>
            <p>Thirdコンポーネント：<b>現在のカウント：{count}</b></p>
            <button onClick={handleClick}>+1 ボタン</button>
        </>
    )
}