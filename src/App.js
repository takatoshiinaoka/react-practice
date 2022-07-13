import React,{ useEffect, useRef, useState } from "react"
import "./App.css"

// useRefの場合

const SampleCompoent = () => {
  const inputRefObject = useRef(null)
  const [text, setText] = useState("")

  useEffect(() => {text && console.log("レンダリング!")})

  const handleClick = () => setText(inputRefObject.current.value)

  const textReset = () => {
    setText("")
    inputRefObject.current.value = ""
  }

  return (
    <>
      <input ref={inputRefObject} type="text" defaultValue="Please enter text" />
      <button onClick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  )
}

export default SampleCompoent