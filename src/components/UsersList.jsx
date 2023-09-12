import React, { useContext } from 'react'
import { UserRow } from './UserRow'
import { UserContext } from '../context/UserContext';

export const UsersList = () => {
    const{users}=useContext(UserContext);
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
                    <th>Update2</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, username, email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email} />
                    ))
                }
            </tbody>
        </table>
    </>)
}
