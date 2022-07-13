// 関数コンポーネント内で useState createContext を扱えるようにするため、
// React import 時に useState createContext を読み込む
import React,{useState,createContext} from "react"

export const CountContext = createContext()

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={[count, setCount]}>
            {children}
        </CountContext.Provider>
    )
}