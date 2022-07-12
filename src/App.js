import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const values = [
  {id: 1, item: "HTML"},
  {id: 2, item: "CSS"},
  {id: 3, item: "JavaScript"}
];

const SelectItems = values.map((value) => {
  return(
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]['item']);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <p>
        現在選択されている値：<b>{selectedValue}</b>
      </p>
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
};

export default InputSelectBox;