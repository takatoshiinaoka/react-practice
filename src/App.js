import React,{ useState,useEffect } from "react"
import "./App.css"

const INITIAL_COUNT = 0

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT)
  
  const callbackFunction = () => {
    document.title = `${count}回クリックされました`
  }

  useEffect(callbackFunction, [count])

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const countReset = () => {
    setCount(INITIAL_COUNT)
  }

  return (
    <div className="App">
      <p>現在のカウント数：{count}</p>
      <button onClick={countIncrement}>+1 ボタン</button>
      <button onClick={countReset}>リセット</button>
    </div>
  )
}

export default SampleComponent