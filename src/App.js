//import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
/**
 * Challenge: Build the Header component
 */
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
