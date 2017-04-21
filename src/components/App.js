import React from "react";
import "../stylesheets/main.scss";
import api from '../api/users';
import UsersList from './UsersList'

export default class App extends React.Component {
  // render
  render() {
    return (
        <UsersList/>
    );
  }
}

 
