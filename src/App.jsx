import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';


const App =() => {
  return(
    <Router>
      <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route exact path="/home" element = {<Home />} />
        </Routes>
    </Router>
  );
};
export default App;