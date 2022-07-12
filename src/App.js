import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

// Array.include()
// 配列でしていした要素が含まれているか真偽値で返す

// Array.filter() 
//反復処理のためのメソッドで、コールバック関数で処理された個々の要素
//が条件に一致するか真偽値で返し、戻り値から新たな配列を作成する

const InputCheckBox = () => {

  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if(checkedValues.includes(e.target.value)){
      setCheckedValues(
        checkedValues.filter((checkedValue) =>
          checkedValue !== e.target.value)
      );
    }else{
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return(
    <div className='App'>
      <p>
        現在選択されている値：<b>{checkedValues.join("、")}</b>
      </p>
      <label>
        <input 
          type="checkbox" 
          value="マウス" 
          onChange={handleChange} 
          checked={checkedValues.includes("マウス")} 
        />
        マウス
      </label>
      <label>
        <input 
          type="checkbox" 
          value="モニター" 
          onChange={handleChange} 
          checked={checkedValues.includes("モニター")} 
          />
          モニター
      </label>
      <label>
        <input 
          type="checkbox" 
          value="キーボード" 
          onChange={handleChange} 
          checked={checkedValues.includes("キーボード")} 
          />
          キーボード
      </label>
    </div>
  );
};

export default InputCheckBox;