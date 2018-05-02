import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Main} />
        </div>
      </ Router>
      </div>
    );
  }
}

export default App;
