import logo from './logo.svg';
import './App.css';

const Hello = () => {
  const isReact = true;

  return <p>{isReact ? "React is true!!" : "React is false!!"}</p>;
};

export default Hello;