import React,{ useState } from "react"
import "./App.css"


const CountResult = React.memo(({ text, countState }) => {
  countState && console.log(`${text}ボタンがクリックされました！`)
  return(
    <p>
      {text}:{countState}
    </p>
  )
})


const Counter = () => {
  const [countStateA, setCountStateA] = useState(0)
  const [countStateB, setCountStateB] = useState(0)
  
  const countIncrementA = () =>
    setCountStateA(prevCountStateA => prevCountStateA + 1)
  
  const countIncrementB = () =>
    setCountStateB(prevCountStateB => prevCountStateB + 1)
  
  const countReset = () => {
    setCountStateA(0)
    setCountStateB(0)
  }

  return (
    <>
      <CountResult text="Aボタン" countState={countStateA} />
      <CountResult text="Bボタン" countState={countStateB} />
      <button onClick={countIncrementA}>A ボタン</button>
      <button onClick={countIncrementB}>B ボタン</button>
      <button onClick={countReset}>リセット</button>
    </>
  )
}


export default Counter