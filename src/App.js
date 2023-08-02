import logo from "./logo.svg";
import "./App.css";

import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
      <h1>E-commerce</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
