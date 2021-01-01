import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Main />
      </Router>
  );
}

export default App;


