import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState("");

  const [text, setText] = useState("JavaScript");

  const handleChange = (e) => setInputTextValue(e.target.value);

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };
  
  return (
    <div className='App'>
      <h1>I love {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  );
};

export default InputText;