import React from "react";
import "../stylesheets/main.scss";
import api from '../api/users';

export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

 
