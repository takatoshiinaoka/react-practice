import logo from './logo.svg';
import './App.css';

const Hello = () => {
  const isReact = true;

  // isReactが true の場合のみ、文字を返す
  // isReactが false の場合は何も返さない
  return isReact && <p>Hello, OR Operator</p>;
};

export default Hello;