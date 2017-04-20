import React from "react";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  fetchdata(){
    fetch('http://activity.cdx.cloud/api/users')
    .then(function(response) {
      return response.json();
    })
  }
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
const app = new App()
  console.log(app.fetchdata());
