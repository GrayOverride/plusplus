import React from 'react'

export default class UsersListElement extends React.Component {

  handleClick(user, e) {
     this.props.dispatch({ type: 'USER_INCREMENT_POINTS', userId: user._id })
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <p><b>Name:</b> {user.name} <br /> <b>Team:</b> {user.team} <br /> <b>Points: </b> {user.points}</p>
        <button onClick={this.handleClick.bind(this, user)}>INCREMENT POINTS</button>
      </div>
    )
  }
}