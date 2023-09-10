import React, { useState } from 'react'


export const UserForm = ({ handlerAddUser ,initialUserForm}) => {
    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password, email } = userForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })

    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita el refresh en el navegador
        if (!username || !password || !email) {
            alert('Debe completar los campos del formulario!');
            return;
        }
        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        // guardar el user form en el listado de usuarios
        setUserForm(initialUserForm);
    }

    return (
        <form  onSubmit={ onSubmit }>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )
}
