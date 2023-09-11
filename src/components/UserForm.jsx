import React, { useEffect, useState } from 'react'


export const UserForm = ({ handlerAddUser, initialUserForm, userSelected }) => {
    const [userForm, setUserForm] = useState(initialUserForm);
    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })

    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita el refresh en el navegador
        if (!username || (!password && id === 0) || !email) {
            alert('Debe completar los campos del formulario!');
            return;
        }
        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        // guardar el user form en el listado de usuarios
        setUserForm(initialUserForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input type='hidden' name='id' value={id} />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
        </form>
    )
}
