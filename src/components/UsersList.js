import React from 'react';
import Users from '../api/users';
import { connect } from 'react-redux';

import UserListElement from './UserListElement';

class UsersList extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.users.length) {
            this.props.dispatch({
                type: 'usersFetchList'
            })
        }
    }

    render() {
        if (this.props.users.length) {
            console.log(this.state)
            return (
                <div>
                    {this.state.users.forEach((index, user) => {
                        <UserListElement key={index} user={user} />
                    })}
                </div>
            )
        } else {
            return (
                <h2>Loading users...</h2>
            )
        }
    }

}

//Export the connected class
function mapStateToProps(state) {
    return ({
        users: state.users || []
    });
}

export default connect(mapStateToProps)(UsersList);