import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("you clicked me!");
    setCount(count + 1)
  }

  function MyButton() {
    return (
      <button onClick={handleClick}>
        clicked {count} times
      </button>
    )
  }


  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(
    product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'red' : 'green'
        }}
      >

        {product.title}
      </li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={user.imageUrl} className="App-logo" alt="logo" />
        <h1>     {user.name} </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div> <MyButton /> </div>
        <div> <MyButton /> </div>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
