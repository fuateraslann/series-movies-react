import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <MainRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;