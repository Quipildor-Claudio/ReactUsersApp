import React from 'react'
import { NavLink } from 'react-router-dom'

export const UserRow = ({ handlerRemoveUser, handlerUserSelectedForm, id, username, email }) => {


    return (
        <tr>
            <td></td>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button type='button' className='btn btn-secondary btn-sm'
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email,
                    })}
                >Update</button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + id} >
                    update route
                </NavLink>
            </td>
            <td>
                <button type='button' className='btn btn-danger btn-sm'
                    onClick={() => handlerRemoveUser(id)}>Delete</button>
            </td>
        </tr>
    )
}
