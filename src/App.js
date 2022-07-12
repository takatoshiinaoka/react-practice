import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";


const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);


const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);


const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if(isLoggedIn){
    // ログイン状態で、ログアウトボタンを表示させる
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  // ログアウト状態で、ログインボタンを表示させる
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}


export default function App(){
  return <LoginControl />;
}