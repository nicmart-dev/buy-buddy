import { useState, useEffect } from 'react';
import axios from "axios";
import './App.scss';

function App() {
  const [shoppingList, setShoppingList] = useState([]);


const url = "http://localhost:5050";



useEffect(() => {
const getShoppingList = async () => {

  const response = await axios.get(
    `${url}/shopping-list`
  );
  setShoppingList(response.data);
};
getShoppingList();
}, []);




  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <div className ="list__container">
        <h1 className ="list__title">Welcome to BuyBuddy</h1>

        <h2 className="list__subtitle">all shopping items</h2>
        <ul className="list__items">
        {shoppingList
        .map((item) => (
          <li key={item.id}>
          <h5> {item.quantity} x {item.name} </h5>
         
          </li>
        ))}
        </ul>

        <button className="list__button">add shopping item</button>


      </div>
    </div>
  );
}

export default App;
