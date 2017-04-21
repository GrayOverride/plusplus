import React from 'react'

export default class UsersListElement extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <div>
        <p><b>Name:</b> {user.name} <br /> <b>Team:</b> {user.team} <br /> <b>Points: </b> {user.points}</p>
      </div>
    )
  }
}