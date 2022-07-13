// 関数コンポーネント内で useContext を扱えるようにするため、
// React import 時に useContext を読み込む
import React,{useContext} from "react"
import { TextContext } from "./TextProvider"

// 他のファイルで Thirdコンポーネントを利用できるようにするため
// exportしておく
// Thirdコンポーネントは、Contextオブジェクトから値を取得できる
// Consumerコンポーネント
export const Third = () => {
    // useCntext()を利用して、Contextオブジェクトから値を取得
    // useContext()はContextオブジェクトの値を取得できるReactフック
    const textData = useContext(TextContext)

    // textDataには、useContext(TextContext)の値が入っている
    // textDataはProviderコンポーネントから取得したvalueの値
    // Thirdコンポーネント内で、Contextオブジェクトの値を取得できる
    console.log(textData)
    return(
        <>
            <p>
                Thirdコンポーネント：<b>{textData}</b>
            </p>  
        </>
    )
}