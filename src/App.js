import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const InputCheckBox = () => {
  console.log("InputCheckBox run");

  const [checkedValues, setCheckedValues] = useState({
    'マウス':false,
    'モニター':false,
    'キーボード':false
  });
  // console.log(checkedValues);

  const handleChange = (e) => {
    console.log("handleChange run");

    setCheckedValues({...checkedValues, [e.target.value]:e.target.checked });
  };

  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value])=>{
      // value && pre.push(key);
      console.log("stateOfchekedValues run");

      if(value) 
        pre.push(key);
      return pre;
    },
    []
  );
  // console.log(stateOfCheckedValues);
  console.log("");

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