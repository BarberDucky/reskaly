import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import './css/style.css'
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Router>
        <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Main} />
        </div>
      </ Router>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
