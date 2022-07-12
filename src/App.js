import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("HTML");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <p>
        現在選択されている値：<b>{selectedValue}</b>
      </p>
      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
};

export default InputSelectBox;