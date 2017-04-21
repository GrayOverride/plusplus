import React from 'react';
import { connect } from 'react-redux';

import UserListElement from './UserListElement';

export class UsersList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Render USER LIST with', this.props.users)
        const users = this.props.users;
            return (
                <div>
                    {users
                        .sort((user1, user2) => user1.name.localeCompare(user2.name))
                        .map((user, index) => {
                        return (
                         <UserListElement key={index} user={user} dispatch={this.props.dispatch} />
                        );
                    })}
                </div>
            )
    }
}

function mapStateToProps(state) {
    console.log('UserList mapStateToProps ', state)
    return ({
        users: state.users
    });
}

export default connect(mapStateToProps)(UsersList);