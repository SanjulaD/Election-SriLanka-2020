import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FooterPage from './components/Footer/Footer.jsx';
import Home from './components/Home/TitleComponent/Title';

import { BrowserRouter , Route } from 'react-router-dom';
import PartyList from './components/Home/PartyList/PartyList';
import PartyDetails from './components/Home/PartyList/DistrictDetails/DistrictDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Route exact path="/" component={ Home } />
          <Route exact path="/parties" component={ PartyList } />
          <Route exact path="/candidates" component={ PartyDetails } />
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
