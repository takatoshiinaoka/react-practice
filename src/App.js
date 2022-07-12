import logo from './logo.svg';
import './App.css';

const Hello = () => {
  const isReact = false;

  // isReactが false の場合のみ文字を返す
  return  <p>{isReact || "Hello, OR Operator"}</p>;
};

export default Hello;