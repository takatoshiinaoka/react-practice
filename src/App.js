import logo from './logo.svg';
import './App.css';

const numbers = [2, 4, 6, 8];

const ListItems = () => {

  // map() を利用して、配列 numbers から要素を1つずつ取り出して
  // 変数に格納し li タグで囲む
  // li タグに文字列の key属性を含める
  // toString() は数値を文字列に変換するメソッド
  const items = numbers.map((item) => 
    <li key={item.toString()}>{item}</li>);

  // li タグで囲った実行結果 item を ul タグで囲み、JSXに埋め込む
  return <ul>{items}</ul>
};

export default ListItems;