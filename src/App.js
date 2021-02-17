import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Landing />
        </Route>
      </div>
    </Router>
  );
}

export default App;
