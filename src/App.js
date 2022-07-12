import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const values = [
  {id:1, item:"マウス"},
  {id:2, item:"モニター"},
  {id:3, item:"キーボード"},
  {id:3, item:"USB"}
];

const CheckBtnItems = ({onChange, checked}) => 
  values.map((value) => {
    return(
      <label key={value.id}>
        <input 
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked.includes(value.item)}
        />
        {value.item}
      </label>
    )
  })

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
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
}

export default InputCheckBox;