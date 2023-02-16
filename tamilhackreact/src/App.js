import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Info from './components/Info';
import News from './components/news';
import Mhome from './components/Mhome';
import Modelinfo from './components/modelinfo';
import Organview from './components/organview';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path='/' exact element={<Mhome/>} />
      <Route path='/search' exact element={<Home/>} />
      <Route path='/info' exact element={<Info/>} />
      <Route path='/news' exact element={<News/>} />
      <Route path='/model' exact element={<Modelinfo/>} />
      <Route path='/organ' exact element={<Organview/>} />
    </Routes>
  </Router>

     
      
    </div>
  );
}

export default App;
