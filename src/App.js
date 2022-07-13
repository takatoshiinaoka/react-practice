import React,{ useCallback, useState } from "react"
import "./App.css"


const Button = React.memo(({counterState, buttonValue}) => {
  console.log(`${buttonValue}がクリックされました!`)
  return <button onClick={counterState}>{buttonValue}</button>
})

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0)
  const [countStateB, setCountStateB] = useState(0)
  
  const countIncrementA = useCallback(() =>
    setCountStateA(countStateA + 1), [countStateA])

  const countIncrementB = useCallback(() =>
    setCountStateB(countStateB + 1), [countStateB])

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