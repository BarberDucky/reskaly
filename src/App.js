import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import { connect } from 'react-redux'
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
              <Route exact path="/main" component={Main} />
              <Redirect push to={`/${this.props.page}`} />
            </div>
          </ Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}


export default connect(mapStateToProps)(App);
