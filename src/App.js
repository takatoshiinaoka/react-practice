// useMemo()でラップした例
import React,{ useRef } from "react"
import "./App.css"


const SampleCompoent = () => {
  const inputRefObject = useRef(null)

  const handleClickFocus = () => inputRefObject.current.focus()

  const handleClickBlur = () => inputRefObject.current.blur()
  

  return (
    <div className="App">
      <input ref={inputRefObject} type="text" />
      <button onClick={handleClickFocus}>フォーカスする</button>
      <button onClick={handleClickBlur}>フォーカスを外す</button>
    </div>
  )
}

export default SampleCompoent