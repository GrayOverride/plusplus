import React from 'react'
import Users from '../api/users'
import UserListElement from './UserListElement';

export default class UsersList extends React.Component {
    
    constructor() {
        super();
        this.state =  {
        users: []
        };
    }
    

    loadData () {
        this.setState({users: Users.getUsers()})
    }
  
    componentDidMount () {
        console.log('teest')
        this.setState({users: []}, () => {
            this.setState({users: Users.getUsers()})
            console.log(this.state)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.users.forEach((index, user) => {
                    <UserListElement key={index} user={user} />
                })}
            </div>
        )
    }
}