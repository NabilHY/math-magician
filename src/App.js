/* eslint-disable */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calculator from './component/calculator';
import Home from './component/home';
import Quote from './component/quote';
import NavBar from './component/Navbar';

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
