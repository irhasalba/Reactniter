import React, { Component } from "react";
import logo from "./assets/images/react.png";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={logo} className="logo" />
          <h1 className="text">Welcome to Codeigniter With Reactjs Bundle</h1>
          <p className="text">
            Documentation | Reactjs : <a href="https://reactjs.org/"> Here</a> |
            Codeigniter 4 |{" "}
            <a href="https://codeigniter.com/user_guide/index.html">Here</a>
          </p>
          <h6 className="text">
            created by : Muhammad Irhas Albais | Github :{" "}
            <a href="https://github.com/irhasalba">Here</a>{" "}
          </h6>
        </div>
      </div>
    );
  }
}

export default App;
