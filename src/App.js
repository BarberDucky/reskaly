import React, { Component } from 'react';
import Subject from './components/Subject'
import SubjectInput from './components/SubjectInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Subject name="web"></Subject>
        <Subject name="peb"></Subject>
        <SubjectInput name="proba"></SubjectInput>
        <Subject name="deb"></Subject>
      </div>
    );
  }
}

export default App;
