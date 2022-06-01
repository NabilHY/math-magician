import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calculator from './component/Calculator';
import Home from './component/Home';
import Quote from './component/Quote';
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
