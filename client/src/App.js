import React from "react";
import './styles/style1.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Headers from "./components/Headers";


function App() {
  return (
    <BrowserRouter>
     <AppRouter/>
    
    </BrowserRouter>
  );
}

export default App;
