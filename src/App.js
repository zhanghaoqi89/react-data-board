import React, { Component } from 'react';
import logo from './logo.svg';
import { observer, inject } from 'mobx-react';
import './App.css';
@inject('GlobalData')
@observer
class App extends Component {
  render() {
    const { GlobalData } = this.props;
    console.log(GlobalData)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {GlobalData.title}
        </p>
      </div>
    );
  }
}

export default App;
