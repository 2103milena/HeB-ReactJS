import React from 'react';
import Layout from './components/Layout/Layout';
import { HashRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout />
      </HashRouter>
    </div>
  );
}

export default App;
