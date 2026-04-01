import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComparisonPage from './pages/ComparisonPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<ComparisonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
