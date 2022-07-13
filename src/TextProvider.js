// 関数コンポーネント内で createContextを扱えるようにするため、
// React import時に、createContextを読み込む
import { getValue } from "@testing-library/user-event/dist/utils";
import React,{createContext} from "react"

// createContext() を利用して、Contextオブジェクト TextContext を作成
// 他のファイルで TextContext を参照できるようにするために export しておく
export const TextContext = createContext()

// TextProvider に渡したい text を定義
const text = "これはProviderから渡されたテキストです。"

// 定義した text の情報を保持する TextContext.Provider を作成
// TextContext.Provider で children をラップしておくと、
// ラップしたコンポーネントのツリー内で Contextオブジェクトを
// 参照できるようになる childre を props で受け取っておく
export const TextProvider = ({children}) => {
    // 共有したい値を value属性の値として渡す
    // value属性の値は、Textproviderコンポーネントでラップしたコンポーネント
    // のツリー内で参照できるようになる
    return <TextContext.Provider value={text}>{children}</TextContext.Provider>
}