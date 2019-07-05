import React from 'react';
// import logo from '/logo.svg'
import './App.css';
// import Home from './Home';
import Nav from './Nav';
import Feed from './Feed';
import Login from './Login';
// import Cards from './Cards';
// import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Feed" component={Feed} />
          <Route path="/Login" component={Login} />
          {/* <Route path="/cards" component={Cards}/> */}
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
  </div>
);

export default App;
