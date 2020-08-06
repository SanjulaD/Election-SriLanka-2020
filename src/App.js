import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FooterPage from './components/Footer/Footer.jsx';
import Home from './components/Home/TitleComponent/Title';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
      <FooterPage />
    </div>
  );
}

export default App;
