import React,{ createContext, useContext } from "react"
import "./App.css"

import { TextProvider } from "./TextProvider"
import {First} from "./First"


export default function App(){
  return (
    <div className="App">
      <TextProvider>
        <First />
      </TextProvider>
    </div>
  )
}