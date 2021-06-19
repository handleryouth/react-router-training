import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Item from "./ItemDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:id" component={Item}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
