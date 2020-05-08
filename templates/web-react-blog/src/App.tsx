import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/*" />
    </Router>
  );
}

export default App;
