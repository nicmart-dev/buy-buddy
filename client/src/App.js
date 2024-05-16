// import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="welcome">
        <header className="welcome__header"></header>
        <div className="list__container">
          <h1 className="list__title">Welcome to BuyBuddy</h1>
          <h2 className="list__subtitle">all shopping items</h2>
          <ul className="list__items">
            <li>
              Placeholder <button className="button--delete">delete</button>
            </li>
            <li>
              Placeholder <button className="button--delete">delete</button>
            </li>
            <li>
              Placeholder <button className="button--delete">delete</button>
            </li>
          </ul>
          <button className="button">add shopping item</button>
        </div>
      </div>

      <AddItem />
    </div>
  );
}
export default App;
