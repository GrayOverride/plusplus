import React from "react";
import { connect } from 'react-redux';
import UsersList from './UsersList';

export class App extends React.Component {

  componentWillMount() {
    this.props.dispatch({ type: 'USERS_FETCH_LIST' })
  }

  render() {

    const { users } = this.props;

    if (!users.length) {
      return (
        <h2>Loading users...</h2>
      );
    }

    return (
      <div>
        <h2>Teleopti-PlusPlus</h2>
        <UsersList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users || []
  }
}

export default connect(mapStateToProps)(App);

