import React, { useReducer } from 'react'
import { UsersList } from './components/UsersList'
import { UserForm } from './components/UserForm'
import { usersReducer } from './reducers/usersReducer';
const initialUsers = [{
    id: 1,
    userName: 'claudio',
    password: '123',
    email: 'claudio@gmail.com'
}];

const initialUserForm = {
    username: '',
    password: '',
    email: '',
};

export const UsersApp = () => {


    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        console.log(user);
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }
    return (<div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
            <div className="col">

                {users.length === 0 ?
                    <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                    : <UsersList handlerRemoveUser={handlerRemoveUser} users={users} />
                }

            </div>
            <div className="col">
                <UserForm
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser} />
            </div>

        </div>
    </div>)
}
