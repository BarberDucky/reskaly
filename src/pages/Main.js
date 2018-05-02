import React, { Component } from 'react';
import SideList from '../components/SideList'
import Scaler from '../components/Scaler'
import '../css/style.css'

export default class Main extends Component {
  render() {
    return (
      <div className="mainDiv">
        <header> 
          <h1>ReSkaly</h1>
          <h2>User</h2>
          <button>Logout</button>
        </header>
        <div className='contentHolder'>
          <SideList />
          <Scaler />
        </div>
      </div>
    );
  }
}
