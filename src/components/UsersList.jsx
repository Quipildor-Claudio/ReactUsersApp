import React from 'react'
import { UserRow } from './UserRow'

export const UsersList = ({ users=[]}) => {
    return (<>
        <p>Litado de Usuarios</p>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {
                        users.map(user=>(
                            <UserRow key={user.id}  user={user}/>
                        ))
                    }
            </tbody>
        </table>
    </>)
}
