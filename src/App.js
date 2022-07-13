import React,{ createContext, useContext } from "react"
import "./App.css"

import { TextProvider } from "./TextProvider"
import {First} from "./First"
import { CountProvider } from "./CountProvier"


export default function App(){
  return (
    <div className="App">
      <CountProvider>
        <First />
      </CountProvider>
    </div>
  )
}