import React, { Component } from "react";
import ReactJson from "react-json-view";
import "./App.css";
import { Flexi } from "./components";
import flexiConfig from "./mock/flexi_config";

class App extends Component {
  constructor() {
    super();
    this.getFlexiData = this.getFlexiData.bind(this);
  }
  state = {
    flexiConfig: flexiConfig,
    formData: {}
  };

  getFlexiData(data) {
    this.setState({ formData: { ...data } });
    return data;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
        <h2>FlexiForm</h2>
        <Flexi onSubmit={this.getFlexiData} config={flexiConfig} />
        <br />
        <br />
        <br />
        <h2>Output</h2>
        <ReactJson src={this.state.formData} />
      </div>
    );
  }
}

export default App;
