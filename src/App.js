import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const values = [
  {id:1, item:"マウス"},
  {id:2, item:"モニター"},
  {id:3, item:"キーボード"}
];


const CheckBtnItems = ({ onChange, checked }) => 
  //map() で配列 value から要素を1つずつ取り出し value で受け取る
  values.map((value) => {
    return(
      <label key={value.id}>
        <input 
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked[value.item]}
        />
        {value.item}
      </label>
    );
  });


const InputCheckBox = () => {

  const [checkedValues, setCheckedValues] = useState(
    values.reduce((acc, cur) => {
      acc[cur.item] = false
      return acc},
      {})
  );

  const handleChange = (e) => {
    setCheckedValues({...checkedValues, [e.target.value]:e.target.checked });
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

  return(
    <div className='App'>
      <p>
        選択されている値：
        <b>{stateOfCheckedValues.join(",")}</b>
      </p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

export default InputCheckBox;