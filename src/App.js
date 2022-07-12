import logo from './logo.svg';
import './App.css';

const handleClick = () => {
  console.log("clickされました!");
};

const SampleButton = () => {
  return <input type="button" value="ボタン" onClick={handleClick} />;
};

export default SampleButton;