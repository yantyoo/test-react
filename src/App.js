import {Routes, Route, Link} from "react-router-dom";
import BottomBar from "./BottomBar/BottomBar";
import Header from "./Header/Header";
import Home from "./Home/Home";
import './App.css';

function App() {
  return (
      <div className="container">
      <Header />
      <Home />
      <BottomBar />
      </div>
  );
}

export default App;