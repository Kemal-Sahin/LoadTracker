import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headerComponent/headerComponent';
import Home from './components/homeComponent/homeComponent';
import Add from './components/addComponent/addComponent'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/login" component = {Login} />
          <Route exact path="/" component = {Home} />
          <Route exact path="/add" component = {Add} />
        </Switch>
      </Router>
    </React.Fragment>
    
    </div>
  );
}

export default App;
