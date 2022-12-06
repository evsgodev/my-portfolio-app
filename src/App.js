import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.scss';
import Home from "./components/routes/Home";
import About from "./components/routes/About";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </Router>
  );
}

export default App;
