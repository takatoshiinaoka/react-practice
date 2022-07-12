import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState({
    'マウス':false,
    'モニター':false,
    'キーボード':false
  });
  console.log(checkedValues);

  const handleChange = (e) => {
    setCheckedValues({...checkedValues, [e.target.value]:e.target.checked });
    // console.log("");
  };

  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value])=>{
      // value && pre.push(key);
      if(value)
        pre.push(key);
      return pre;
    },
    []
  );
  // console.log(stateOfCheckedValues);

  return(
    <div className='App'>
      <p>選択されている値：<b>{stateOfCheckedValues.join(",")}</b></p>
      <label>
        <input 
          type="checkbox"
          value="マウス"
          onChange={handleChange}
          checked={checkedValues["マウス"]} 
        />
        マウス
      </label>
      <label>
        <input 
          type="checkbox"
          value="モニター"
          onChange={handleChange}
          checked={checkedValues["モニター"]} 
        />
        モニター
      </label>
      <label>
        <input 
          type="checkbox"
          value="キーボード"
          onChange={handleChange}
          checked={checkedValues["キーボード"]} 
        />
        キーボード
      </label>
    </div>
  );
};

export default InputCheckBox;