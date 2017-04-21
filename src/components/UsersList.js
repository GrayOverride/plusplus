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
                    {users.map((user, index) => {
                        return (
                         <UserListElement key={index} user={user} />
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