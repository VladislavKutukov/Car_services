import React from "react";
import './styles/style1.css';
import Headers from "./components/Headers";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Document from "./components/Document";
import Works from "./components/Works";


function App() {
  return (
    <div className="App">
      <Headers/>
      <Intro/>
      <Features/>
      <Document/>
      <Works/>
    </div>
  );
}

export default App;
