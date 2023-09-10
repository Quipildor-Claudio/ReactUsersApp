import React from 'react'

export const UserRow = ({user,id}) => {
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
                <button type='button' className='btn btn-danger btn-sm'>Delete</button>
            </td>
        </tr>
    )
}
