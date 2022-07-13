// useCallback() で親コンポーネントの関数をラップしない例
import React,{ useState } from "react"
import "./App.css"


const Button = React.memo(({counterState, buttonValue}) => {
  console.log(`${buttonValue}がクリックされました!`)
  return <button onClick={counterState}>{buttonValue}</button>
})

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0)
  const [countStateB, setCountStateB] = useState(0)
  
  const countIncrementA = () =>
    setCountStateA(countStateA + 1)

  const countIncrementB = () =>
    setCountStateB(countStateB + 1)

  return (
    <>
      <p>A ボタン{countStateA}</p>
      <p>B ボタン{countStateB}</p>
      <Button counterState={countIncrementA} buttonValue="Aボタン" />
      <Button counterState={countIncrementB} buttonValue="Bボタン" />
    </>
  )
}

export default Counter