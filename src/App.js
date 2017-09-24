import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Children from "./children";

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>hello</td>
          </tr>
          <tr>
            <td>hello</td>
          </tr>
          <tr>
            <td>hello</td>
          </tr>
          <tr>
            <Children />
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
