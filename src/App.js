// useMemo()でラップした例
import React,{ useState, useMemo } from "react"
import "./App.css"


const square = (params) => {
  // [...Array(1000).keys()]は、0からn-1までの整数が順番に並んだ配列を作る
  const testDate = [...Array(5000).keys()]
  params && testDate.forEach(() => {
    console.log(
      `「計算：B + 1」がボタンクリックされ、square関数実行中、
        ループ処理を${testDate.length}回実行中。。。`
      )
  })

  return params * params
}

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0)
  const [countStateB, setCountStateB] = useState(0)

  const countResultA = () => {
    setCountStateA(c => c+1)
    console.log("計算：A + 1ボタンがクリックされました")
  }

  const countResultB = () => {
    setCountStateB(c => c+1)
    console.log("計算：B + 1ボタンがクリックされました")
  }

  const squareArea = useMemo(() => square(countStateB), [countStateB])
  // const squareArea = square(countStateB)

  return (
    <>
      <p>
        計算結果A：{countStateA} 
        <button onClick={countResultA}>計算：A + 1</button>
      </p>
      <p>
        計算結果B：{countStateB}  
        <button onClick={countResultB}>計算：B + 1</button>
      </p>
      <p>【正方形の面積】</p>
      <p>計算結果B × 計算結果B = {squareArea}</p>
    </>
  )
}

export default Counter