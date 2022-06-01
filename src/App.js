/* eslint-disable */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calculator from './component/Calculator.js';
import Home from './component/Home.js';
import Quote from './component/Quote.js';
import NavBar from './component/Navbar.js';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="calculator" element={<Calculator className="App" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
