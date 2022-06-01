import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './component/calculator';
import Home from './component/home';
import Quote from './component/quote';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator className="App" />} />
      </Routes>
    );
  }
}

export default App;
