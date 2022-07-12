import logo from './logo.svg';
import './App.css';

const handleChange = (e) => {
  console.log(e.target.value);
};

const SampleInputText = () => {
  return <input type="text" defaultValue="" onChange={handleChange} />;
};

export default SampleInputText;