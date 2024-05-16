
import axios from "axios";
import './App.scss';


const url = "http://localhost:5050/";

const getAllShoppingItmes = async (setShoppingItems) => {
  try {
  const response = await axios.get({url});
  setShoppingItems(response.data);
}catch (error) {
  console.error("Error getting all shopping items", error);
}
};


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <div className ="list__container">
        <h1 className ="list__title">Welcome to BuyBuddy</h1>

        <h2 className="list__subtitle">all shopping items</h2>
        <ul className="list__items">
          <li>Placeholder <button className="list__delete">delete</button></li>
          <li>Placeholder <button className="list__delete">delete</button></li>
          <li>Placeholder <button className="list__delete">delete</button></li>
         
        </ul>

        <button className="list__button">add shopping item</button>


      </div>
    </div>
  );
}

export default App;
