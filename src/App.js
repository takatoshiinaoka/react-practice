import logo from './logo.svg';
import './App.css';

const Hello = () => {
  const isReact = true;

  return (
    <p>
      {(() => {
        if(isReact){
          return "Hello, React!!";
        }else{
          return "Hello!!";
        }
      })()}
    </p>
  );
};

export default Hello;