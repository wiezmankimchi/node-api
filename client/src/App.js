import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Route } from "react-router-dom";

//import components
import Navmenu from "./components/navmenu";
import MainItem from "./components/mainitem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <div className="col col-sm">
              <Navmenu />
            </div>
            <div className="col col-lg">
              <MainItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
