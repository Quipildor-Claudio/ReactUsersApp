import React from 'react'
import { UsersList } from './components/UsersList'
import { UserForm } from './components/UserForm'

export const UsersApp = () => {
    const initialUsers = [{
        id: 1,
        userName: 'claudio',
        password: '123',
        email: 'claudio@gmail.com'
    }];
    return (<div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
            <div className="col">
                <UsersList users={initialUsers}/>
            </div>
            <div className="col">
                <UserForm />
            </div>

        </div>
    </div>)
}
