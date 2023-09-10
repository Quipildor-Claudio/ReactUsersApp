import React from 'react'

export const UserRow = ({ handlerRemoveUser, user }) => {
    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.password}</td>
            <td>{user.email}</td>
            <td>
                <button type='button' className='btn btn-secondary btn-sm'>Update</button>
            </td>
            <td>
                <button type='button' className='btn btn-danger btn-sm'
                    onClick={() => onRemoveUser(user.id)}>Delete</button>
            </td>
        </tr>
    )
}
