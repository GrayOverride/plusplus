import React from 'react'

export default class UsersListElement extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <h2>{user}</h2>
    )
  }
}