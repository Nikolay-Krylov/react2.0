import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Route path component='Profile'/>
      </div>
    </BrowserRouter>
    
  )
}

export default App;