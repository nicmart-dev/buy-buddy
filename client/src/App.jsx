import logo from './logo.svg';
import './App.scss';

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
