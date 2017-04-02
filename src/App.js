import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApixNode from './components/ApixNode.js';
import ApixNodeBuilder from './components/ApixNodeBuilder.js';
import IMDbClone from './IMDbClone.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      styleIndex: 1,
      pageIndex: 1,
    };
  }

  render() {
    var partial;
    if (this.state.styleIndex === 0) {
      partial = <IMDbClone />;
    } else {
      partial = <AppBoilerplate />;
    }
    
    return (
      <div className="App">
        <Navbar pageIndex={this.state.pageIndex} />
        {partial}
      </div>
    );
  }
}

class Navbar extends Component {
  handleClick() {
    console.log('handleClick()');
  }
  render() {
    return (
      <ul className="nav nav-pills nav-justified">
        <li role="presentation" className=""><a href="#">Wiki-clone</a></li>
        <li role="presentation" className="active"><a href="#" onClick={() => this.handleClick()}>IMDb-clone</a></li>
        <li role="presentation"><a href="#">Yelp-clone</a></li>
      </ul>
    );
  }
}

class AppBoilerplate extends Component {
  render() {
    var partial;
    if (this.props.pageIndex === 0) {
      partial = <ApixNode />;
    } else {
      partial = <ApixNodeBuilder />;
    }

    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="App-container">
          {partial}
        </div>
      </div>
    );
  }
}

export default App;
