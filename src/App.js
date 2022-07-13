import React,{ useEffect, useState } from "react"
import "./App.css"


const SampleCompoent = () => {
  // const inputRefObject = useRef(null)
  const [inputValue, setInputValue] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {text && console.log("レンダリング!")})

  // const handleClick = () => setText(inputRefObject.current.value)
  const handleClick = () => setText(inputValue)

  const handleChange = (e) => setInputValue(e.target.value)

  const textReset = () => {
    setText("")
    // inputRefObject.current.value = ""
    setInputValue("")
  }

  return (
    <>
      <input value={inputValue} onChange={handleChange} type="text" />
      <button onClick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  )
}

export default SampleCompoent